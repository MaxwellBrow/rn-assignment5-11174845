# rn-assignment5-11174845
This is a React Native application built as part of an assignment. The application features a home screen and a settings screen, and allows users to switch between light and dark themes.

Features
Home Screen: The home screen displays relevant user data, news feeds, or any other features required by the assignment.
Settings Screen: The settings screen allows users to change their preferences, update their profile, or access app-related settings.
Theme Switching: Users can switch between light and dark themes using a toggle button in the settings screen.
Custom Components: The application utilizes custom components throughout to ensure a consistent look and feel.
Responsive Design: The application is designed to adapt to different screen sizes and orientations.
Development Process
Set up the Repository: I created a new GitHub repository named rn-assignment5-ID and cloned it to my local machine.
Implement the Home Screen: I created a new Home.js file in the src/screens directory and set up the basic structure of the screen, including a header, content area, and bottom navigation. I designed the home screen layout according to the provided UI design and implemented the required functionality.
Implement the Settings Screen: I created a new Settings.js file in the src/screens directory and designed the settings screen layout according to the provided UI design. I implemented the functionality for the settings screen, such as allowing users to change their preferences, update their profile, or access app-related settings.
Add Theme Switching Feature: I created a ThemeProvider.js file in the src/contexts directory and implemented a custom ThemeProvider component that manages the current theme state (light or dark). I used the ThemeProvider to wrap the entire application in the App.js file, ensuring that the Home and Settings screens use the appropriate styles based on the current theme. I also provided a way for users to switch between light and dark themes, such as a toggle button in the Settings screen.
Style the Application: I created a styles.js file in the src/styles directory and implemented global styles for the application, such as typography, colors, and spacing. I used these global styles throughout the Home and Settings screens to maintain consistency. I also incorporated the resources downloaded from the Google Drive, such as icons and images, to match the provided UI design.
Use Custom Components: I identified reusable UI elements in the design and created custom components for them. For example, I created custom components for the header, navigation bar, and any other repeated UI elements, and ensured that these custom components were used consistently across the Home and Settings screens.
Commit Changes: I committed each task separately to the repository, with clear and descriptive commit messages to maintain a clean and organized commit history.