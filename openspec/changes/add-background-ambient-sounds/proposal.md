## Why
Users need continuous ambient background sounds to enhance the Halloween atmosphere, with the ability to play these sounds even when the screen is off and overlay sound effects on top.

## What Changes
- Enable Background section in soundboard with 14 ambient sounds from assets/sounds/ambient/
- Implement looping background audio playback with expo-av
- Configure audio session to continue playing when screen is off
- Support single background sound playing at once (selecting new sound stops previous)
- Allow effects to play simultaneously over background sounds
- Add play/stop controls for background sounds

## Impact
- Affected specs: `soundboard` (enable background sounds functionality)
- Affected code: `app/soundboard.tsx` (enable Background section, add audio session config), `constants/sounds.ts` (add ambient sound metadata)
- User flow: Users can now select and play looping background ambient sounds that continue when screen is off, with effects playable on top
