## ADDED Requirements
### Requirement: Random Continuous Playback
The app SHALL support a random playback mode that continuously plays videos selected at random from the available library.

#### Scenario: Enter random playback mode
- **WHEN** navigation occurs to the video player with random mode activated
- **THEN** a randomly selected video from the library begins playing
- **AND** the video is not forced to loop

#### Scenario: Auto-advance to next random video
- **WHEN** a video in random playback mode finishes playing
- **THEN** a different random video (not the same one consecutively) starts playing automatically
- **AND** playback continues indefinitely until the user exits the screen

#### Scenario: Prevent immediate repeat
- **WHEN** selecting the next random video
- **THEN** the system SHALL avoid selecting the just-finished video if another option exists

#### Scenario: Exit random playback
- **WHEN** the user exits the random playback screen
- **THEN** random playback stops and video resources are released
- **AND** the user returns to the video list screen
