import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Volume2, VolumeX } from "lucide-react-native";
import { useState, useEffect, useRef } from "react";
import { useAudioPlayer, setAudioModeAsync, AudioPlayer } from "expo-audio";

import { ThemedText } from "@/components/themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";
import { soundEffects, ambientSounds } from "@/constants/sounds";

export default function SoundboardScreen() {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const backgroundPlayer = useAudioPlayer(null);
  const [playingBackground, setPlayingBackground] = useState<string | null>(
    null
  );
  const effectPlayersRef = useRef<Record<string, AudioPlayer>>({});
  const [playingEffects, setPlayingEffects] = useState<Record<string, boolean>>(
    {}
  );

  useEffect(() => {
    setAudioModeAsync({
      playsInSilentMode: true,
      shouldPlayInBackground: true,
    });

    const players = effectPlayersRef.current;
    return () => {
      Object.values(players).forEach((player) => {
        player.remove();
      });
    };
  }, []);

  const toggleEffect = async (id: string, file: any) => {
    let player = effectPlayersRef.current[id];

    if (!player) {
      const { createAudioPlayer } = await import("expo-audio");
      player = createAudioPlayer(file);
      effectPlayersRef.current[id] = player;

      player.addListener("playbackStatusUpdate", (status) => {
        if (status.didJustFinish) {
          setPlayingEffects((prev) => ({ ...prev, [id]: false }));
        }
      });
    }

    if (player.playing) {
      player.pause();
      player.seekTo(0);
      setPlayingEffects((prev) => ({ ...prev, [id]: false }));
    } else {
      player.seekTo(0);
      player.play();
      setPlayingEffects((prev) => ({ ...prev, [id]: true }));
    }
  };

  const toggleBackgroundSound = (id: string, file: any) => {
    if (playingBackground === id) {
      backgroundPlayer.pause();
      setPlayingBackground(null);
    } else {
      backgroundPlayer.replace(file);
      backgroundPlayer.loop = true;
      backgroundPlayer.play();
      setPlayingBackground(id);
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
            {soundEffects.map((effect) => {
              const isPlaying = playingEffects[effect.id] || false;

              return (
                <TouchableOpacity
                  key={effect.id}
                  style={[
                    styles.soundButton,
                    {
                      borderColor: textColor,
                      backgroundColor: isPlaying ? textColor : "transparent",
                    },
                  ]}
                  onPress={() => toggleEffect(effect.id, effect.file)}
                >
                  {isPlaying ? (
                    <VolumeX
                      size={24}
                      color={isPlaying ? backgroundColor : textColor}
                    />
                  ) : (
                    <Volume2
                      size={24}
                      color={isPlaying ? backgroundColor : textColor}
                    />
                  )}
                  <ThemedText
                    style={[
                      styles.soundButtonText,
                      {
                        color: isPlaying ? backgroundColor : textColor,
                      },
                    ]}
                  >
                    {effect.name}
                  </ThemedText>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Background</ThemedText>
          <View style={styles.grid}>
            {ambientSounds.map((ambient) => (
              <TouchableOpacity
                key={ambient.id}
                style={[
                  styles.soundButton,
                  {
                    borderColor: textColor,
                    backgroundColor:
                      playingBackground === ambient.id
                        ? textColor
                        : "transparent",
                  },
                ]}
                onPress={() => toggleBackgroundSound(ambient.id, ambient.file)}
              >
                {playingBackground === ambient.id ? (
                  <VolumeX
                    size={24}
                    color={
                      playingBackground === ambient.id
                        ? backgroundColor
                        : textColor
                    }
                  />
                ) : (
                  <Volume2
                    size={24}
                    color={
                      playingBackground === ambient.id
                        ? backgroundColor
                        : textColor
                    }
                  />
                )}
                <ThemedText
                  style={[
                    styles.soundButtonText,
                    {
                      color:
                        playingBackground === ambient.id
                          ? backgroundColor
                          : textColor,
                    },
                  ]}
                >
                  {ambient.name}
                </ThemedText>
              </TouchableOpacity>
            ))}
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
});
