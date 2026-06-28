# 🤖 AI Project Planner

A lightweight, web-based AI Project Planner built as part of our **Software Engineering** course presentation. Generate professional, structured project plans instantly — either through a rule-based engine or powered by Google Gemini AI.

---

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge">
</p>

---

## 🌐 Live Demo

👉 https://vanshsankat28.github.io/AI-Project-Planner/

---

## 📸 Screenshots

> Screenshots are stored in the `screenshots/` directory.

---

## 📖 About the Project

The AI Project Planner is designed to simplify project management by allowing users to organize tasks, plan milestones, and manage workflows efficiently. Although this is currently a frontend prototype, it demonstrates the core structure and user interface of an AI-assisted project management system.

---

## 🚀 Features

- 🤖 AI-powered plan generator (Google Gemini) for structured, professional project plans
- 📋 Rule-based plan generator — works offline, no API key required
- 📊 Priority classification (High / Medium / Low) based on deadline
- 📄 PDF / print export of generated plans
- 💻 Responsive web interface
- 🎨 Clean and modern UI
- ⚡ Fully client-side — no build step, no server required

---

## 🛠️ Tech Stack

- HTML5
- CSS3 (Vanilla)
- Vanilla JavaScript
- Google Gemini API (optional, for AI plan generation)

---

## 📁 Project Structure

```
AI Project Planner/
├── index.html          ← Main application page
├── css/
│   └── style.css       ← All styles (layout, tables, print, animations)
├── js/
│   └── script.js       ← Rule-based & AI plan generators, PDF export
├── assets/             ← Static assets (images, icons)
├── screenshots/        ← UI screenshots
├── docs/
│   └── architecture.md ← Technical architecture overview
├── README.md
├── LICENSE             ← MIT License
├── CONTRIBUTING.md     ← Contribution guidelines
└── CHANGELOG.md        ← Version history
```

---

## 📖 Usage

### Without AI (rule-based)

1. Open `index.html` in any modern browser.
2. Fill in **Project Name**, **Description**, **Team Size**, and **Deadline**.
3. Click **Generate Plan**.

### With AI (Gemini-powered)

1. Obtain a [Google Gemini API key](https://aistudio.google.com/app/apikey).
2. Open `js/script.js` and replace `YOUR_GEMINI_API_KEY_HERE` with your key.
3. Fill in all form fields and click **Generate AI Plan**.

> ⚠️ Never commit your API key to a public repository.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

*Created for Software Engineering Presentation — 4th Semester*
