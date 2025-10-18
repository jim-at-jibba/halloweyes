## MODIFIED Requirements
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
