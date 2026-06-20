# React CRUD - User Management System

A professional CRUD (Create, Read, Update, Delete) database dashboard built with high-quality UI components, API integration, and validation rules.

## Core Features

1. **REST API Integration**
   - Communicates with a mock JSON database server (`db.json`) using **Axios**.
   - Handles network state indicators (loading lists, validation responses, error handling).

2. **PrimeReact UI Suite**
   - Utilizes `DataTable` with pagination, text-filtering, and global searching.
   - Includes custom popup dialog cards for user confirmation (e.g., deleting a user).
   - Renders interactive status toast notification panels for success/error events.

3. **User Management Form**
   - Unified modal form for adding new records and editing existing records.
   - Restricts fields via input rules (email validations, name length requirements).

## Tech Stack
- **Library**: React 19 & React Router v6
- **UI Components**: PrimeReact
- **Icons**: PrimeIcons
- **HTTP Client**: Axios
- **Database Server**: JSON Server
- **Styling**: PrimeFlex & Vanilla CSS

## Setup & Installation

1. Navigate to the project directory:
   ```bash
   cd "React crud/my-app"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server and mock database server concurrently:
   - To start the development web server:
     ```bash
     npm run dev
     ```
   - To start the mock JSON database server (on port 5001 as configured):
     ```bash
     npm run json-server
     ```
