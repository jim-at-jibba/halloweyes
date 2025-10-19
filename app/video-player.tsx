import { StyleSheet, View, Pressable } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

import { ThemedText } from '@/components/themed-text';
import { videos } from '@/constants/videos';
import { useOrientation } from '@/hooks/use-orientation';

export default function VideoPlayerScreen() {
  const { id, mode } = useLocalSearchParams<{ id?: string; mode?: string }>();
  const router = useRouter();
  const orientation = useOrientation();
  const isRandomMode = mode === 'random';
  
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  
  const video = videos.find(v => v.id === (currentVideoId || id));
  
  const player = useVideoPlayer(video ? video.path : null, player => {
    if (player) {
      player.loop = !isRandomMode;
      player.play();
    }
  });
  
  useEffect(() => {
    if (isRandomMode && !currentVideoId && !id) {
      const randomVideo = videos[Math.floor(Math.random() * videos.length)];
      setCurrentVideoId(randomVideo.id);
    }
  }, [isRandomMode, currentVideoId, id]);
  
  useEffect(() => {
    if (isRandomMode && player) {
      const handleEnd = () => {
        let nextVideo;
        do {
          nextVideo = videos[Math.floor(Math.random() * videos.length)];
        } while (nextVideo.id === currentVideoId && videos.length > 1);
        setCurrentVideoId(nextVideo.id);
      };
      
      player.addListener('playToEnd', handleEnd);
      return () => {
        player.removeListener('playToEnd', handleEnd);
      };
    }
  }, [isRandomMode, player, currentVideoId]);

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
        <Pressable 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <ThemedText style={styles.backText}>← Back</ThemedText>
        </Pressable>
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