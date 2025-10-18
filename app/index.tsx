import { StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Info, Film, Volume2 } from "lucide-react-native";
import { useState } from "react";

import { ThemedText } from "@/components/themed-text";
import { CreditsModal } from "@/components/credits-modal";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

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
      <View style={styles.content}>
        <TouchableOpacity
          style={[styles.navButton, { borderColor: textColor }]}
          onPress={() => router.push("/videos")}
        >
          <Film size={32} color={textColor} />
          <ThemedText style={[styles.navButtonText, { color: textColor }]}>
            Videos
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navButton, { borderColor: textColor }]}
          onPress={() => router.push("/soundboard")}
        >
          <Volume2 size={32} color={textColor} />
          <ThemedText style={[styles.navButtonText, { color: textColor }]}>
            Soundboard
          </ThemedText>
        </TouchableOpacity>
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
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    padding: 16,
    gap: 16,
    justifyContent: "center",
  },
  navButton: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
    gap: 8,
  },
  navButtonText: {
    fontSize: 20,
    fontWeight: "700",
  },
  infoButton: {
    padding: 12,
    margin: -4,
  },
});
