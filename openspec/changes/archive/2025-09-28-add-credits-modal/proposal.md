## Why
The app needs to provide proper attribution to the original artist who created the eye animations. Currently, there's no way for users to know that the animations were created by someone else, which doesn't give proper credit to the artist.

## What Changes
- Add an information icon to the video list screen header
- Implement a modal that displays credits information when the icon is tapped
- Add text acknowledging app development while crediting the original artist
- Include link to the artist's YouTube channel: https://www.youtube.com/@satya_Badiger/videos

## Impact
- Affected specs: video-list (MODIFIED)
- Affected code: app/index.tsx (header), new modal component
- New dependency: react-native-lucide-icons for information icon