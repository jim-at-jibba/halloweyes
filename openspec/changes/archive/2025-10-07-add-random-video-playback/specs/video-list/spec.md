## ADDED Requirements
### Requirement: Random Playback Trigger
The app SHALL provide a control on the video list screen to start continuous random video playback.

#### Scenario: Random button visible
- **WHEN** the video list screen is displayed
- **THEN** a Random button is visible in the footer area
- **AND** it is visually distinct from list items

#### Scenario: Start random playback
- **WHEN** the user taps the Random button
- **THEN** navigation occurs to the video playback experience in random mode
- **AND** a video begins playing automatically without requiring further input

#### Scenario: Exit random playback
- **WHEN** the user is in random playback mode and chooses to go back
- **THEN** navigation returns to the video list screen
- **AND** the list state (scroll position) is preserved
