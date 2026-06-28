# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

---

## [1.0.0] — 2026-06-29

### Added
- `index.html` — main application page with form inputs and output panel
- `css/style.css` — full stylesheet including layout, typography, tables, progress bar, animations, and print styles
- `js/script.js` — four core functions: `generatePlan`, `generateAIPlan`, `downloadPDF`, `resetForm`
- Rule-based plan generator: keyword detection for "website" and "app" project types
- AI-powered plan generator via Google Gemini API (`gemini-2.5-flash-lite`)
- PDF/print export using `window.print()`
- Priority classification based on deadline (High / Medium / Low)
- Animated loading indicator during AI API calls
- `README.md` — project overview, setup instructions, and usage guide
- `LICENSE` — MIT License
- `CONTRIBUTING.md` — contribution guidelines and code style rules
- `CHANGELOG.md` — this file
- `docs/architecture.md` — technical architecture overview
- `.gitignore` — common exclusions for macOS, editors, and web projects

---

[Unreleased]: https://github.com/vanshsankat28/AI-Project-Planner-Tool/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/vanshsankat28/AI-Project-Planner-Tool/releases/tag/v1.0.0
