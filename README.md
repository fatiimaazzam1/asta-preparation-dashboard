# Asta's Preparation Dashboard

**Assignment 2 — TechTalks Full Stack Next.js Bootcamp**  
**Author:** Fatima Azzam

## Overview

Asta's Preparation Dashboard is a single-page application for tracking three predefined training tasks. It shows task status and priority, lets Asta complete or undo tasks, and calculates progress for his preparation plan against Lucifero. The project was implemented from the approved Figma Make desktop and mobile design.

## Features

- View Sword Control, Physical Endurance, and Team Coordination with their descriptions, priorities, and completion status.
- Mark each task complete or undo completion.
- See the completed-task count, rounded percentage, circular progress indicator, and horizontal progress bar update together.
- Use the dashboard with keyboard-accessible controls and responsive desktop/mobile layouts.
- View a Lucifero threat brief; progress represents task completion, not a combat prediction.

## Technologies

- Next.js 16.4.0 (App Router)
- React 19.3.0
- TypeScript (`^5`)
- Tailwind CSS (`^4`) with `@tailwindcss/turbopack`
- ESLint 9

## Prerequisites

- Node.js 20.9 or newer
- npm
- Git

## Install and Run

Clone the assignment branch from the verified GitHub repository:

```bash
git clone --branch assignment-2-asta-mvp https://github.com/fatiimaazzam1/asta-preparation-dashboard.git
cd asta-preparation-dashboard
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to use the dashboard.

Available project checks:

```bash
npm run lint
npm run build
```

## Task State and Progress

The interactive `TaskDashboard` Client Component stores completed task IDs in React `useState`. Task status is derived from that list; the completed count is its length, and the percentage is calculated with `Math.round((completedCount / tasks.length) * 100)`. All progress displays use that same calculated percentage. Completion state is in memory only and resets when the page is refreshed.

## Design and MCP

The approved [Figma Make design](https://www.figma.com/make/gHApJ5hgzrvpKAsUGJvd2D/Design-Asta-s-Preparation-Dashboard) provides the desktop and mobile visual references. The Figma MCP server was connected to GitHub Copilot in VS Code; a successful `get_design_context` call retrieved the Make source resources and design previews. MCP is used during development and is not required to run the dashboard.

## Documentation and Evidence

- [Product Requirements Document](docs/PRD.md)
- [Design documentation](docs/DESIGN.md)
- [MCP integration](docs/MCP.md)
- [Proof of Concept results](docs/POC.md)
- [Engineering review](docs/REVIEW.md)
- [Design and test evidence](docs/evidence/)

## Testing

The reported MVP verification includes successful `npm run lint` and `npm run build` checks, including TypeScript compilation. Browser checks covered completion, Undo, repeated toggling, synchronized count/percentage/progress indicators, keyboard focus and activation, and reset-on-refresh. Responsive checks were performed at 320, 360, 390, 430, 768, 1024, 1440, and 1920 pixels; no horizontal overflow was observed. A pattern-based scan of reachable Git history and current text files found no matching credentials; no dedicated secret-scanning tool was installed.

## Limitations

- Completion state is temporary and is not saved between page loads.
- The three task names, descriptions, priorities, and order are fixed; tasks cannot be added, edited, or deleted.
- The dashboard tracks training-plan completion only and does not predict combat readiness or outcomes.
- An independent user usability test was not conducted.
- No live deployment URL has been verified.
