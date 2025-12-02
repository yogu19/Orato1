# Orato Soft Skills Learning Platform

## Overview
A full-stack educational platform website for Orato, focused on soft skills development for students in Classes 6–10. Built with TypeScript, React, Express, and Vite.

## Recent Changes
- **November 16, 2025**: Content updates and timeline redesign
  - Updated Navigation component with proper light/dark mode styling (white bg in light mode, black bg with gold accents in dark mode)
  - Updated About page team members to real names: Yamini, Sakshi, and Akshita (all Certified Trainers & Educators)
  - Updated timeline years from 2023/2024/2025 to 2024/2025/2026, with 2026 marked "In Progress"
  - Redesigned timeline to vertical layout with center line, alternating left-right cards, connecting dots, and horizontal connector lines
  - Replaced 6 placeholder workshop photos with 5 real images from attached_assets
- **November 16, 2025**: Initial import from GitHub and setup for Replit environment
  - Configured to run on port 5000 with proper host settings
  - Dependencies installed
  - Workflow configured for development server

## Project Architecture

### Technology Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express.js + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: TanStack Query
- **Routing**: Wouter

### Project Structure
```
├── client/          # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Route pages
│   │   ├── lib/         # Utilities and configs
│   │   └── hooks/       # Custom React hooks
├── server/          # Express backend
│   ├── index.ts     # Server entry point
│   ├── routes.ts    # API route definitions
│   ├── storage.ts   # Database interface
│   └── vite.ts      # Vite dev server setup
├── shared/          # Shared types and schemas
│   └── schema.ts    # Drizzle database schemas
```

### Key Features
- Multi-page educational platform (Home, About, Programs, Schools, Courses, Contact, Student Portal)
- Theme support (light/dark mode)
- Responsive design following modern educational platform patterns
- In-memory storage by default (can be configured for PostgreSQL)

### Configuration
- Port: 5000 (required for Replit)
- Host: 0.0.0.0 for frontend access
- Allowed hosts: true (configured for Replit's proxy environment)

## Running the Project
The development server runs both frontend and backend on port 5000:
```bash
npm run dev
```

## Design Guidelines
See `design_guidelines.md` for comprehensive UI/UX specifications including typography, layout, components, and responsive behavior.
