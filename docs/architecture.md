# Architecture Overview — AI Project Planner

This document describes the technical design and data flow of the AI Project Planner Tool.

---

## Table of Contents

- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Component Overview](#component-overview)
- [Data Flow](#data-flow)
- [API Integration](#api-integration)
- [Output Rendering](#output-rendering)
- [PDF Export](#pdf-export)
- [Design Decisions](#design-decisions)

---

## Technology Stack

| Layer      | Technology          |
|------------|---------------------|
| Structure  | HTML5               |
| Styling    | CSS3 (Vanilla)      |
| Logic      | Vanilla JavaScript  |
| AI API     | Google Gemini API   |
| Build Tool | None (zero-build)   |
| Runtime    | Any modern browser  |

---

## Project Structure

```
AI Project Planner/
├── index.html          ← Single-page application entry point
├── css/
│   └── style.css       ← All styles (layout, typography, tables, print)
├── js/
│   └── script.js       ← All client-side logic
├── assets/             ← Static assets (images, icons — future use)
├── screenshots/        ← UI screenshots for README/docs
├── docs/
│   └── architecture.md ← This file
├── README.md
├── LICENSE
├── CONTRIBUTING.md
└── CHANGELOG.md
```

---

## Component Overview

### `index.html`

The single HTML page containing:
- A `<form>`-like input group (Project Name, Description, Team Size, Deadline)
- Four action buttons wired via `addEventListener` in `script.js`
- An `#output` div where all generated content is injected as HTML

### `css/style.css`

Organised into labelled sections:
- **Base / Reset** — body font and background
- **Layout** — `.container`, `#output`
- **Form Elements** — inputs, textarea, buttons
- **Typography** — `h1`, `h2`, `h3` colours
- **Progress Bar** — `.progress-bar` / `.progress-fill`
- **Tables** — `th`, `td`, zebra striping, hover
- **Animations** — `@keyframes pulse` for the AI loading bar
- **Print** — `@media print` rules for PDF fidelity

### `js/script.js`

Contains four exported-style functions plus one bootstrap listener:

| Function          | Purpose                                               |
|-------------------|-------------------------------------------------------|
| `resetForm()`     | Clears all inputs and the `#output` div               |
| `generatePlan()`  | Keyword-based plan using predefined phase templates   |
| `generateAIPlan()`| Async Gemini API call; streams HTML into `#output`    |
| `downloadPDF()`   | Opens a print window with inlined styles for PDF save |
| `DOMContentLoaded`| Binds all four button click handlers                  |

---

## Data Flow

```
User Input (form fields)
        │
        ▼
  Button click event
        │
   ┌────┴─────────────────────────┐
   │                              │
generatePlan()             generateAIPlan()
   │                              │
Rule-based matching         POST → Gemini API
(keyword detection)              │
   │                         Response HTML
   │                              │
   └────────┬─────────────────────┘
            │
    Sanitise & inject into #output div
            │
     User sees rendered plan
```

---

## API Integration

**Endpoint:**
```
POST https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=YOUR_API_KEY
```

**Authentication:** API key passed as a URL query parameter.

**Request body:** A single `contents[].parts[].text` prompt constructed from the user's form values. The prompt instructs Gemini to return only raw HTML with no Markdown.

**Response handling:**
1. HTTP 503 → display "Gemini is busy" message
2. `!response.ok` → display generic error
3. `!data.candidates` → display generic error
4. Success → extract `candidates[0].content.parts[0].text`, strip Markdown fences and all inline `style=""` attributes, then inject into `#output`

> ⚠️ **Security note:** Never commit your API key to the repository. Replace `YOUR_GEMINI_API_KEY_HERE` with your actual key locally, or load it from an environment variable via a backend proxy in production.

---

## Output Rendering

All plan content (both rule-based and AI-generated) is injected as raw HTML into the `#output` div using `innerHTML`. Styling is handled entirely by `css/style.css`, including:

- Table headers rendered in brand blue (`#2563eb`)
- Zebra-striped rows
- Hover highlight on rows
- Inline priority colour (red / orange / green) set via a template literal

AI-generated `style=""` attributes are stripped before injection to ensure consistent appearance.

---

## PDF Export

`downloadPDF()` opens a new browser tab, writes a self-contained HTML document (with inlined styles for print fidelity), then calls `window.print()`. The user saves the print dialog output as PDF.

Inline styles are required in the print window because the external stylesheet is not available in the detached window context.

---

## Design Decisions

| Decision | Rationale |
|---|---|
| Zero dependencies | Keeps the project lightweight and instantly openable without a build step |
| `innerHTML` for output | Sufficient for this scope; avoids framework overhead |
| Inline styles stripped from Gemini output | Ensures Gemini-generated HTML always matches the app's design system |
| Print-based PDF export | No server needed; works offline; preserves exact visual fidelity |
| Rule-based fallback | Works without an API key; useful for demos and offline use |
