# Personal Portfolio Website (`rah3.github.io`)

[![Live Site](https://img.shields.io/badge/Status-Live-brightgreen)](https://rah3.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)](package.json)

Personal portfolio website showcasing software engineering projects, technical skills, and academic background. Designed with a lightweight, framework-free architecture for optimal performance and seamless static deployment.

**Live Site:** [rah3.github.io](https://rah3.github.io)  
**GitHub Repository:** [github.com/rah3/rah3.github.io](https://github.com/rah3/rah3.github.io)

## About

I am a fourth-year Computer Science student at **Carleton University** pursuing a Bachelor of Computer Science with a Minor in Mathematics. 

Core technical interests and focus areas include:
* Software Engineering & System Design
* Linux Systems & Process Management
* Backend Development & APIs
* Database Design & Optimization
* Telecommunications Systems
* Automation & Scripting

---

## Technology Stack

The project relies on a modern, lightweight, and framework-free JavaScript architecture. It uses Node.js and Express solely for local development ergonomics, while the production assets are fully optimized for static delivery via GitHub Pages.

### Frontend
* HTML5 / CSS3: Semantic markup and modern custom styling.
* Vanilla JavaScript (ES6+): Modular, performant implementation without heavy framework overhead.

### Backend & Tooling
* Node.js & Express: Local development server and static asset proxying.
* Git & GitHub: Version control and CI/CD hosting via GitHub Pages.
* Nodemon: Hot-reloading utility during local development.

---

## Architectural Style

The codebase implements a **modular component pattern** and functional composition. Rather than relying on heavy client-side frameworks, the UI components are isolated into independent, testable modules.

### Core Modules
* `Navigation.js`: Manages mobile responsive toggle states and layout adjustments.
* `ScrollSpy.js`: Tracks user scroll position to dynamically highlight active navigation links.
* `EmailClipboard.js`: Handles user interactions for quick email copying with visual feedback.

### Application Factory Pattern
Application startup and lifecycle management are initialized through a lightweight factory pattern:
```js
createApp().init();

```

---

## Features
My application has the following features:
* **Fully Responsive**: Mobile-first design adapting seamlessly across mobile, tablet, and desktop viewports.
* **Active Section Highlighting**: Real-time viewport tracking using intersection observers / scroll spy.
* **Interactive Utilities**: One-click email copy-to-clipboard functionality.
* **Lightweight & Fast**: Zero frontend framework bloat ensuring instant page load speeds.
* **Express Development Server**: Local mock environment mirroring production static behavior.

---

## Project Structure
The project structure is as follows:

```text
rah3.github.io/
│
├── index.html          # Main entry markup
├── style.css           # Global stylesheet
└── js/                 # Modular frontend scripts
    ├── App.js          # Core application factory
    ├── Navigation.js   # Mobile menu & nav controller
    ├── ScrollSpy.js    # Active section tracker
    └── EmailClipboard.js # Clipboard utility
├── server.js               # Express local development server
├── package.json            # Node.js dependencies and scripts
└── README.md               # Project documentation

```

## Featured Projects
Below are the showcased projects that I have worked on during my school term.

### 1. Telecommunications Switching Database

* **Course:** COMP 3005 (Database Management Systems)
* **Technologies:** SQLite, SQL, Relational Database Design
* **Overview:** Designed and implemented a robust relational database schema tailored for telecommunications routing and subscriber switching management.

### 2. Linux Systems & Shell Development

* **Course:** COMP 3000 (Operating Systems)
* **Technologies:** Linux, Bash, System Calls, C
* **Overview:** Explored low-level OS primitives, process management (`fork`, `execve`), environment variable handling, and remote SSH administration.

### 3. Professional Portfolio Website

* **Technologies:** Node.js, Express, JavaScript, HTML5/CSS3
* **Overview:** This repository—built from scratch to highlight academic and practical engineering work.

## Local Development

To run the development environment locally:

1. **Clone the repository:**
```bash
git clone [https://github.com/rah3/rah3.github.io.git](https://github.com/rah3/rah3.github.io.git)
cd rah3.github.io

```


2. **Install dependencies:**
```bash
npm install

```


3. **Start the development server:**
```bash
npm run dev

```


*(Or standard start: `npm start`)*
4. **Open in your browser:**
Navigate to `http://localhost:3000`.

## Deployment

This repository uses a decoupled deployment model:
* **Production:** The contents of the `public/` directory are deployed statically to **GitHub Pages**.
* **Development:** The `server.js` Express backend is used exclusively for local testing and does not run in production.

## Author

**Rahie Datta**
* Carleton University — Bachelor of Computer Science (BCS)
* Expected Graduation: 2027
* [GitHub Profile](https://github.com/rah3)