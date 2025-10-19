import { StyleSheet, View, Pressable, Modal } from "react-native";
import { Info } from "lucide-react-native";
import { ThemedText } from "@/components/themed-text";
import { ExternalLink } from "@/components/external-link";
import { useThemeColor } from "@/hooks/use-theme-color";

interface CreditsModalProps {
  visible: boolean;
  onClose: () => void;
}

export function CreditsModal({ visible, onClose }: CreditsModalProps) {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const borderColor = useThemeColor({}, "border");

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={[styles.modalContainer, { backgroundColor, borderColor }]}>
          <View style={styles.header}>
            <Info size={24} color={textColor} />
            <ThemedText type="title" style={styles.title}>
              Credits
            </ThemedText>
          </View>

          <View style={styles.content}>
            <ThemedText style={styles.text}>
              This app was built to allow you to make awesome costumes and
              displays.
            </ThemedText>

            <ThemedText style={styles.text}>
              All credit for the incredible eye animations goes to the talented
              artist:
            </ThemedText>

            <ExternalLink
              href="https://www.youtube.com/@satya_Badiger/videos"
              style={styles.linkContainer}
            >
              <ThemedText style={styles.linkText}>
                @satya_Badiger on YouTube
              </ThemedText>
            </ExternalLink>

            <ThemedText style={styles.text}>
              Please visit their channel to see more amazing animations and show
              your support!
            </ThemedText>
          </View>

          <Pressable
            onPress={onClose}
            style={({ pressed }) => [
              styles.closeButton,
              { opacity: pressed ? 0.6 : 1 },
            ]}
          >
            <ThemedText style={styles.closeButtonText}>Close</ThemedText>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContainer: {
    width: "100%",
    maxWidth: 400,
    borderRadius: 16,
    borderWidth: 1,
    padding: 24,
    maxHeight: "80%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    gap: 16,
    marginBottom: 24,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
  linkContainer: {
    padding: 12,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 8,
    alignItems: "center",
  },
  linkText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007AFF",
    textDecorationLine: "underline",
  },
  closeButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

