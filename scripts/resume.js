// resume.js
// JavaScript code to dynamically load all resume sections



/**
 * Dynamically loads the objective section into the HTML document.
 */
function loadObjective() {
    // This text should be concise and professional
    const container = document.getElementById('objective-container');
    const objectiveText = `
        To find a position that will afford the opportunity to utilize my present skills while at the same time provide an equally good experience. I am willing to accept any kind of responsibility to further enhance my career along with new challenges and broadened views.
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
        { category: "Technical Skills", items: "C++, JavaScript, Python, Java" },
        { category: "Tools", items: "Node.js, SPSS, MATLAB, Markdown" },
        { category: "Soft Skills", items: "Accountability, Flexibility, Organization, Teamwork" }
    ];

    const container = document.getElementById('skills-container');
    if (!container) return;

    // We use col-12 here so they stack within the left-hand column
    container.innerHTML = skills.map(skill => `
        <div class="container">
            <div class="col-12 mb-3">
                <div class="card shadow-sm border-0 bg-light">
                    <div class="card-body">
                        <h6 class="fw-bold text-primary">${skill.category}</h6>
                        <p class="small mb-0">${skill.items}</p>
                    </div>
                </div>
            </div>
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
                <span class=""text-muted small"">2021 - Present</span>
            </div>
            <p class="text-primary mt-1 mb-2">Carleton University</p>
            <p class="mb-1"><strong>CGPA: 9.26 / 12 (B+)</strong></p>
            <p class="small"><em>Relevant Courses (optional)</em>: Discrete Structures I/II, Introduction to Statistical Modeling, Abstract Data Types and Algorithms, Introduction to Software Engineering and Elementary Calculus I/II</p>    
        </div>
    `;
}

/**
 * Loads work experience details into the experience section.
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
                <li>Checked, graded, and observed the students doing very precise class work and corrections</li>
                <li>Arranged worksheets in a physical and digital manner on Class Navi (Kumon Connect platform).</li>
                <li>Ensured that students completed their assignments fully correcting both on the worksheet and on Class Navi.</li>
                <li>Helped and guided students when Center Policies and Kumon Method standards are applicable.</li>
                <li>Updated the instructor with verbal or written feedback concerning student behavior or worksheet performance as deemed necessary.</li>
            </ul>
            `
        },
        {
            title: "Restaurant Team Member",
            company: "Pizza Pizza Ltd.",
            date: "2021 - Present",
            details: `
            <ul>
                <li>Interacted with customers in making sales transactions in a fast-paced environment</li>
                <li>Verified the methods, processes, and standards for kitchen setup</li>
                <li>Asked open-ended questions that could enhance feedback on customer satisfaction</li>
            </ul>
            `
        },
        {
            title: "Assistant Coder Coach",
            company: "Codersports Academy Inc.",
            date: "July-August 2022",
            details: `
                <ul>
                    <li>Discussed with some parents face-to-face about the skills offered at the academy to their children.</li>
                    <li>Observed students several times when they were writing code for a certain project.</li>
                    <li>Learned how to write game project instructions in the Markdown language through the Replit web application.</li>
                    <li>Worked with others to meet the deadlines of projects.</li>
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
            <p class="text-primary">${exp.company}</p>
            <p class="text-secondary">${exp.details}</p>
        </div>
    `).join('');
}

/**
 * Loads details regarding volunteering into the volunteer experience section.
 */
function loadVolunteerExperience() {
    const volunteerExperience = [
        {
            title: "Volunteer Notetaker",
            organization: "Paul Menton Centre at Carleton University, Ottawa, Ontario",
            details: "Provided detailed notes for students with disabilities to support their learning.",
            duration: "May 2024-August 2024, January 2025-April 2025"
        },
        {
            title: "Youth Ambassador",
            organization: "Wishing Star Project, Ottawa, Ontario",
            details: "Assisted in organizing and promoting events to raise awareness and funds for children with disabilities such as autism spectrum disorder (ASD) and down syndrome.",
            duration: "November 2019-December 2020"
        },
        {
            title: "Volunteer",
            organization: "Ausome Ottawa, Ottawa, Ontario",
            details: "Assisted children with autism spectrum disorder (ASD) in various physical activities like soccer and yoga.",
            duration: "November 2019-June 2023"
        }
    ];

    const volunteeringContainer = document.getElementById('volunteering');

    volunteerExperience.forEach(volunteer => {
        const div = document.createElement('div');
        div.className = 'mb-4';
        div.innerHTML = `
            <h4>${volunteer.title}</h4>
            <p class="text-secondary">${volunteer.organization}</p>
            <p><em>${volunteer.duration}</em></p>
            <p>${volunteer.details}</p>
    `;
        volunteeringContainer.appendChild(div);
    });
}

/**
 * Loads project details into the projects section
 */
function loadProjects() {
    const projects = [
        {
            title: "Philosophy API Based Dynamic Web Application",
            location: "Foundations of Web Applications, School of Computer Science, Carleton University, Ottawa, Ontario",
            duration: "April 2024",
            details:
                `
                    <ul>
                        <li>Reviewed the API that would best suit the needs for the proposed project</li>
                        <li>Designed and implemented the dynamic web application using Node.js framework and Handlebars, through which users composed and viewed blog entries</li>
                        <li>Resolved issues that arose through thorough code testing and debugging</li>
                    </ul>
                `,
        },
        {
            title: "Modern Book Review: on Pathogenesis: A History of the World in Eight Plagues",
            location: "Department of Technology, Society and Environmental Studies, College of the Humanities,  Carleton University, Ottawa, Ontario",
            duration: "July 2024",
            details:
                `
                    <ul>
                        <li>Collected relevant materials and terms from multiple sources to try to consider the subject from different angles</li>
                        <li>Analyzed research findings to comprehend the interrelating and sometimes conflicting complex and abstract concepts</li>
                        <li>Prepared synthesis, clear, well-structured, and analytical papers derived from the collected information and the conclusions reached</li>
                    </ul>
                `,
        }
    ];

    const projectsContainer = document.getElementById("projects");

    projects.forEach((project) => {
        const div = document.createElement('div');
        div.className = 'mb-4';
        div.innerHTML = `
        <h4>${project.title}</h4>
        <p class="text-secondary">${project.location}</p>
        <p><em>${project.duration}</em></p>
        <p>${project.details}</p>
    `;
        projectsContainer.appendChild(div);
    });
}

// Function calls to load contents of resume
document.addEventListener('DOMContentLoaded', () => {
    loadObjective();
    loadSkills();
    loadEducation();
    loadExperience();
    loadVolunteerExperience();
    loadProjects();
});