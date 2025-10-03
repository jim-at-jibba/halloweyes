import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Info } from "lucide-react-native";
import { useState } from "react";

import { ThemedText } from "@/components/themed-text";
import { VideoListItem } from "@/components/video-list-item";
import { CreditsModal } from "@/components/credits-modal";
import { videos } from "@/constants/videos";
import { useThemeColor } from "@/hooks/use-theme-color";

export default function IndexScreen() {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={styles.header}>
        <ThemedText type="spooky">🎃 HallowEyes 👻</ThemedText>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.infoButton}
        >
          <Info size={24} color={textColor} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={videos}
        renderItem={({ item }) => <VideoListItem video={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
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
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  list: {
    paddingVertical: 8,
  },
  infoButton: {
    padding: 12,
    margin: -4,
  },
});

