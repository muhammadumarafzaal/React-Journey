# React Error Boundaries - Fault Tolerance Diagnostics

This project demonstrates how to implement and configure **Error Boundaries** in React 19 to build robust, fault-tolerant user interfaces. It showcases error isolation, debugging diagnostics, and state recovery patterns.

## Core Concepts & Features

1. **Global & Local Boundaries**
   - **Global Boundary**: Wraps the entire application, serving as a safety net that prevents raw white screens.
   - **Local Boundaries**: Wraps individual dashboard widgets. If one widget crashes, the rest of the application remains interactive and operational.

2. **Diagnostics Interface**
   - Renders a glassmorphic dashboard panel in case of a crash.
   - Includes a toggle to display detailed **Component Stack Traces** (`componentStack` from `componentDidCatch`) for developer inspections.

3. **State Reset & Recovery**
   - Implements a reset/retry mechanism that allows the user to re-render the crashed component tree after resolving the underlying state issue.

4. **Multiple Simulation Scenarios**
   - **Render-Time Failures**: Direct Javascript exceptions thrown in the rendering cycle.
   - **Asynchronous Failures**: Demonstrates how to propagate async network errors into the React rendering thread so they can be captured by the boundary.
   - **Event Exceptions**: Illustrates why standard Error Boundaries do not catch event handler exceptions and demonstrates how to handle them using local `try/catch` states.

## Tech Stack
- **Library**: React 19
- **Bundler**: Vite
- **Styling**: Vanilla CSS (Custom dark theme with glassmorphism)

## Setup & Installation

1. Navigate to the folder:
   ```bash
   cd ErrorBoundary
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
