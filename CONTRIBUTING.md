# Contributing to AI Project Planner

Thank you for your interest in contributing! This document outlines the process for reporting issues, suggesting features, and submitting pull requests.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Reporting Issues](#reporting-issues)
- [Suggesting Features](#suggesting-features)
- [Development Setup](#development-setup)
- [Pull Request Workflow](#pull-request-workflow)
- [Code Style Guidelines](#code-style-guidelines)

---

## Code of Conduct

Please be respectful and constructive in all interactions. This project follows a standard open-source code of conduct: be inclusive, collaborative, and kind.

---

## Reporting Issues

1. Check the [existing issues](../../issues) to avoid duplicates.
2. Open a new issue and include:
   - A clear, descriptive title
   - Steps to reproduce the problem
   - Expected vs. actual behaviour
   - Browser name and version
   - Screenshots (if applicable)

---

## Suggesting Features

1. Open a new issue with the label `enhancement`.
2. Describe the feature, the problem it solves, and any relevant context.
3. For larger ideas, start a discussion before opening a PR.

---

## Development Setup

This project requires **no build tools or dependencies** — it is pure HTML, CSS, and JavaScript.

```bash
# 1. Fork the repository on GitHub
# 2. Clone your fork
git clone https://github.com/<your-username>/AI-Project-Planner-Tool.git

# 3. Open index.html in your browser
open index.html
```

---

## Pull Request Workflow

1. **Create a branch** from `main` with a descriptive name:
   ```bash
   git checkout -b fix/typo-in-readme
   git checkout -b feat/dark-mode-toggle
   ```

2. **Make your changes** — keep commits small and focused.

3. **Test manually** — verify the app works in at least one modern browser (Chrome / Firefox / Safari).

4. **Commit** with a clear message:
   ```bash
   git commit -m "fix: correct typo in README project structure table"
   ```

5. **Push** your branch and open a Pull Request against `main`.

6. Fill in the PR template and link any related issues.

---

## Code Style Guidelines

### HTML
- Use 4-space indentation.
- Include `alt` attributes on all `<img>` tags.
- Prefer semantic elements (`<section>`, `<article>`, `<nav>`) over generic `<div>` where appropriate.

### CSS
- Follow the existing section-comment structure (e.g., `/* === Layout === */`).
- Use 4-space indentation.
- Avoid `!important` except where required for print or third-party overrides.
- Group related properties together (box model, typography, colours).

### JavaScript
- Use `let` / `const` — avoid `var`.
- Add a JSDoc comment to every function.
- Use 4-space indentation.
- Prefer descriptive variable names (`projectName` over `pn`).
- Keep DOM manipulation inside functions; bind events only in the `DOMContentLoaded` listener.

---

*Thank you for helping improve AI Project Planner!*
