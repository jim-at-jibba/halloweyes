## Why
The current index screen shows a static welcome message, but the app needs a video list screen to display available spooky eye videos for users to select and play.

## What Changes
- Convert app/index.tsx from static welcome screen to video list screen
- Add video data structure with JSON object containing video metadata (title, path, thumbnail)
- Display video list with thumbnails and titles
- **BREAKING**: Changes the main entry point from welcome screen to video list

## Impact
- Affected specs: None (first capability)
- Affected code: app/index.tsx, new video data structure, potential new components