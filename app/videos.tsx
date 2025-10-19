import { StyleSheet, View, FlatList, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Shuffle, ArrowLeft, Info } from "lucide-react-native";

import { ThemedText } from "@/components/themed-text";
import { VideoListItem } from "@/components/video-list-item";
import { videos } from "@/constants/videos";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useRouter } from "expo-router";
import { useState } from "react";
import { CreditsModal } from "@/components/credits-modal";

export default function VideosScreen() {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color={textColor} />
        </Pressable>
        <ThemedText type="spooky">Spooky eyes</ThemedText>
        <View style={styles.backButton}>
          <Pressable
            onPress={() => setModalVisible(true)}
            style={styles.infoButton}
          >
            <Info size={24} color={textColor} />
          </Pressable>
        </View>
      </View>
      <FlatList
        data={videos}
        renderItem={({ item }) => <VideoListItem video={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <View style={styles.footer}>
        <Pressable
          style={[styles.randomButton, { borderColor: textColor }]}
          onPress={() => router.push("/video-player?mode=random")}
        >
          <Shuffle size={20} color={textColor} />
          <ThemedText style={[styles.randomButtonText, { color: textColor }]}>
            Random
          </ThemedText>
        </Pressable>
      </View>
      <CreditsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
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
  list: {
    paddingVertical: 8,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    alignItems: "center",
  },
  randomButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  randomButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  infoButton: {
    padding: 12,
    margin: -4,
  },
});
