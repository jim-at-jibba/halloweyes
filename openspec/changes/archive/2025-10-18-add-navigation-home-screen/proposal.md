## Why
The current home screen displays the video list directly. To support future expansion of the app with additional sections, we need a navigation layer that allows users to choose between different app sections.

## What Changes
- Create a new home screen with three navigation buttons
- Move the current video list to a separate route
- Add two placeholder sections for future functionality
- Update navigation routing structure

## Impact
- Affected specs: `video-list` (moving to separate route), `home-navigation` (new capability)
- Affected code: `app/index.tsx` (becomes navigation screen), new route for video list
- User flow: Users will now have one additional tap to reach the video list
