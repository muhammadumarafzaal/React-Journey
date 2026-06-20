# React Form Handling Techniques

This project demonstrates multiple methods for handling forms in React 19, ranging from basic controlled inputs to advanced form validations and uncontrolled components using refs.

## Core Concepts & Implementation

The project includes five different form patterns, each focusing on a specific concept:

1. **Simple Form (`SimpleForm.jsx`)**
   - Implements a basic controlled input handling a single state value.
   - Demonstrates the use of the `useState` hook for binding an input's `value` and updating it via `onChange`.

2. **Multi-Input Form (`MultiInputForm.jsx`)**
   - Shows how to manage multiple input fields with a single state object.
   - Utilizes dynamic keys (`[name]: value`) inside the state updater function to reduce boilerplate code.

3. **Uncontrolled Form (`UncontrolledForm.jsx`)**
   - Focuses on accessing form fields directly using React refs (`useRef`) instead of syncing with state on every keystroke.
   - Ideal for performance-critical inputs or simple form submissions.

4. **Basic Validation Form (`BasicValidationForm.jsx`)**
   - Incorporates real-time validation checks for fields (e.g., username length, password validation).
   - Manages error state objects and conditionally renders feedback warnings.

5. **Advanced Form with Custom Hook (`AdvancedForm.jsx`)**
   - Demonstrates a fully-featured registration form containing email validation, password strength assessment, and submission state management.
   - Showcases best practices for standard form layouts and UX feedback.

## Tech Stack
- **Library**: React 19
- **Bundler**: Vite
- **Styling**: Modern Vanilla CSS

## Setup & Installation

1. Navigate to the folder:
   ```bash
   cd "Form Handling"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
