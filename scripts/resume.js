// resume.js - Single source of truth for resume data
// Mirrors RD_FSWEP_2026_Resume.pdf exactly - structured pipelines, data integrity

const resumeData = {
    objective: `I am a fourth-year Computer Science student applying through FSWEP and EOSD, focused on software engineering, database systems, and data integrity. Interested in roles supporting public safety, regulatory systems, IT operations, and scientific informatics. Strong preference for structured workflows, clear documentation, and remote or asynchronous environments.`,

    education: {
        school: "Carleton University",
        location: "Ottawa, Ontario",
        degree: "Bachelor of Computer Science (BCS), Minor in Mathematics",
        graduation: "Expected Graduation: 2027",
        coursework: "Database Management Systems, Web Applications, Software Engineering, Data Structures, Linear Algebra, Calculus."
    },

    skills: [
        { label: "Languages", value: "Python, SQL, C++, C, Java, JavaScript, HTML/CSS, MATLAB, LaTeX" },
        { label: "Backend & Systems", value: "Relational Database Design, ETL Pipelines, REST APIs, Linux/Unix" },
        { label: "Frontend & UI", value: "Modular JavaScript, Responsive Layouts, CSS Architecture" },
        { label: "Data & Analytics", value: "Data Modeling, Data Integrity, Structured Pipelines" },
        { label: "Developer Tools", value: "Git/GitHub, VS Code, Node.js, Bash, TeXstudio" },
        { label: "Regulatory Alignment", value: "Documentation accuracy, standardized evaluation, compliance-focused workflows with AI assistance" }
    ],

    experience: [
        {
            company: "Kumon North America, Inc.",
            location: "Stittsville, Ontario",
            title: "Center Assistant and Grader",
            date: "Aug 2024 – Present",
            bullets: [
                "Supported a large cohort requiring accurate academic evaluation, applied standardized rubrics, resulted in consistent and reliable performance tracking.",
                "Assisted students with varying reading proficiency, delivered structured oral assessments, resulted in measurable improvements in comprehension and fluency.",
                "Worked within a standardized instructional framework, provided individualized guidance, resulted in stronger self-directed learning outcomes.",
                "Observed diverse learning patterns, documented detailed performance notes, resulted in targeted curriculum adjustments by instructors."
            ]
        },
        {
            company: "Pizza Pizza Limited",
            location: "Smiths Falls, Ontario",
            title: "Restaurant Worker",
            date: "Aug 2021 – Present",
            bullets: [
                "Worked in a fast-paced service environment, applied strict procedural and safety standards, resulted in consistently accurate order preparation and compliance with food-safety requirements.",
                "Managed high-volume customer periods, executed rapid and precise workflows, resulted in reduced wait times and improved customer satisfaction.",
                "Operated within a team-based environment, coordinated inventory and workspace organization, resulted in smoother daily operations and minimized workflow disruptions."
            ]
        },
        {
            company: "Coder Sports Academy",
            location: "Kanata, Ontario",
            title: "Assistant Coder Coach",
            date: "Jul 2022 – Aug 2022",
            bullets: [
                "Supported onboarding for youth coding programs, communicated program details to parents, resulted in clearer expectations and improved engagement.",
                "Maintained a safe and organized learning environment, performed administrative and facility tasks, resulted in smooth daily operations.",
                "Participated in team-based instructional initiatives, collaborated on group teaching activities, resulted in strengthened program delivery and alignment with organizational goals."
            ]
        },
        {
            company: "Kumon North America, Inc.",
            location: "Nepean, Ontario",
            title: "Center Assistant Grader",
            date: "Aug 2018 – Jun 2020",
            bullets: [
                "Managed high assignment volumes requiring standardized grading, applied strict marking guidelines, resulted in consistent academic standards across the center.",
                "Required accurate student progress tracking, recorded daily performance metrics, resulted in reliable data for monitoring academic growth.",
                "Supported peak operational periods, maintained organized grading workflows, resulted in reduced turnaround times and improved center efficiency.",
                "Identified students experiencing academic challenges, escalated concerns to instructors, resulted in timely intervention and improved learning outcomes."
            ]
        }
    ],

    projects: [
        {
            name: "Telecommunications Switching Database",
            date: "Jan 2026 – Feb 2026",
            sub: "COMP 3005: Database Management Systems, School of Computer Science, Carleton University",
            bullets: [
                "Addressed complex telecommunications routing requirements, designed a relational database with hierarchical trunk preferences, resulted in accurate modeling of call-termination logic.",
                "Required precise mapping of dialed digits, executed SQL queries using directory number and area code matching, resulted in reliable routing outputs aligned with telecom standards.",
                "Encountered disparate data sources, engineered an idempotent SQLite assembly script, resulted in consistent and integrity-preserving data consolidation."
            ]
        },
        {
            name: "Professional Software Portfolio",
            date: "Dec 2025 – Present",
            sub: "Independent Project",
            bullets: [
                "Built a responsive personal portfolio, implemented modular JavaScript and unified CSS architecture, resulted in deterministic content generation across devices.",
                "Applied a logic-first design philosophy, emphasized structural clarity and documentation, resulted in improved maintainability and readability.",
                "Enhanced navigation performance, implemented custom scroll operations and modular layout, resulted in a smoother user experience and faster responsiveness."
            ]
        }
    ],

    awards: [
        { title: "Deans' Honour List", date: "(2023-2024)", desc: "Achieved an average of 80%+." },
        { title: "Grade 11 Honour Society Award", date: "(2021)", desc: "Achieved an average of 80%+ across Grades 9–11." },
        { title: "Grade 10 Honour Society", date: "(2020)", desc: "Achieved an average of 80%+ across Grades 9–11." },
        { title: "Mathematics Silver Award", date: "(2018)", desc: "Earned the K-Level Kumon Math Certificate, reaching an advanced national ranking." }
    ]
};

