# rahiedatta.dev

Personal portfolio website for Rahie Datta.

**Live Site:** https://rahiedatta.dev  
**GitHub Repository:** https://github.com/rah3/rah3.github.io

---

## About

Fourth-year Computer Science student at Carleton University pursuing a
Bachelor of Computer Science with a Minor in Mathematics.

Areas of interest:

- Software Engineering
- Linux Systems
- Backend Development
- Database Design
- Telecommunications Systems
- Automation

---

## Technology Stack

### Frontend

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

### Backend

- Node.js
- Express

### Development

- Git
- GitHub
- npm
- Nodemon

---

## Architectural Style

The portfolio uses modular JavaScript and functional composition.

Major modules include:

- Navigation
- ScrollSpy
- EmailClipboard

Application startup is coordinated through a lightweight application
factory:

```js
createApp().init();
```

The application avoids framework dependencies and focuses on
maintainable, readable JavaScript.

---

## Features

- Responsive design
- Mobile navigation menu
- Active section highlighting
- Copy-to-clipboard email utility
- Modular JavaScript architecture
- Express-powered local development server

---

## Projects Featured

### Telecommunications Switching Database

COMP 3005: Database Management Systems

Technologies:

- SQLite
- SQL
- Relational Database Design

Repository:

- COMP3005_Telecommunications_Database/

### Linux Systems and Shell Development

COMP 3000: Operating Systems

Technologies:

- Linux
- Bash
- SSH

### Professional Portfolio Website

Technologies:

- Node.js
- Express
- JavaScript
- HTML/CSS

---

## Local Development

Clone the repository:

```bash
git clone https://github.com/rah3/rah3.github.io.git

cd rah3.github.io
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

or

```bash
npm start
```

Open:

```text
http://localhost:3000
```

---

## Project Structure

```text
public/
│
├── index.html
├── style.css
│
└── js/
    ├── App.js
    ├── Navigation.js
    ├── ScrollSpy.js
    └── EmailClipboard.js
server.js
package.json
```

---

## Deployment

The portfolio is designed as a static website.

The `public/` directory contains all production assets required by
GitHub Pages.

The Express server is used for local development only.

---

## Author

Rahie Datta

Carleton University

Bachelor of Computer Science (BCS)

Expected Graduation: 2027