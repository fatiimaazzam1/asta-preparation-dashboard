# Asta's Preparation Dashboard — Design Documentation

## 1. Design Tools

- Initial design: Stitch
- Refined design: Figma Make
- Implementation target: Next.js, TypeScript, and Tailwind CSS

The first desktop design was created using Stitch. I later redesigned the dashboard using Figma Make because it provided a more organized styling experience, easier design adjustments, and an interactive preview for testing the interface.


## 2. Required Design Refinement

**Before — Stitch**

The initial version was a desktop dashboard created using Stitch.

**After — Figma Make**

I refined the design by:
- Improving the visual organization and hierarchy of dashboard sections.
- Presenting the three training tasks in clear, consistent cards.
- Making task status, priority, and completion controls easy to identify.
- Including a dedicated progress summary with a progress indicator.
- Creating a responsive mobile layout in addition to the desktop design.

**Reason for refinement**

The objective was to improve readability, navigation, visual consistency, and usability. Figma Make also allowed me to preview the dashboard and examine its interactive behavior before implementation.

## 3. Design System

### Colors

| Color | Usage |
|---|---|
| Charcoal `#15161B` | Main dark header and background |
| Warm off-white `#F2F0EA`, `#FBFAF7` | Dashboard and card surfaces |
| Coral red `#D7442E`, `#FF7257` | Primary accents and emphasis |
| Green | Completed task status |
| Amber | Medium-priority indicators |

### Typography

- **Barlow Condensed:** Main titles and headings.
- **Inter:** Body text, descriptions, and interface labels.

The typography establishes a clear visual hierarchy while keeping dashboard information readable.

### Spacing and Layout

- Consistent card padding and spacing between sections.
- Clear separation between task cards and the progress summary.
- Three-column task layout on wider screens.
- Single-column arrangement on smaller screens.

## 4. Dashboard Sections

**Header and Threat Brief**

Displays the dashboard title and the Lucifero threat context.

**Training Tasks**

Three predefined tasks:
1. Sword Control — High priority
2. Physical Endurance — Medium priority
3. Team Coordination — High priority

Each task provides its priority, completion status, and completion control.

**Progress Summary**

Displays:
- Completed tasks out of three.
- Training completion percentage.
- Visual progress indicator.

The percentage represents completed training tasks, not the probability of defeating Lucifero.

## 5. Responsive Design

**Desktop:** A wider layout displays the training cards in a three-column grid.

**Mobile:** A single-column layout improves readability and allows the task controls to remain accessible on narrow screens, including the 360px target.

## 6. Interaction Requirements

The intended behavior follows the PRD:

- All three tasks initially start incomplete.
- Selecting "Mark Complete" completes a task.
- The action changes to "Undo" for completed tasks.
- Selecting "Undo" restores the incomplete state.
- Completed task count, percentage, and progress indicator update dynamically.

These behaviors must be verified in the interactive preview and during implementation.

## 7. Design Evidence

Screenshots are stored in `docs/evidence/`.

| Screenshot | Description |
|---|---|
| `before-desktop.png` | Initial Stitch desktop design |
| `after-desktop.png` | Refined Figma Make desktop design |
| `after-mobile.png` | Refined Figma Make mobile design |

The first design was desktop-only. The refined version includes both desktop and mobile layouts.

## 8. Final Design Decision

I selected the Figma Make redesign because it offers clearer organization, consistent styling, responsive layouts, and an interactive preview.

The design will serve as the visual reference for implementing the dashboard using Next.js, TypeScript, and Tailwind CSS.