function el(tag, className, html) {
    const e = document.createElement(tag);
    if (className) e.className = className;
    if (html) e.innerHTML = html;
    return e;
}

export function renderResume(rootId) {
    const root = document.getElementById(rootId);
    if (!root) return;

    root.innerHTML = "";

    // Objective is rendered in home.js, but also duplicate here for resume-only view
    const eduSec = el('div','resume-section');
    eduSec.id = 'section-education';
    eduSec.innerHTML = `
        <h2 class="resume-section-header">Objective</h2>
        <div class="resume-body"><p class="objective-text">${resumeData.objective}</p></div>
        <div style="height:28px"></div>
        <h2 class="resume-section-header">Education</h2>
        <div class="resume-body">
            <div class="edu-block">
                <div class="edu-top"><span>${resumeData.education.school}</span><span>${resumeData.education.location}</span></div>
                <div class="edu-degree"><span><em>${resumeData.education.degree}</em></span><span>${resumeData.education.graduation}</span></div>
                <div class="edu-coursework"><strong>Relevant Coursework:</strong> ${resumeData.education.coursework}</div>
            </div>
        </div>
    `;
    root.appendChild(eduSec);

    // Skills
    const skillsSec = el('div','resume-section');
    skillsSec.id = 'section-skills';
    skillsSec.innerHTML = `
        <h2 class="resume-section-header">Technical Skills</h2>
        <div class="resume-body">
            <ul class="skills-list">
                ${resumeData.skills.map(s => `<li><strong>${s.label}:</strong> ${s.value}</li>`).join('')}
            </ul>
        </div>
    `;
    root.appendChild(skillsSec);

    // Experience
    const expSec = el('div','resume-section');
    expSec.id = 'section-experience';
    expSec.innerHTML = `
        <h2 class="resume-section-header">Experience</h2>
        <div class="resume-body">
            ${resumeData.experience.map(job => `
                <div class="entry">
                    <div class="entry-header"><span>${job.company}</span><span>${job.location}</span></div>
                    <div class="entry-subheader"><span>${job.title}</span><span>${job.date}</span></div>
                    <ul>${job.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
                </div>
            `).join('')}
        </div>
    `;
    root.appendChild(expSec);

    // Projects
    const projSec = el('div','resume-section');
    projSec.id = 'section-projects';
    projSec.innerHTML = `
        <h2 class="resume-section-header">Projects</h2>
        <div class="resume-body">
            ${resumeData.projects.map(p => `
                <div class="entry">
                    <div class="entry-header"><span>${p.name}</span><span>${p.date}</span></div>
                    <div class="entry-subheader"><span>${p.sub}</span><span></span></div>
                    <ul>${p.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
                </div>
            `).join('')}
        </div>
    `;
    root.appendChild(projSec);

    // Awards
    const awardsSec = el('div','resume-section');
    awardsSec.id = 'section-awards';
    awardsSec.innerHTML = `
        <h2 class="resume-section-header">Honors & Awards</h2>
        <div class="resume-body">
            <ul class="awards-list">
                ${resumeData.awards.map(a => `<li><strong>${a.title}</strong> ${a.date} – ${a.desc}</li>`).join('')}
            </ul>
        </div>
    `;
    root.appendChild(awardsSec);
}
