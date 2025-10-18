## Why
Users need a way to play spooky sound effects to enhance the Halloween atmosphere alongside the video content. The soundboard will enable playing individual effects and (in future) background ambient sounds on loop.

## What Changes
- Enable Section 2 navigation button to link to new soundboard screen
- Create soundboard screen with Effects tab showing 13 effect sounds from assets/sounds/effects/
- Implement sound playback using expo-av Audio API
- Add play/pause functionality for each effect sound
- Set up foundation for future Background sounds tab (disabled/coming soon state)

## Impact
- Affected specs: `home-navigation` (activate Section 2 button), `soundboard` (new capability)
- Affected code: `app/index.tsx` (enable Section 2 button), new `app/soundboard.tsx` screen, `package.json` (add expo-av dependency)
- User flow: Users can now tap Section 2 to access soundboard and play effect sounds
