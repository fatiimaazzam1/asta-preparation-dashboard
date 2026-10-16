# Mission 07 — Proof of Concept (POC)

## 1. Question to Test

Can task completion and the progress summary remain consistent when tasks are completed, undone, and toggled repeatedly?

## 2. Approach — What I Built

I implemented a small POC using Next.js, TypeScript, React state, and minimal Tailwind CSS styling.

The POC includes:
- Three predefined tasks: Sword Control, Physical Endurance, and Team Coordination.
- Mark Complete and Undo buttons.
- A completed-task counter.
- A dynamically calculated completion percentage.

React `useState` stores completed task IDs as the single source of truth. The completed count and percentage are calculated from this state rather than stored separately.

All tasks start incomplete, and the state resets when the page is refreshed.

I intentionally did not implement the full Figma dashboard design during this experiment.

## 3. Actual Test Results

GitHub Copilot reported successful browser interaction tests with the following results:

| Test action | Expected result | Actual result | Status |
|---|---|---|---|
| Start with no tasks completed | 0/3 — 0% | 0/3 — 0% | Passed |
| Complete one task | 1/3 — 33% | 1/3 — 33% | Passed |
| Complete a second task | 2/3 — 67% | 2/3 — 67% | Passed |
| Complete all tasks | 3/3 — 100% | 3/3 — 100% | Passed |
| Undo one completed task | 2/3 — 67% | 2/3 — 67% | Passed |
| Toggle tasks repeatedly | Correct count and percentage | Correct values maintained | Passed |
| Refresh the page | Reset to 0/3 — 0% | Reset to 0/3 — 0% | Passed |

Additional verification:
- `npm exec eslint -- app/page.tsx` passed.
- `npm run build` passed, including TypeScript checking.

## 4. Issue or Observation

No functional issues were reported during the tested interactions.

An important observation is that keeping completed task IDs as the single source of truth ensures the count and percentage remain consistent.

The experiment also confirmed that the task state resets after refreshing the page, as required by the PRD.

## 5. Decision

**Decision: Continue to MVP.**

The tested approach successfully demonstrated the core task-completion functionality.

I will reuse this logic when implementing the full dashboard based on my Figma Make design.

## 6. POC Evidence

A screenshot of the running POC is stored at:

`docs/evidence/poc-progress.png`

The POC code and documentation will be preserved in Git history before beginning the MVP.

## 7. Run Locally

From the project root, run:

`npm run dev`

Open http://localhost:3000 and test the completion buttons, Undo actions, progress values, and page refresh.