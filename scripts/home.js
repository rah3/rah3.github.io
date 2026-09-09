function renderHomePage() {
    const container = document.getElementById('top');
    if (!container) return;

    container.innerHTML = `
        <div class="container my-4" id="top">
            <h1 class="display-6 fw-bold mb-4 text-center"><u>Home</u></h1>

            <div class="row align-items-center g-4 py-2">
                <!-- Intro Section -->
                <div class="col-lg-8">
                    <h2 class="mb-3 fw-bold text-primary">Rahie Datta</h2>
                    <h5 class="text-muted mb-3">Fourth-year BCS, Minor in Mathematics — Carleton University</h5>

                    <p class="fs-5">
                        I am a fourth-year Computer Science student applying through <strong>FSWEP and EOSD</strong>,
                        focused on <strong>software engineering, database systems, and data integrity</strong>.
                    </p>

                    <p class="text-muted">
                        I am interested in roles supporting <strong>public safety, regulatory systems, IT operations,
                        and scientific informatics</strong>. I work best in structured workflows with clear documentation
                        and remote or asynchronous environments.
                    </p>

                    <p class="text-muted">
                        My strengths include <strong>relational database design</strong>, <strong>ETL pipelines & data integrity</strong>,
                        <strong>modular JavaScript architecture</strong>, and <strong>structured documentation</strong>.
                        I work with <strong>Python, SQL, C++, Java, JavaScript, and Linux/Unix</strong>, with experience building
                        deterministic backend logic and responsive frontend interfaces.
                    </p>

                    <div class="d-flex gap-2 mt-4 flex-wrap">
                        <a href="#projects-container" class="btn btn-primary btn-sm px-3">View Projects</a>
                        <a href="#experience-container" class="btn btn-outline-primary btn-sm px-3">Experience</a>
                        <a href="mailto:rahiedatta@gmail.com" class="btn btn-outline-secondary btn-sm px-3">Email</a>
                        <a href="https://github.com/rah3/" target="_blank" class="btn btn-outline-dark btn-sm px-3">GitHub</a>
                        <a href="https://linkedin.com/in/rahiedatta/" target="_blank" class="btn btn-outline-primary btn-sm px-3">LinkedIn</a>
                    </div>

                    <div class="mt-4 p-3 bg-white border-start border-primary border-4 shadow-sm">
                        <p class="small mb-1"><strong>Currently:</strong> Telecommunications Switching Database (Jan 2026 — Feb 2026) — hierarchical trunk preferences, SQLite idempotent assembly</p>
                        <p class="small mb-0"><strong>Focus:</strong> Database Management Systems, Web Applications, Software Engineering — Power BI, REST APIs, Git/GitHub</p>
                    </div>
                </div>

                <!-- Quick Info / Highlights - rajnasit.dev style sidebar -->
                <div class="col-lg-4">
                    <div class="p-3 bg-white border shadow-sm rounded-3">
                        <h6 class="fw-bold mb-3 text-primary">Technical Snapshot</h6>
                        <ul class="small mb-0 list-unstyled">
                            <li class="mb-2"><strong>Languages:</strong> Python, SQL, C++, C, Java, JS, HTML/CSS</li>
                            <li class="mb-2"><strong>Backend:</strong> Relational Design, ETL, REST APIs, Linux/Unix</li>
                            <li class="mb-2"><strong>Data:</strong> Power BI, Data Modeling, Integrity Pipelines</li>
                            <li class="mb-2"><strong>Tools:</strong> Git, VS Code, Node.js, Bash, LaTeX</li>
                            <li><strong>Location:</strong> Ottawa, ON — Remote / Async preferred</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', renderHomePage);
