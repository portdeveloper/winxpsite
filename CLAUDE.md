# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Package Management
- Both `npm` and `yarn` are available (yarn.lock present)

## Architecture

### Project Structure
This is a Next.js application that recreates a Windows XP desktop experience as a personal portfolio website.

### Key Technologies
- **Next.js** with TypeScript
- **Redux Toolkit** for state management (tabs and system state)
- **CSS Modules** for component styling
- **xp.css** library for Windows XP styling
- **react-draggable** and **react-resizable** for window interactions

### Core Concepts

#### State Management
- `src/redux/store.tsx` - Redux store configuration
- `src/redux/tabSlice.tsx` - Manages window tabs/applications
- `src/redux/systemSlice.tsx` - System-wide state
- Applications are managed as "tabs" with unique IDs, z-index, minimize state

#### Application System
- `src/appData/index.tsx` - Central registry of all applications and their metadata
- Applications are defined in the `AppDirectory` Map with IDs, icons, program types
- Main applications: Welcome, MyWork (portfolio), Outlook (contact), MyGallery (photos)

#### Component Architecture
- `components/` - Reusable UI components (WinForm, DesktopIcon, StartBar, etc.)
- `src/programs/` - Individual application components
- Each component has its own CSS module for styling

#### Asset Management
- All assets in `assets/` directory organized by type
- Work portfolio images in `assets/work/` subdirectories
- Gallery photos in `assets/gallery/`
- Windows XP themed icons and backgrounds

#### Desktop Environment
- `src/pages/index.tsx` - Main desktop with icons and window management
- Windows are draggable, resizable, and can be minimized
- Start bar at bottom with active application tabs
- Desktop icons trigger different actions (open apps, external links, files)