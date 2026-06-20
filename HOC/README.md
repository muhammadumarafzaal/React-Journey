# React Higher-Order Components (HOC) Pattern

This project illustrates the implementation of the **Higher-Order Components (HOC)** design pattern in React. Higher-Order Components are a powerful pattern for reusing component logic by wrapping presentational components.

## Core Concepts & Implementation

An HOC is a pure function that takes a component as an argument and returns a new enhanced component. This project demonstrates two practical use-cases:

1. **`withStyle` HOC (`hoc/withStyle.jsx`)**
   - Injects custom inline styling configurations into any wrapped presentational component.
   - Allows styling updates to be decoupled from the core UI rendering logic.

2. **`withData` HOC (`hoc/withData.jsx`)**
   - Handles asynchronous data fetching logic (mock API request).
   - Manages loading states, fetched data, and potential fetch errors.
   - Inject the fetched data array as props into the wrapped component.

3. **Wrapped Components**
   - **`Greeting` / `GreetingWithStyle`**: Wraps a simple text component to add dynamic styled layouts.
   - **`PostList` / `PostListWithData`**: Wraps a list layout component to automatically populate it with asynchronously loaded data.

## Tech Stack
- **Library**: React 19
- **Bundler**: Vite
- **Styling**: Inline styles and basic CSS

## Setup & Installation

1. Navigate to the folder:
   ```bash
   cd HOC
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
