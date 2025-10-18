# soundboard Specification

## Purpose
TBD - created by archiving change add-soundboard-effects. Update Purpose after archive.
## Requirements
### Requirement: Soundboard Screen Display
The app SHALL display a soundboard screen with sections for Effects and Background sounds.

#### Scenario: Soundboard screen renders
- **WHEN** user navigates to the soundboard screen
- **THEN** the screen displays with spooky theme styling
- **AND** a header shows "Soundboard" title
- **AND** sections for Effects and Background are visible

#### Scenario: Navigate to soundboard from home
- **WHEN** user taps Section 2 button on home screen
- **THEN** navigation occurs to the soundboard screen
- **AND** full soundboard functionality is available

### Requirement: Effects Sound List
The app SHALL display a list of effect sounds that can be played individually.

#### Scenario: Effects list displays sound buttons
- **WHEN** soundboard screen is displayed
- **THEN** the Effects section shows 13 sound effect buttons
- **AND** each button displays the sound name derived from filename
- **AND** buttons are styled consistently with spooky theme

#### Scenario: Effect sound metadata structure
- **WHEN** effect sound data is loaded
- **THEN** each effect contains id, name, and file path
- **AND** sounds are loaded from assets/sounds/effects/ directory
- **AND** supported sounds include Bats, Creepy Door 2, Evil Laughter 1, Ghost 1, Horror Piano, Iron Gate, Nearly Die 1, Owl, Ravens, Scream 3, Thunder 1, Wicht Laughter 1, and Wolf 1

### Requirement: Effect Sound Playback
The app SHALL play individual effect sounds when user taps sound buttons.

#### Scenario: Play effect sound
- **WHEN** user taps an effect sound button
- **THEN** the sound plays from the beginning
- **AND** button shows playing state (visual feedback)
- **AND** other effect sounds continue playing if already active

#### Scenario: Stop effect sound
- **WHEN** user taps a currently playing effect sound button
- **THEN** the sound stops playing
- **AND** button returns to default state

#### Scenario: Multiple effects play simultaneously
- **WHEN** multiple effect sound buttons are tapped
- **THEN** all tapped sounds play simultaneously
- **AND** each maintains independent play/stop state

### Requirement: Background Sound Placeholder
The app SHALL display background ambient sounds that play continuously on loop.

#### Scenario: Background section displays sound buttons
- **WHEN** soundboard screen is displayed
- **THEN** the Background section shows 14 ambient sound buttons
- **AND** each button displays the sound name derived from filename
- **AND** buttons are styled consistently with spooky theme

#### Scenario: Background sound metadata structure
- **WHEN** background sound data is loaded
- **THEN** each ambient sound contains id, name, and file path
- **AND** sounds are loaded from assets/sounds/ambient/ directory
- **AND** supported sounds include Cemetery Amb v2, Cemetery Amb, Cemetery Instrumental Amb, Dark Castle Amb v2, Dark Castle Amb, Dark Castle Instrumental Amb, Fireplace, Forest, Haunted Hospital, Mansion Amb v2, Mansion Amb, Mansion Instrumental Amb, Rain, and Wind

### Requirement: Background Sound Playback
The app SHALL play background ambient sounds on continuous loop.

#### Scenario: Play background sound
- **WHEN** user taps a background sound button
- **THEN** the sound plays on continuous loop
- **AND** button shows playing state (visual feedback)
- **AND** any previously playing background sound stops

#### Scenario: Stop background sound
- **WHEN** user taps a currently playing background sound button
- **THEN** the sound stops playing
- **AND** button returns to default state

#### Scenario: Single background sound plays
- **WHEN** user taps a different background sound while one is playing
- **THEN** the currently playing background sound stops
- **AND** the newly selected background sound starts playing on loop

### Requirement: Background Audio Session
The app SHALL continue playing background sounds when the screen is off.

#### Scenario: Audio continues with screen off
- **WHEN** a background sound is playing
- **AND** the device screen is turned off
- **THEN** the background sound continues playing
- **AND** audio playback is not interrupted

#### Scenario: Effects play over background
- **WHEN** a background sound is playing
- **AND** user taps an effect sound button
- **THEN** the effect sound plays simultaneously with the background
- **AND** the background sound continues playing uninterrupted

