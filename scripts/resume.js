/**
 * Dynamically loads the objective section into the HTML document.
 */
function loadObjective() {
    const container = document.getElementById('objective-container');
    const objectiveText = `
        To utilize my logical rigor and high academic standing in a Software Engineering or Data Analysis co-op. I am focused on delivering functional MVPs through disciplined practice and robust architectural patterns like BCE.
    `;

    container.innerHTML = `
        <div class="bg-white">
            <p class="fst-italic mb-0">
                ${objectiveText.trim()}
            </p>
        </div>
    `;
}

/**
 * Dynamically loads the skills section into the HTML document.
 */
function loadSkills() {
    const skills = [
        {
            category: "Programming Languages",
            items: "C++, LaTeX, JavaScript, Python, Java, SQL"
        },
        {
            category: "Frameworks and Tools",
            items: "Handlebars, Node.js, Express.js, Git, Replit, SPSS, MATLAB, Qt Creator"
        },
        {
            category: "Concepts",
            items: "Memory Management, Systems Programming, IEEE 754 Floating-Point Arithmetic, Probability Theory, Mathematical Modeling"
        }
    ];

    const container = document.getElementById('technical-skills-container');
    if (!container) return;

    // Use a clean list-based layout to maintain the LaTeX 'noitemsep' feel
    container.innerHTML = skills.map(skill => `
        <div class="mb-4 border-start ps-3 border-primary">
            <h6 class="fs-5 fw-bold mb-1">${skill.category}</h6>
            <p class="fs-6 text-secondary mb-0">${skill.items}</p>
        </div>
    `).join('');
}

/**
 * Loads education details into the education section.
 */
function loadEducation() {
    const container = document.getElementById('education-container');
    if (!container) return;

    container.innerHTML = `
        <div class="p-3 bg-white border-start border-primary border-4 shadow-sm">
            <div class="d-flex justify-content-between align-items-center">
                <h5 class="fw-bold mb-0">Bachelor of Computer Science with Minor in Mathematics</h5>
                <span class="text-muted small">2021 - Present</span>
            </div>
            <p class="text-primary mt-1 mb-2">Carleton University</p>
            <p class="mb-1"><strong>CGPA: 9.34 / 12 (B+)</strong> | Fourth Year Standing</p>
            <p class="small"><em>Key Courses</em>: Object-Oriented Software Engineering (COMP 3004), Database Management Systems (COMP 3005), Discrete Structures, Abstract Data Types and Algorithms</p>    
        </div>
    `;
}


/**
 * Loads project details into the projects section
 * Featuring COMP 3005 and COMP 2404 coursework
 */
function loadProjects() {
    const projects = [
        {
            title: "Professional Portfolio (Web Development)",
            course: "Personal Hobby & Professional Development",
            date: "December 2024 - Present",
            details: `
                <ul>
                    <li>Engineered a responsive, high-performance personal portfolio using a modular JavaScript architecture to dynamically render academic and professional content.</li>
                    <li>Implemented a "Zero-AI Prose" logic-first design philosophy, prioritizing technical clarity and structured data representation over generic templates.</li>
                    <li>Optimized user navigation by developing custom scroll operations and a consolidated CSS framework for cross-device consistency.</li>
                </ul>
            `
        },
        {
            title: "Telecommunications Switching Database (SQL)",
            course: "Database Management Systems (COMP 3005)",
            date: "February 2026",
            details: "Executed complex relational queries and implemented hierarchical trunk routing logic using SQLite."
        },
        {
            title: "Distributed Version Control System (C++)",
            course: "Introduction to Software Engineering (COMP 2404)",
            date: "October 2024",
            details: "Developed a multi-tier metadata management system with zero memory leaks using linked structures."
        }
    ];

    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = projects.map(p => `
        <div class="mb-4 border-start ps-3 border-primary">
            <div class="d-flex justify-content-between">
                <strong class="text-dark">${p.title}</strong>
                <span class="text-muted small">${p.date}</span>
            </div>
            <p class="text-primary mb-1 small">${p.course}</p>
            <p class="text-secondary small mb-0">${p.details}</p>
        </div>
    `).join('');
}

/**
 * Loads work experience details into the experience section.
 */
/**
 * Loads work experience details with SAR-formatted bullet points.
 */
function loadExperience() {
    const container = document.getElementById('experience-container');
    if (!container) return;

    const experiences = [
        {
            title: "Assistant Grader",
            company: "Kumon North America",
            date: "2024 - Present",
            details: `
            <ul>
                <li>Optimized student learning outcomes by meticulously grading and observing precise class work to ensure 100% accuracy in error correction.</li>
                <li>Enhanced operational efficiency by managing worksheet logistics through the Kumon Connect platform, facilitating a seamless transition between physical and digital learning materials.</li>
                <li>Supported instructional quality by providing data-driven feedback on student behavior and performance metrics to tailor individualized learning plans.</li>
            </ul>
            `
        },
        {
            title: "Restaurant Team Member",
            company: "Pizza Pizza Ltd.",
            date: "2021 - Present",
            details: `
            <ul>
                <li>Maintained high service standards in a high-volume environment by managing rapid sales transactions while consistently achieving positive customer satisfaction ratings.</li>
                <li>Ensured total regulatory compliance by verifying kitchen setup protocols and rigorous food safety standards, mitigating operational risks during peak hours.</li>
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
            <p class="text-primary mb-1">${exp.company}</p>
            <div class="text-secondary small">${exp.details}</div>
        </div>
    `).join('');
}

/**
 * Loads details regarding volunteering into the volunteer experience section.
 */
function loadVolunteerExperience() {
    const volunteerExperience = [
        {
            role: "Volunteer Notetaker",
            org: "Paul Menton Centre at Carleton University",
            date: "May 2024 - April 2025",
            desc: "Provided detailed technical notes for students with disabilities to support their learning."
        },
        {
            role: "Volunteer",
            org: "Ausome Ottawa",
            date: "November 2019 - June 2023",
            desc: "Assisted children with autism spectrum disorder (ASD) in physical activities including soccer and yoga."
        }
    ];

    const container = document.getElementById('volunteering-container');
    if (!container) return;

    container.innerHTML = volunteerExperience.map(v => `
        <div class="mb-4 border-start ps-3 border-primary">
            <div class="d-flex justify-content-between">
                <strong class="text-dark">${v.role}</strong>
                <span class="text-muted small">${v.date}</span>
            </div>
            <p class="text-primary mb-1 small">${v.org}</p>
            <p class="text-secondary small mb-0">${v.desc}</p>
        </div>
    `).join('');
}

var functor = () => {
    loadObjective();
    loadSkills();
    loadEducation();
    loadExperience();
    loadVolunteerExperience();
    loadProjects();
}

document.addEventListener('DOMContentLoaded', functor);