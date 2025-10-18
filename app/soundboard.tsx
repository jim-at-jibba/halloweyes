import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Volume2, VolumeX } from "lucide-react-native";
import { useState, useEffect } from "react";
import { Audio } from "expo-av";

import { ThemedText } from "@/components/themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";
import { soundEffects } from "@/constants/sounds";

export default function SoundboardScreen() {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const [playingStates, setPlayingStates] = useState<Record<string, boolean>>(
    {}
  );
  const [soundObjects, setSoundObjects] = useState<
    Record<string, Audio.Sound>
  >({});

  useEffect(() => {
    return () => {
      Object.values(soundObjects).forEach((sound) => {
        sound.unloadAsync();
      });
    };
  }, [soundObjects]);

  const toggleSound = async (id: string, file: any) => {
    if (playingStates[id]) {
      const sound = soundObjects[id];
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
        setPlayingStates((prev) => ({ ...prev, [id]: false }));
        setSoundObjects((prev) => {
          const newSounds = { ...prev };
          delete newSounds[id];
          return newSounds;
        });
      }
    } else {
      const { sound } = await Audio.Sound.createAsync(file);
      setSoundObjects((prev) => ({ ...prev, [id]: sound }));
      setPlayingStates((prev) => ({ ...prev, [id]: true }));

      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          setPlayingStates((prev) => ({ ...prev, [id]: false }));
          sound.unloadAsync();
          setSoundObjects((prev) => {
            const newSounds = { ...prev };
            delete newSounds[id];
            return newSounds;
          });
        }
      });

      await sound.playAsync();
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={styles.header}>
        <ThemedText type="spooky">Soundboard</ThemedText>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Effects</ThemedText>
          <View style={styles.grid}>
            {soundEffects.map((effect) => (
              <TouchableOpacity
                key={effect.id}
                style={[
                  styles.soundButton,
                  {
                    borderColor: textColor,
                    backgroundColor: playingStates[effect.id]
                      ? textColor
                      : "transparent",
                  },
                ]}
                onPress={() => toggleSound(effect.id, effect.file)}
              >
                {playingStates[effect.id] ? (
                  <VolumeX
                    size={24}
                    color={playingStates[effect.id] ? backgroundColor : textColor}
                  />
                ) : (
                  <Volume2
                    size={24}
                    color={playingStates[effect.id] ? backgroundColor : textColor}
                  />
                )}
                <ThemedText
                  style={[
                    styles.soundButtonText,
                    {
                      color: playingStates[effect.id] ? backgroundColor : textColor,
                    },
                  ]}
                >
                  {effect.name}
                </ThemedText>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={[styles.section, styles.disabledSection]}>
          <ThemedText style={styles.sectionTitle}>Background</ThemedText>
          <View style={styles.comingSoonContainer}>
            <ThemedText style={styles.comingSoonText}>Coming Soon</ThemedText>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    borderBottomWidth: 2,
    alignItems: "center",
  },
  content: {
    padding: 16,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  soundButton: {
    borderWidth: 2,
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    minWidth: "47%",
  },
  soundButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  disabledSection: {
    opacity: 0.5,
  },
  comingSoonContainer: {
    padding: 24,
    alignItems: "center",
  },
  comingSoonText: {
    fontSize: 14,
    fontStyle: "italic",
  },
});
