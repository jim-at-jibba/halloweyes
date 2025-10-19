import { StyleSheet, View, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { Video } from '@/constants/videos';
import { useThemeColor } from '@/hooks/use-theme-color';

interface VideoListItemProps {
  video: Video;
  onPress?: () => void;
}

export function VideoListItem({ video }: VideoListItemProps) {
  const router = useRouter();
  const backgroundColor = useThemeColor({}, 'card');
  const borderColor = useThemeColor({}, 'border');

  const handlePress = () => {
    router.push({
      pathname: '/video-player',
      params: { id: video.id }
    });
  };

  return (
    <Pressable 
      style={({ pressed }) => [
        styles.container,
        { backgroundColor, borderColor, opacity: pressed ? 0.6 : 1 },
      ]}
      onPress={handlePress}
    >
      <Image 
        source={video.thumbnail} 
        style={styles.thumbnail}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <ThemedText type="spooky" style={styles.title}>
          {video.title}
        </ThemedText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderWidth: 1,
  },
  thumbnail: {
    width: 80,
    height: 60,
    borderRadius: 6,
    backgroundColor: '#2d1b69',
    borderWidth: 1,
    borderColor: '#FF6B35',
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
  },
});