## Why
Users need to be able to click on video items from the list to view the full-screen video playback. Currently, tapping a video item does nothing, so we need to implement navigation to a dedicated video player screen.

## What Changes
- Install expo-video package for video playback functionality
- Create new video player screen component with full-screen video display
- Implement navigation from video list items to video player screen
- Pass selected video data to the player screen
- Add video controls (play/pause, fullscreen, etc.)
- **BREAKING**: Adds new dependency and navigation flow

## Impact
- Affected specs: video-list (MODIFIED), new video-player capability
- Affected code: components/video-list-item.tsx, app/ directory (new screen), package.json