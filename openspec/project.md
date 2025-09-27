# Project Context

## Purpose
HallowEyes is a cross-platform mobile application built with Expo and React Native. This app is simple, it will have a list of videos of spooky eyes that can be viewed in the app. This means the app can be used in a pumpkin to display spooky eyes. It will have 2 screens, a list screen displaying a list of available eye videos and the video playing screen

## Tech Stack
- **Framework**: Expo SDK ~54.0.10 with React Native 0.81.4
- **Language**: TypeScript with strict mode enabled
- **Navigation**: Expo Router (file-based routing) with React Navigation
- **UI**: React Native with Expo's built-in components
- **Animations**: React Native Reanimated for smooth animations
- **Icons**: Expo Vector Icons
- **Development**: ESLint with Expo configuration, TypeScript compiler

## Project Conventions

### Code Style
- TypeScript strict mode enabled for type safety
- ESLint configuration following Expo's standards
- Path aliases configured with `@/*` pointing to project root
- File-based routing using Expo Router conventions
- Component files use `.tsx` extension for React components with TypeScript

### Architecture Patterns
- File-based routing structure in `app/` directory
- Tab-based navigation setup in `(tabs)/` subdirectory
- Modular component organization in `components/` directory
- Theme management through `constants/theme.ts`
- Custom hooks in `hooks/` directory for cross-cutting concerns
- External link handling through dedicated component

### Testing Strategy
- Currently no testing framework configured
- ESLint used for code quality and consistency
- Expo lint script available for code validation

### Git Workflow
- Standard Git workflow (repository is initialized)
- No specific branching strategy documented yet
- Commit messages should follow conventional commit practices

## Domain Context
- Mobile-first application targeting iOS, Android, and web platforms
- Portrait orientation with tablet support on iOS
- Adaptive icon support for Android
- Dark/light theme support with automatic UI style switching
- Haptic feedback integration for enhanced user experience

## Important Constraints
- Cross-platform compatibility required (iOS, Android, Web)
- New architecture enabled for React Native
- Edge-to-edge display enabled on Android
- Predictive back gesture disabled on Android
- Static web output for web deployment

## External Dependencies
- **Expo**: Core development platform and SDK
- **React Navigation**: Navigation library with bottom tabs
- **React Native Reanimated**: Animation library
- **Expo Haptics**: Haptic feedback functionality
- **Expo Image**: Advanced image handling
- **Expo Web Browser**: In-app browser functionality
- **Expo Splash Screen**: App launch screen management
