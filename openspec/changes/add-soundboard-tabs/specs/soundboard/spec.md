# Soundboard Spec Delta

## MODIFIED Requirements

### Requirement: Soundboard Screen Display
The app SHALL display a soundboard screen with tabs for Effects and Background sounds.

#### Scenario: Soundboard screen renders with tabs
- **WHEN** user navigates to the soundboard screen
- **THEN** the screen displays with spooky theme styling
- **AND** a header shows "Soundboard" title
- **AND** a tab view displays with "Effects" and "Background" tabs
- **AND** the Effects tab is selected by default

#### Scenario: Navigate between tabs
- **WHEN** user is on the soundboard screen
- **AND** user swipes left or taps the Background tab
- **THEN** the Background tab becomes active
- **AND** the background sounds grid is displayed

#### Scenario: Navigate to soundboard from home
- **WHEN** user taps Section 2 button on home screen
- **THEN** navigation occurs to the soundboard screen
- **AND** full soundboard functionality is available
- **AND** the Effects tab is selected by default

### Requirement: Effects Sound List
The app SHALL display a list of effect sounds in the Effects tab that can be played individually.

#### Scenario: Effects tab displays sound buttons
- **WHEN** Effects tab is active
- **THEN** the tab shows 13 sound effect buttons in a grid layout
- **AND** each button displays the sound name derived from filename
- **AND** buttons are styled consistently with spooky theme

#### Scenario: Effect sound metadata structure
- **WHEN** effect sound data is loaded
- **THEN** each effect contains id, name, and file path
- **AND** sounds are loaded from assets/sounds/effects/ directory
- **AND** supported sounds include Bats, Creepy Door 2, Evil Laughter 1, Ghost 1, Horror Piano, Iron Gate, Nearly Die 1, Owl, Ravens, Scream 3, Thunder 1, Wicht Laughter 1, and Wolf 1

### Requirement: Background Sound Placeholder
The app SHALL display background ambient sounds in the Background tab that play continuously on loop.

#### Scenario: Background tab displays sound buttons
- **WHEN** Background tab is active
- **THEN** the tab shows 14 ambient sound buttons in a grid layout
- **AND** each button displays the sound name derived from filename
- **AND** buttons are styled consistently with spooky theme

#### Scenario: Background sound metadata structure
- **WHEN** background sound data is loaded
- **THEN** each ambient sound contains id, name, and file path
- **AND** sounds are loaded from assets/sounds/ambient/ directory
- **AND** supported sounds include Cemetery Amb v2, Cemetery Amb, Cemetery Instrumental Amb, Dark Castle Amb v2, Dark Castle Amb, Dark Castle Instrumental Amb, Fireplace, Forest, Haunted Hospital, Mansion Amb v2, Mansion Amb, Mansion Instrumental Amb, Rain, and Wind
