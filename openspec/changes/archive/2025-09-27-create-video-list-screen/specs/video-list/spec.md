## ADDED Requirements
### Requirement: Video List Display
The app SHALL display a list of available videos on the main index screen.

#### Scenario: Video list renders successfully
- **WHEN** the app launches to the index screen
- **THEN** a scrollable list of videos is displayed
- **AND** each video item shows a thumbnail and title

#### Scenario: Video data structure
- **WHEN** video data is provided
- **THEN** each video contains id, title, path, and thumbnail fields
- **AND** the data is used to populate the list items

### Requirement: Video List Item Component
The app SHALL have a reusable component for displaying individual video items.

#### Scenario: Video item displays correctly
- **WHEN** a video item component is rendered with video data
- **THEN** it shows the thumbnail image
- **AND** it displays the video title
- **AND** it has proper styling for touch interaction