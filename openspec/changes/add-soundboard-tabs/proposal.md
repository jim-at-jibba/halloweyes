# Change Proposal: Add Soundboard Tabs

## Why
The soundboard screen is crowded with both Effects and Background sounds displayed in a single scrolling view. Organizing these into separate tabs will improve usability and make the interface cleaner and easier to navigate.

## What Changes
- Add `react-native-tab-view` dependency to the project
- Refactor soundboard screen to use TabView with two tabs: "Effects" and "Background"
- Move Effects section content into first tab
- Move Background section content into second tab
- Remove section titles (no longer needed with tabs)
- Preserve all existing audio functionality (playback, state management, concurrent effects)

## Impact
- Affected specs: soundboard
- Affected code: app/soundboard.tsx, package.json
- No breaking changes to audio functionality
- UI improvement only - all audio features remain unchanged
