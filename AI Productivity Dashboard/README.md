# AI Productivity Dashboard

A premium, interactive personal productivity hub designed with dark-mode aesthetics, dynamic animations, and local storage persistence. It helps developers organize tasks, track daily habits, and check productivity statistics.

## Key Features

1. **Dashboard Home Overview**
   - Displays real-time statistics (completed tasks, current habit streaks, weekly progress).
   - Generates simulated **AI Insights** using local storage performance trends to recommend focus sessions.

2. **Drag & Drop Task Manager**
   - Built with **`@dnd-kit`** to support fluid drag-and-drop task reordering.
   - Categorized by state (Todo, In Progress, Done) with priority indicators and deadline reminders.

3. **Daily Habit Tracker**
   - Manage daily habits with simple checks to log streaks.
   - Preserves historical records using a custom LocalStorage hook.

4. **Productivity Analytics**
   - Visualizes tasks and habits completed over time using **Recharts** interactive line and bar charts.
   - Tracks focus minutes and weekly task completion ratios.

5. **Settings & Customization**
   - Customise daily goals and toggle experimental AI recommendation engines.

## Tech Stack
- **Library**: React 19
- **Animation**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Drag-and-Drop**: @dnd-kit (Core, Sortable)
- **Styling**: Tailwind CSS & PostCSS
- **Bundler**: Vite

## Setup & Installation

1. Navigate to the folder:
   ```bash
   cd "AI Productivity Dashboard"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
