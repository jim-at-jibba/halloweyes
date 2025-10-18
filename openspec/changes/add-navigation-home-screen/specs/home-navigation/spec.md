## ADDED Requirements
### Requirement: Home Navigation Screen
The app SHALL display a home screen with navigation buttons to different app sections.

#### Scenario: Home screen displays navigation buttons
- **WHEN** the app launches
- **THEN** the home screen is displayed
- **AND** three navigation buttons are visible
- **AND** the buttons are labeled for Videos, Section 2, and Section 3

#### Scenario: Navigate to video list
- **WHEN** user taps the Videos button
- **THEN** navigation occurs to the video list screen
- **AND** the full video list functionality is available

#### Scenario: Placeholder sections visible
- **WHEN** user views the home screen
- **THEN** buttons for Section 2 and Section 3 are visible
- **AND** they are styled consistently with the Videos button
- **AND** they indicate future functionality

### Requirement: Home Screen Header
The app SHALL display a header on the home navigation screen with app branding.

#### Scenario: Header displays on home screen
- **WHEN** the home screen is displayed
- **THEN** a header shows the app name
- **AND** the information icon is accessible for credits
- **AND** the header matches the spooky theme styling
