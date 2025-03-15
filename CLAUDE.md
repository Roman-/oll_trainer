# OLL Trainer Guidelines

## Project Overview
OLL Trainer is a web-based tool for practicing OLL algorithms in speedcubing. The application allows users to select specific cases to practice and measures solving times.

## Build/Test Commands
- To run locally, simply open index.html in a browser
- Site can be used offline once downloaded

## Code Style Guidelines
### Organization
- JavaScript files in `/scripts/` directory
- CSS files in `/styles/` directory
- SVG images for OLL cases are in `/pic/` directory

### Naming Conventions
- Use camelCase for variables and functions
- Function names should use verb prefixes (e.g., `loadSelection`, `saveLocal`)
- Use descriptive variable names (e.g., `timerActivatingButton`, `recapArray`)

### JavaScript Patterns
- Use localStorage for data persistence
- Implement null checks with fallback values