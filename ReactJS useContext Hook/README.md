# React useContext Hook

The `useContext` hook provides a way to pass data through the component tree without having to pass props down manually at every level (solving the Props Drilling issue).

## Contexts Created
- **ThemeContext**: Manages light/dark modes globally.
- **LanguageContext**: Manages multi-language translations (e.g., English/Spanish) across the app.
- **AuthContext**: Manages user authentication status (login/logout) globally.

## Components Implemented
- **Navbar**: Consumes theme and auth contexts.
- **MainContent**: Consumes language and theme contexts to render localized text and adjust styling.
