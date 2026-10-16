# Engineering Review — Assignment 02

## 1. PRD Review

**Document reviewed:** `docs/PRD.md`

**Review outcome:** Approved after corrections.

### Correction 1 — Explicit Task Status Updates

**Before:** The AI-generated draft mentioned task completion but did not clearly specify all visible status changes in the acceptance criteria.

**After:** Each task explicitly displays **Incomplete** or **Completed**. Completing or undoing a task immediately updates its status, completed/total count, and percentage together.

**Reason:** This makes the expected behavior clearer, consistent, and testable.

### Correction 2 — Out-of-Scope Features

**Before:** The AI-generated exclusions included extra restrictions beyond the assignment's stated exclusion groups.

**After:** Section 12 was revised to match the assignment's three out-of-scope groups.

**Reason:** The PRD should reflect the assignment requirements without unnecessarily expanding or changing the requested scope.

### Correction 3 — Clear and Non-Repetitive Requirements

**Before:** Section 7 repeated several status and completion rules.

**After:** Repeated statements were consolidated into clear expected behaviors.

**Reason:** Avoid duplication and make the requirements easier to understand, implement, and test.

### PRD Approval Decision

The PRD contains the required product information, exactly three core features, fixed sample data, testable acceptance criteria, design requirements, assumptions, limitations, and out-of-scope features.

The application will use temporary in-memory task state, with progress resetting after browser refresh.

**Decision:** PRD approved for the design stage.

---
## 2. MVP Engineering Review

### Technical Verification

After implementing the MVP using Next.js, TypeScript, and Tailwind CSS, I reviewed its functionality against the PRD acceptance criteria.

**Verification results:**
- `npm run lint` — Passed.
- `npm run build` — Passed.
- All 16 PRD acceptance criteria — Passed within the reported verification scope.
- Task completion and Undo functionality — Passed.
- Dynamic progress counter and percentage — Passed.
- Progress ring and progress bar synchronization — Passed.
- Refresh reset behavior — Passed.
- Keyboard accessibility and visible focus — Passed.

GitHub Copilot assisted with browser testing, code inspection, and security checks.

### Responsive Design Verification

The dashboard was tested at the following widths:

320px, 360px, 390px, 430px, 768px, 1024px, 1440px, and 1920px.

The reported checks found no horizontal overflow, overlapping cards, or clipped text. The task controls remained accessible.

### Security and Scope

The application contains only the features defined in the PRD.

The project uses temporary React state, without authentication, a database, additional routes, or persistence.

A pattern-based scan of the current files and reachable Git history found no matching credentials. This is not a guarantee against every possible secret format.

## 3. Design Comparison and Improvement

I manually compared the Next.js MVP with my approved Figma Make desktop and mobile designs.

The overall layout, colors, typography, task cards, and progress indicators matched the selected design.

However, I noticed two text differences:

| Element | Before | After |
|---|---|---|
| Completed-task button | Undo | Undo Completion |
| Progress counter | 1/3 completed | 1 of 3 completed |

**Reason for improvement:**

I changed these labels to match the Figma design and make the interface clearer and more consistent.

The changes did not modify the underlying functionality.

**Verification:**

After the changes, ESLint and the production build passed. Browser testing confirmed that completion, Undo, and progress updates continued working correctly.

## 4. Usability Review

An independent usability test with a classmate or friend was not conducted.

Instead, I reviewed the application myself and used AI-assisted browser tests to verify the interface and functionality.

These checks provide technical and design evidence, but they do not replace feedback from an independent user.

**Improvement made:** I refined the Undo button and completed-task counter labels to improve clarity and consistency.

---

## 5. Reflection Questions

### Q1. How did your PRD prevent an unnecessary feature?

My PRD defined exactly what the dashboard needed: three training tasks, completion controls, and progress tracking.

It helped me avoid unnecessary features such as login, databases, extra pages, and task management features that were outside the assignment scope.

### Q2. What did the POC test, and what did it not prove?

The POC tested whether completing and undoing tasks correctly updated the count and percentage, including repeated toggling.

It proved that the core interaction could work.

However, it did not prove that the complete Figma design, responsive layout, or full MVP met every requirement. Those were checked during MVP implementation and testing.

### Q3. Why is this MVP useful even though it is small?

The MVP is useful because it provides the main functionality needed to track Asta's training preparation.

Users can see the three tasks, complete or undo them, and immediately understand their progress.

It demonstrates the essential product idea without unnecessary complexity.

### Q4. What did MCP allow your agent to do?

I used Figma MCP instead of Stitch MCP with my mentor's approval.

MCP allowed GitHub Copilot in VS Code to access my existing Figma Make design directly.

Using `get_design_context`, Copilot retrieved design source files, preview images, styling information, and layout details.

This helped implement the dashboard in Next.js without relying only on screenshots or manually copying the design.

### Q5. Which AI-generated decision did you correct?

During my PRD review, I corrected the AI-generated requirements to make task status changes explicit and keep the project within the required scope.

Later, I compared the generated Next.js interface with my Figma design and corrected two labels: "Undo" became "Undo Completion", and "1/3 completed" became "1 of 3 completed".

These corrections improved consistency and clarity.

### Q6. Explain the task state and progress calculation.

The dashboard uses React `useState` to store the IDs of completed tasks.

When I click Mark Complete, the task ID is added to the completed list. When I click Undo Completion, the ID is removed.

The completed count is calculated from the number of IDs in the list.

The percentage is calculated using:

`Math.round((completedCount / 3) * 100)`

For example:
- 0 completed = 0%
- 1 completed = 33%
- 2 completed = 67%
- 3 completed = 100%

The count, percentage, and progress indicators all use the same state, so they remain consistent.

The state is temporary and resets after a page refresh.

### Q7. If agents can generate code, what decisions and checks were still your responsibility?

Even though GitHub Copilot helped generate code, I was responsible for making sure the application followed the PRD.

I selected the design tool, reviewed the generated implementation, checked the functionality, identified UI differences, requested corrections, and verified the results.

I also had to make sure the project stayed within the required scope and that testing results were documented accurately.

AI helped with implementation, but reviewing and accepting the final result remained my responsibility.

---

## 6. Final Review Decision

The MVP passed the reported technical and functional acceptance checks, and the identified UI label differences were corrected.

**Decision:** The MVP is ready to proceed to the publishing and deployment stage.

**Remaining limitation:** Independent real-person usability testing was not performed.