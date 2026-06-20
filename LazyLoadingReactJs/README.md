# Lazy Loading & Code Splitting in React

This project demonstrates how to optimize the performance of React applications using code splitting and lazy loading via **`React.lazy()`** and the **`Suspense`** component.

## Core Concepts & Implementation

1. **`React.lazy()`**
   - Dynamically imports page components (`Home`, `About`, `Gallery`) only when their route is accessed.
   - Reduces the initial JS bundle size, leading to significantly faster load times (FCP/LCP metrics).

2. **`Suspense`**
   - Configures a fallback component (`Loader.jsx`) to display while the dynamic chunks are loading.
   - Provides smooth skeleton screens or loading spinners, improving the UX.

3. **Routing Integration**
   - Integrates with `react-router-dom` to demonstrate route-based code splitting.
   - Dynamic chunks are fetched on demand as the user navigates through the navigation links.

## Tech Stack
- **Library**: React 19
- **Routing**: React Router v7
- **Bundler**: Vite
- **Styling**: Vanilla CSS (Smooth fade-in transition layouts)

## Setup & Installation

1. Navigate to the folder:
   ```bash
   cd LazyLoadingReactJs
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
