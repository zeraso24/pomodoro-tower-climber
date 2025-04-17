# Pomodoro Tower Climber

A gamified Pomodoro timer app with a magical, minimalist aesthetic inspired by Monument Valley. This app combines productivity with visual delight, featuring a character that climbs a tower as Pomodoro sessions are completed.

![Pomodoro Tower Climber](screenshot.png)

## Latest Updates

- **Optimized UI**: Adjusted for a fixed 350px × 600px window size
- **Animation Feature**: Added GIF animation that plays when the frog icon is clicked
- **Improved Responsiveness**: Fixed positioning of UI elements for better display
- **Enhanced Aesthetics**: Refined typography and spacing for a more polished look

## Project Overview

The Pomodoro Tower Climber is a web-based application that helps users manage their time using the Pomodoro Technique. The app features:

- A beautiful, minimalist UI with frosted glass effects
- Visual progress tracking with a tower-climbing metaphor
- Customizable timer settings
- Session notifications
- Progress visualization with cubes representing completed sessions

## Project Structure

```
UI_FROG_TRACKER/
├── pomodoro.html        # Main HTML structure
├── styles.css           # CSS styling for the app
├── script.js            # JavaScript functionality
├── background.png       # Background image
├── frog_animation.gif   # Animation that plays when frog icon is clicked
├── notification.html    # Notification popup
└── README.md            # This documentation file
```

### File Descriptions

#### pomodoro.html
The main HTML file that structures the app's interface. Key sections include:
- Background image container
- Top section with frog icon and orbs counter
- Middle section with timer display and character preview
- Bottom section with progress visualization
- Settings modal with tabs for Duration and Notifications

#### styles.css
Contains all the styling for the app, including:
- Global variables and root styles
- Background styling with gradient overlay
- Timer display with frosted glass effect
- Progress visualization styling
- Settings modal styling
- Responsive design elements

#### script.js
Handles all the app's functionality, including:
- Timer logic for Pomodoro sessions
- UI toggling via the frog icon
- Progress tracking and visualization
- Settings modal interactions
- Notification handling

#### background.png
The main background image that provides the magical aesthetic for the app.

#### notification.html
A separate HTML file for the notification popup that appears when a Pomodoro session is completed.

## Features Implemented

### UI Design
- Frosted glass effect throughout the interface
- Pastel color scheme (mint green, light orange)
- Minimalist Apple-style design
- Inter font family for clean typography
- Fixed 350px × 600px window size for consistent display

### Timer Display
- Circular timer with dual progress rings
- Inner ring shows current session progress
- Outer ring shows weekly goal progress
- Character preview in the center of the timer
- Dark gradient overlay for better text visibility

### Progress Visualization
- Cube-based visualization where each cube represents a completed session
- Maximum of 16 sessions per day
- Hover effects on progress bars show detailed day information
- Optimized layout to prevent cutoff in smaller window sizes

### Settings Modal
- Light, transparent modal with tabs
- Duration settings for focus sessions, short breaks, and long breaks
- Notification settings
- Compact design that's 40% smaller for better fit in the window

### Frog Icon Functionality
- Toggles interface visibility
- Shows clean background when toggled
- Maintains orbs counter visibility
- Triggers animation GIF when clicked

### Animation Container
- Fixed-position container for GIF animation
- Appears when frog icon is clicked
- Positioned at bottom left of the app container
- Non-blocking overlay that doesn't interfere with UI interaction

### Orbs Counter
- Displays number of completed sessions
- Positioned next to the frog icon
- Features a glowing orb with pulsing animation

## Next Steps

### Functionality Enhancements
1. **Complete Timer Logic**: Finish the timer functionality to track and update session time.
2. **Add Sound Notifications**: Implement sound alerts for session completion.
3. **Create Session History**: Add a history view to track past Pomodoro sessions.
4. **Enhance Animation Integration**: Improve the GIF animation with more varied animations for different states.

### Visual Enhancements
1. **Refine Tower Visualization**: Enhance the tower visualization with more detailed progress indicators.
2. **Implement Day/Night Cycle**: Add a background that changes based on time of day.
3. **Add Particle Effects**: Implement subtle particle animations for completed sessions.
4. **Create Reward Animations**: Design special animations for achieving milestones.
5. **Optimize GIF Performance**: Ensure animations run smoothly without impacting performance.

### Technical Improvements
1. **Add Local Storage**: Implement data persistence using localStorage.
2. **Add Offline Support**: Implement service workers for offline functionality.
3. **Implement User Accounts**: Add user authentication for cross-device syncing.
4. **Add Export/Import**: Allow users to export their progress and settings.

## How to Run

1. Clone the repository
2. Open `pomodoro.html` in a modern web browser
3. No build steps or dependencies required

## Design Principles

The app follows these key design principles:
- **Minimalism**: Clean, uncluttered interface with focus on essential elements
- **Delight**: Magical aesthetic with subtle animations and visual feedback
- **Focus**: Design that encourages concentration and productivity
- **Gamification**: Progress visualization that motivates continued use

## Credits

- Design inspiration: Monument Valley
- Font: Inter by Rasmus Andersson
- Background design: Custom creation

## License

This project is licensed under the MIT License - see the LICENSE file for details.
