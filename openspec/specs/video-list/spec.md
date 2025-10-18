# video-list Specification

## Purpose
TBD - created by archiving change create-video-list-screen. Update Purpose after archive.
## Requirements
### Requirement: Video List Display
The app SHALL display a list of available videos on a dedicated video list screen.

#### Scenario: Video list renders successfully
- **WHEN** the user navigates to the video list screen
- **THEN** a scrollable list of videos is displayed
- **AND** each video item shows a thumbnail and title
- **AND** a back navigation option is available

#### Scenario: Video data structure
- **WHEN** video data is provided
- **THEN** each video contains id, title, path, and thumbnail fields
- **AND** the data is used to populate the list items

#### Scenario: Return to home navigation
- **WHEN** user is on the video list screen
- **THEN** navigation back to the home screen is available
- **AND** navigating back returns to the home navigation screen

### Requirement: Video List Item Component
The app SHALL have a reusable component for displaying individual video items.

#### Scenario: Video item displays correctly
- **WHEN** a video item component is rendered with video data
- **THEN** it shows the thumbnail image
- **AND** it displays the video title
- **AND** it has proper styling for touch interaction

#### Scenario: Video item becomes interactive
- **WHEN** video list is displayed
- **THEN** each video item responds to tap gestures
- **AND** tapping triggers navigation to video player

### Requirement: Credits Modal
The app SHALL provide a credits modal that displays attribution information.

#### Scenario: Credits modal displays
- **WHEN** user taps the information icon in the header
- **THEN** a modal appears with credits information
- **AND** the modal acknowledges app development
- **AND** the modal credits the original artist
- **AND** the modal includes a link to the artist's YouTube channel

#### Scenario: Credits modal closes
- **WHEN** user taps outside the modal or closes it
- **THEN** the modal disappears
- **AND** the video list screen remains visible
- **AND** the information icon remains accessible

### Requirement: Information Icon
The app SHALL display an information icon in the video list screen header.

#### Scenario: Information icon interaction
- **WHEN** video list screen is displayed
- **THEN** an information icon is visible in the header
- **AND** the icon responds to tap gestures
- **AND** tapping the icon opens the credits modal

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

