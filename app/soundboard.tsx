import { StyleSheet, View, ScrollView, Pressable, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Volume2, VolumeX, ArrowLeft, Repeat } from "lucide-react-native";
import { useState, useEffect, useRef } from "react";
import { useAudioPlayer, setAudioModeAsync, AudioPlayer } from "expo-audio";
import { useRouter } from "expo-router";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import { ThemedText } from "@/components/themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";
import { soundEffects, ambientSounds } from "@/constants/sounds";

export default function SoundboardScreen() {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const router = useRouter();
  const layout = useWindowDimensions();
  const backgroundPlayer = useAudioPlayer(null);
  const [playingBackground, setPlayingBackground] = useState<string | null>(
    null
  );
  const effectPlayersRef = useRef<Record<string, AudioPlayer>>({});
  const [playingEffects, setPlayingEffects] = useState<Record<string, boolean>>(
    {}
  );
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'effects', title: 'Effects' },
    { key: 'background', title: 'Background' },
  ]);

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

  const EffectsRoute = () => (
    <ScrollView contentContainerStyle={styles.tabContent}>
      <View style={styles.grid}>
        {soundEffects.map((effect) => {
          const isPlaying = playingEffects[effect.id] || false;

          return (
            <Pressable
              key={effect.id}
              style={({ pressed }) => [
                styles.soundButton,
                {
                  borderColor: textColor,
                  backgroundColor: isPlaying ? textColor : "transparent",
                  opacity: pressed ? 0.6 : 1,
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
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );

  const BackgroundRoute = () => (
    <ScrollView contentContainerStyle={styles.tabContent}>
      <View style={styles.grid}>
        {ambientSounds.map((ambient) => (
          <Pressable
            key={ambient.id}
            style={({ pressed }) => [
              styles.soundButton,
              {
                borderColor: textColor,
                backgroundColor:
                  playingBackground === ambient.id
                    ? textColor
                    : "transparent",
                opacity: pressed ? 0.6 : 1,
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
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );

  const renderScene = SceneMap({
    effects: EffectsRoute,
    background: BackgroundRoute,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={[styles.indicator, { backgroundColor: textColor }]}
      style={[styles.tabBar, { backgroundColor }]}
      labelStyle={styles.label}
      activeColor={textColor}
      inactiveColor={textColor}
      pressColor="transparent"
      renderLabel={({ route, focused }: { route: any; focused: boolean }) => (
        <View style={styles.tabLabelContainer}>
          {route.key === 'background' && (
            <Repeat 
              size={16} 
              color={textColor} 
              style={{ opacity: focused ? 1 : 0.6 }} 
            />
          )}
          <ThemedText
            style={[
              styles.tabLabel,
              { 
                color: textColor,
                opacity: focused ? 1 : 0.6,
                fontWeight: focused ? "700" : "600",
              },
            ]}
          >
            {route.title}
          </ThemedText>
        </View>
      )}
    />
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={styles.header}>
        <Pressable 
          style={({ pressed }) => [
            styles.backButton,
            { opacity: pressed ? 0.6 : 1 },
          ]}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color={textColor} />
        </Pressable>
        <ThemedText type="spooky">Soundboard</ThemedText>
        <View style={styles.backButton} />
      </View>
      <View style={[styles.explainer, { borderBottomColor: textColor }]}>
        <ThemedText style={[styles.explainerText, { color: textColor }]}>
          Background sounds loop continuously. Effects can be played on top.
        </ThemedText>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    width: 24,
  },
  explainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  explainerText: {
    fontSize: 14,
    textAlign: "center",
    opacity: 0.8,
  },
  tabBar: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 2,
  },
  indicator: {
    height: 3,
  },
  label: {
    fontWeight: "600",
    textTransform: "none",
  },
  tabLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  tabLabel: {
    fontSize: 18,
    textTransform: "none",
  },
  tabContent: {
    padding: 16,
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
