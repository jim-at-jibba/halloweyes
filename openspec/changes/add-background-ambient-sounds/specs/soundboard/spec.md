## MODIFIED Requirements
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

## ADDED Requirements
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
