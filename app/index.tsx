import { StyleSheet, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { VideoListItem } from '@/components/video-list-item';
import { videos } from '@/constants/videos';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function IndexScreen() {
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={styles.header}>
        <ThemedText type="spooky">🎃 Spooky Eyes 👻</ThemedText>
      </View>
      <FlatList
        data={videos}
        renderItem={({ item }) => (
          <VideoListItem video={item} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
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
    alignItems: 'center',
  },
  list: {
    paddingVertical: 8,
  },
});