# HallowEyes 👁️

A Halloween-themed animated eyes app that transforms your device into a mesmerizing display of spooky, cute, and colorful eye animations.

## Features

- **14 Unique Eye Animations**: Choose from spooky red monster eyes, glowing green cat eyes, Batman-style white eyes, heart eyes, robot eyes, and more
- **Full-Screen Experience**: Immersive full-screen video playback with looping animations
- **Video List Screen**: Browse all available eye animations with thumbnails and titles
- **Video Player Screen**: Dedicated full-screen player with native controls and picture-in-picture support
- **Orientation Aware**: Back button automatically hides in landscape mode for cleaner viewing
- **Spooky Theme**: Dark theme optimized for Halloween atmosphere

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Project Structure

```
├── app/                    # Expo Router file-based routing
│   ├── _layout.tsx        # Root layout with navigation
│   ├── index.tsx          # Video list screen
│   └── video-player.tsx   # Video player screen
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── external-link.tsx
│   ├── haptic-tab.tsx
│   ├── hello-wave.tsx
│   ├── parallax-scroll-view.tsx
│   ├── themed-text.tsx
│   ├── themed-view.tsx
│   └── video-list-item.tsx
├── constants/             # App constants and data
│   ├── theme.ts          # Theme configuration
│   └── videos.ts         # Video data and metadata
├── hooks/                # Custom React hooks
│   ├── use-color-scheme.ts
│   ├── use-color-scheme.web.ts
│   ├── use-orientation.ts
│   └── use-theme-color.ts
└── assets/               # Static assets
    ├── images/           # Video thumbnails and app icons
    └── videos/           # Video files
```

## Development

This project uses:

- **Expo Router** for file-based routing
- **React Native** with TypeScript
- **Expo Video** for video playback
- **Custom hooks** for orientation detection and theming
- **OpenSpec** for specification-driven development

### Available Scripts

```bash
npm start          # Start Expo development server
npm run lint       # Run ESLint
npx tsc --noEmit   # Type check
```

## OpenSpec

This project uses OpenSpec for specification-driven development. Specifications are located in the `openspec/` directory:

- `openspec/specs/` - Current implemented specifications
- `openspec/changes/` - Active change proposals
- `openspec/changes/archive/` - Completed and archived changes

### OpenSpec Commands

```bash
openspec list              # List active changes
openspec list --specs      # List specifications
openspec validate --strict # Validate all specs
```

## App Store Description

Transform your device into a mesmerizing display of animated eyes with HallowEyes! Perfect for Halloween parties, spooky decorations, or just adding some eerie ambiance to your space.

Choose from 14 unique eye animations including spooky red monster eyes, glowing green cat eyes, Batman-style white eyes, heart eyes, robot eyes, and many more colorful variations! Each eye animation loops continuously and supports full-screen viewing for maximum impact.

Whether you're hosting a Halloween party, creating spooky atmosphere, or just love animated eyes, HallowEyes brings your device to life with captivating eye animations that are sure to grab attention!

## License

This project is licensed under the MIT License.
