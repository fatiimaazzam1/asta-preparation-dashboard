# Product Requirements Document (PRD)

**Product:** Asta's Preparation Dashboard  
**Assignment:** TechTalks — Assignment 02  
**Version:** 1.0 — Reviewed and approved
**Stack:** Next.js, TypeScript, Tailwind CSS

## 1. Product Summary

Asta's Preparation Dashboard is a small, responsive web application that helps Asta organize and track his preparation for Lucifero.

The dashboard displays three predefined training tasks, allows Asta to mark them complete or incomplete, and automatically calculates his overall training-plan completion.

## 2. Primary User and Problem

**Primary user:** Asta, a fictional fighter preparing for Lucifero.

**Problem:** Asta's training tasks are scattered across notes. He cannot easily identify what remains unfinished, what has been completed, or how much of his plan is complete.

Lucifero's gravity magic makes preparation important, but the dashboard is not intended to simulate combat or predict an outcome.

This problem is provided by the fictional assignment scenario. No external user research has been conducted.

## 3. Goal of the First Version

Build one usable dashboard that allows Asta to:

- Understand his preparation goal.
- See the three required training tasks.
- Complete and undo tasks.
- See his completed/total count and calculated percentage.

Success means Asta can perform those actions easily and the progress summary always matches the actual task states.

## 4. Exactly Three Core Features

### Feature 1: View Training Tasks

Display the three predefined tasks in the supplied order. Each task must show its name, description, priority, and current completion status.

### Feature 2: Toggle Task Completion

Each task has an accessible completion control.

Asta can mark an incomplete task as complete and can reverse that action.

### Feature 3: View Calculated Progress

Display the number of completed tasks out of three and the corresponding completion percentage.

The summary must update immediately whenever task completion changes.

## 5. Provided Sample Data

| Task | Description | Priority |
|---|---|---|
| Sword control | Practice precise anti-magic sword movements. | High |
| Physical endurance | Complete a focused strength and stamina session. | Medium |
| Team coordination | Review a preparation plan with the Black Bulls. | High |

All three tasks start incomplete.

The predefined task names, descriptions, priorities, and display order remain fixed.

## 6. User Stories

**US-01 — View tasks**

As Asta, I want to see my training tasks and their priorities so that I know what I need to practise.

**US-02 — Complete a task**

As Asta, I want to mark a task as complete so that I can track what I have finished.

**US-03 — Undo completion**

As Asta, I want to undo a completed task so that I can correct my progress when necessary.

**US-04 — View progress**

As Asta, I want to see my completed-task count and percentage so that I can understand how much of my preparation plan is complete.

## 7. Expected Behavior

- The dashboard initially displays all three tasks with a visible **Incomplete** status.
- When Asta completes a task, its status immediately changes to **Completed**.
- When Asta undoes completion, its status immediately returns to **Incomplete**.
- After every completion or undo action, the task status, completed/total count, and progress percentage update together.
- The completed count is calculated from the current task states.
- Progress percentage equals the completed count divided by three, multiplied by 100, and rounded to the nearest whole number.
- Each task contributes equally to progress regardless of priority.
- Repeated toggling must keep the completed count between 0 and 3 and the percentage between 0% and 100%.
- Task completion is stored only in memory.
- Refreshing the browser resets all tasks to **Incomplete** and progress to **0/3 (0%)**.

The percentage represents **training-plan completion only**. It is not a prediction of victory or combat readiness.

## 8. Acceptance Criteria

- **AC-01:** The application displays one dashboard with Asta's preparation goal and a brief explanation of Lucifero's threat.
- **AC-02:** All three predefined tasks appear with the exact supplied descriptions and priorities.
- **AC-03:** On initial load, all three tasks visibly display Incomplete.
- **AC-04:** Completing any task immediately changes its status to **Completed**; undoing it immediately changes the status to **Incomplete**. The completed count and percentage update correctly after both actions.
- **AC-05:** Initial progress is 0/3 and 0%.
- **AC-06:** Completing one task displays 1/3 and 33%.
- **AC-07:** Completing two tasks displays 2/3 and 67%.
- **AC-08:** Completing all three tasks displays 3/3 and 100%.
- **AC-09:** Undoing one task after completing all three displays 2/3 and 67%.
- **AC-10:** Repeatedly toggling the same task keeps the count between zero and three and the percentage between 0% and 100%.
- **AC-11:** The interface clearly explains that the percentage measures completed training tasks.
- **AC-12:** Completion controls support keyboard operation and display visible keyboard focus.
- **AC-13:** The layout remains readable on desktop and at approximately 360px mobile width without horizontal scrolling.
- **AC-14:** Refreshing the browser resets the dashboard to 0/3 and 0%.
- **AC-15:** No decorative control appears to perform an action that it cannot actually perform.
- **AC-16:** The implementation stays within the defined scope and contains no committed credentials.

## 9. Design and Accessibility Requirements

The dashboard must include:

- A clear product title and short introduction.
- A compact Lucifero threat brief.
- Three readable training task cards.
- Task priorities and clear completion-status labels.
- Accessible completion controls.
- A completed/total summary and visual progress indicator.
- Text explaining the meaning of the progress percentage.

The design must be responsive for desktop and mobile, use readable typography, sufficient contrast, clear spacing, and distinguishable completed/incomplete states.

Controls must be usable without requiring a mouse. Visible focus indicators must be provided.

The design will be created and refined using Google Stitch and documented in `docs/DESIGN.md`.

The core actions must be understandable without anime knowledge.

## 10. Technology Stack

- **Next.js:** Web application framework.
- **TypeScript:** Typed application code.
- **Tailwind CSS:** Responsive styling.
- **React state:** Temporary in-memory completion tracking.
- **Google Stitch:** UI design and refinement.
- **MCP:** Development-time connection between a compatible coding agent and Stitch, where available.
- **Git and GitHub:** Version control and submission.

No database, backend API, or authentication system is required.

## 11. Assumptions and Limitations

- Asta is the only intended user in this fictional scenario.
- The three training tasks are predefined and fixed.
- The tasks are examples supplied for this assignment, not official character statistics.
- All tasks contribute equally to the progress calculation.
- Progress is not saved between page refreshes.
- The application requires a JavaScript-capable browser.
- The scope is limited to one dashboard screen.
- No real user research or market validation is claimed.
- The application uses a single dashboard route (`/`); no additional application routes are required.

## 12. Explicitly Excluded Features

**Outside this version:**

- Login, accounts, database, payments, chatbots, combat simulation, multiplayer, and live anime data.
- Adding, editing, or deleting tasks.
- Saving after refresh, unless chosen as an optional extension.

## 13. PRD Review Status

The PRD has been reviewed and approved before implementation.

The corrections and reasons are documented in `docs/REVIEW.md`.

This approved PRD will guide the Stitch design, POC verification, and MVP implementation.