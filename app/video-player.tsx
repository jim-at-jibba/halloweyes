import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { videos } from '@/constants/videos';
import { useOrientation } from '@/hooks/use-orientation';

export default function VideoPlayerScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const orientation = useOrientation();
  
  const video = videos.find(v => v.id === id);
  
  const player = useVideoPlayer(video ? video.path : null, player => {
    if (player) {
      player.loop = true;
      player.play();
    }
  });

  if (!video) {
    return (
      <View style={styles.container}>
        <ThemedText type="title">Video not found</ThemedText>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <VideoView
        style={styles.video}
        player={player}
        fullscreenOptions={{
          enable: true,
        }}
        allowsPictureInPicture
        nativeControls
      />
      {orientation === 'portrait' && (
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <ThemedText style={styles.backText}>← Back</ThemedText>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  video: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
  },
});