function loadObjective() {
    const container = document.getElementById('objective-container');
    if (!container) return;
    const objectiveText = `
        I am a fourth-year Computer Science student applying through FSWEP and EOSD, focused on software engineering,
        database systems, and data integrity. I am interested in roles supporting public safety, regulatory systems,
        IT operations, and scientific informatics. I work best in structured workflows with clear documentation and
        remote or asynchronous environments.
    `;
    container.innerHTML = `
        <div class="bg-white">
            <p class="fst-italic mb-0">${objectiveText.trim()}</p>
        </div>
    `;
}

function loadEducation() {
    const container = document.getElementById('education-container');
    if (!container) return;
    container.innerHTML = `
        <div class="p-3 bg-white border-start border-primary border-4 shadow-sm">
            <div class="d-flex justify-content-between align-items-center flex-wrap">
                <h5 class="fw-bold mb-0">Bachelor of Computer Science (BCS), Minor in Mathematics</h5>
                <span class="text-muted small">Expected Graduation: 2027</span>
            </div>
            <p class="text-primary mt-1 mb-2">Carleton University — Ottawa, Ontario</p>
            <p class="small mb-0">
                <strong>Relevant Coursework:</strong> Database Management Systems, Web Applications,
                Software Engineering, Data Structures, Linear Algebra, Calculus.
            </p>
        </div>
    `;
}

function loadSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;
    const skills = [
        { label: "Languages", value: "Python, SQL, C++, C, Java, JavaScript, HTML/CSS, MATLAB, LaTeX" },
        { label: "Backend & Systems", value: "Relational Database Design, ETL Pipelines, REST APIs, Linux/Unix" },
        { label: "Frontend & UI", value: "Modular JavaScript, Responsive Layouts, CSS Architecture" },
        { label: "Data & Analytics", value: "Power BI, Data Modeling, Data Integrity, Structured Pipelines" },
        { label: "Developer Tools", value: "Git/GitHub, VS Code, Node.js, Bash, TeXstudio" },
        { label: "Regulatory Alignment", value: "Documentation accuracy, standardized evaluation, compliance-focused workflows" }
    ];
    container.innerHTML = `
        <div class="p-3 bg-white border-start border-primary border-4 shadow-sm">
            <ul class="list-unstyled mb-0 small">
                ${skills.map(s => `<li class="mb-1"><strong>${s.label}:</strong> ${s.value}</li>`).join('')}
            </ul>
        </div>
    `;
}

function loadExperience() {
    const container = document.getElementById('experience-container');
    if (!container) return;
    const experiences = [
        {
            title: "Restaurant Worker",
            company: "Pizza Pizza Limited — Smiths Falls, Ontario",
            date: "Aug 2021 — Present",
            details: `
                <ul>
                    <li>Worked in a fast-paced service environment, applied strict procedural and safety standards, resulted in consistently accurate order preparation and compliance with food-safety requirements.</li>
                    <li>Managed high-volume customer periods, executed rapid and precise workflows, resulted in reduced wait times and improved customer satisfaction.</li>
                    <li>Operated within a team-based environment, coordinated inventory and workspace organization, resulted in smoother daily operations and minimized workflow disruptions.</li>
                </ul>
            `
        },
        {
            title: "Center Assistant and Grader",
            company: "Kumon North America, Inc. — Stittsville, Ontario",
            date: "Aug 2024 — Present",
            details: `
                <ul>
                    <li>Supported a large cohort requiring accurate academic evaluation, applied standardized rubrics, resulted in consistent and reliable performance tracking.</li>
                    <li>Assisted students with varying reading proficiency, delivered structured oral assessments, resulted in measurable improvements in comprehension and fluency.</li>
                    <li>Worked within a standardized instructional framework, provided individualized guidance, resulted in stronger self-directed learning outcomes.</li>
                    <li>Observed diverse learning patterns, documented detailed performance notes, resulted in targeted curriculum adjustments by instructors.</li>
                </ul>
            `
        },
        {
            title: "Assistant Coder Coach",
            company: "Coder Sports Academy — Kanata, Ontario",
            date: "Jul 2022 — Aug 2022",
            details: `
                <ul>
                    <li>Supported onboarding for youth coding programs, communicated program details to parents, resulted in clearer expectations and improved engagement.</li>
                    <li>Maintained a safe and organized learning environment, performed administrative and facility tasks, resulted in smooth daily operations.</li>
                    <li>Participated in team-based instructional initiatives, collaborated on group teaching activities, resulted in strengthened program delivery and alignment with organizational goals.</li>
                </ul>
            `
        },
        {
            title: "Center Assistant Grader",
            company: "Kumon North America, Inc. — Nepean, Ontario",
            date: "Aug 2018 — Jun 2020",
            details: `
                <ul>
                    <li>Managed high assignment volumes requiring standardized grading, applied strict marking guidelines, resulted in consistent academic standards across the center.</li>
                    <li>Required accurate student progress tracking, recorded daily performance metrics, resulted in reliable data for monitoring academic growth.</li>
                    <li>Supported peak operational periods, maintained organized grading workflows, resulted in reduced turnaround times and improved center efficiency.</li>
                    <li>Identified students experiencing academic challenges, escalated concerns to instructors, resulted in timely intervention and improved learning outcomes.</li>
                </ul>
            `
        }
    ];
    container.innerHTML = experiences.map(exp => `
        <div class="mb-4 border-start ps-3 border-primary">
            <div class="d-flex justify-content-between">
                <h5 class="fw-bold mb-0">${exp.title}</h5>
                <span class="text-muted small">${exp.date}</span>
            </div>
            <p class="text-primary mb-1 small">${exp.company}</p>
            <div class="text-secondary small">${exp.details}</div>
        </div>
    `).join('');
}

function loadProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    const projects = [
        {
            title: "Telecommunications Switching Database",
            date: "Jan 2026 — Feb 2026",
            details: `
                <ul>
                    <li>Addressed complex telecommunications routing requirements, designed a relational database with hierarchical trunk preferences, resulted in accurate modeling of call‑termination logic.</li>
                    <li>Required precise mapping of dialed digits, executed SQL queries using directory number and area code matching, resulted in reliable routing outputs aligned with telecom standards.</li>
                    <li>Encountered disparate data sources, engineered an idempotent SQLite assembly script, resulted in consistent and integrity‑preserving data consolidation.</li>
                </ul>
            `
        },
        {
            title: "Professional Software Portfolio",
            date: "Dec 2025 — Present",
            details: `
                <ul>
                    <li>Built a responsive personal portfolio, implemented modular JavaScript and unified CSS architecture, resulted in deterministic content generation across devices.</li>
                    <li>Applied a logic-first design philosophy, emphasized structural clarity and documentation, resulted in improved maintainability and readability.</li>
                    <li>Enhanced navigation performance, implemented custom scroll operations and modular layout, resulted in a smoother user experience and faster responsiveness.</li>
                </ul>
            `
        }
    ];
    container.innerHTML = projects.map(p => `
        <div class="mb-4 border-start ps-3 border-primary">
            <div class="d-flex justify-content-between">
                <strong class="text-dark">${p.title}</strong>
                <span class="text-muted small">${p.date}</span>
            </div>
            <div class="text-secondary small">${p.details}</div>
        </div>
    `).join('');
}

function loadHonors() {
    const container = document.getElementById('honors-container') || document.getElementById('volunteer-container');
    if (!container) return;
    container.innerHTML = `
        <div class="p-3 bg-white border-start border-primary border-4 shadow-sm">
            <ul class="small mb-0">
                <li><strong>Grade 11 Honour Society Award</strong> (2021) — Achieved an average of 80%+ across Grades 9–11.</li>
                <li><strong>Grade 10 Honour Society</strong> (2020) — Achieved an average of 80%+ across Grades 9–11.</li>
                <li><strong>Mathematics Silver Award</strong> (2018) — Earned the K-Level Kumon Math Certificate, reaching an advanced national ranking.</li>
            </ul>
        </div>
    `;
}

function loadVolunteerExperience() {
    return loadHonors();
}

var functor = function() {
    loadObjective();
    loadEducation();
    loadSkills();
    loadExperience();
    loadProjects();
    loadHonors();
};

document.addEventListener('DOMContentLoaded', functor);
