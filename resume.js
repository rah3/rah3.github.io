// script.js
// JavaScript code to dynamically load all resume sections

/**
 * Dynamically loads skills, education, and experience sections
 * into the HTML document.
 */
function loadSkills() {
    const skills = [
        { category: "Languages (Technical Skills)", items: "C++, JavaScript, Python, Java" },
        { category: "Tools", items: "Node.js, SPSS, MATLAB, Markdown" },
        { category: "Soft Skills", items: "Accountability, Flexibility, Organization, Willingness to learn and grow, Teamwork, Communication Skills, Listening Skills, Time Management" },
    ];

    const skillsContainer = document.getElementById('skills-container');

    skills.forEach(skill => {
        const col = document.createElement('div');
        col.className = 'col-md-5 mb-3';
        col.innerHTML = `
        <div class="card h-100 shadow-sm">
            <div class="card-body">
                <h5 class="card-title text-primary">${skill.category}</h5>
                <p class="card-text">${skill.items}</p>
            </div>
        </div>
    `;
        skillsContainer.appendChild(col);
    });
}

/**
 * Loads education details into the education section.
 */
function loadEducation() {
    const education = [
        {
            degree: "Bachelor of Computer Science Major with Minor in Mathematics",
            institution: "Carleton University",
            details:
                `
                <ul>
                    <li>Relevant Courses (optional): Discrete Structures I/II, Introduction to Statistical Modelling, Abstract Data Types and Algorithms, Introduction to Software Engineering, Elementary Calclulus I/II, Linear Algebra for Science and Engineering</li>
                    <li>Average CGPA - 9.26/12 (B+)</li>
                </ul>
            `,
            duration: "September 2021 - Present"
        }
    ];

    const educationContainer = document.getElementById('education');

    education.forEach(edu => {
        const div = document.createElement('div');
        div.className = 'mb-4 border-start ps-3 border-primary';
        div.innerHTML = `
        <h4>${edu.degree}</h4>
        <p class="text-secondary">${edu.institution}</p>
        <p><em>${edu.duration}</em></p>
        <p>${edu.details}</p>
    `;
        educationContainer.appendChild(div);
    });
}

/**
 * Loads work experience details into the experience section.
 */
function loadExperience() {
    const workExperience = [
        {
            title: "Assistant Grader",
            company: "Kumon North America Inc.",
            details: `
                <ul>
                    <li>Checked, graded, and observed students' work both using the Class Navi platform and on paper.</li>
                    Arranged worksheets in a physical and digital manner on Class Navi (Kumon Connect platform).
                    <li>Ensured that students completed their assignments fully correcting both on the worksheet and on Class Navi.</li>
                    <li>Helped and guided students when Center Policies and Kumon Method standards are applicable.</li>
                    <li>Updated the instructor with verbal or written feedback concerning student behavior or worksheet performance as deemed necessary.</li>
                </ul>
            `,
            duration: "July 2024-Present, August 2019-April 2021"
        },
        {
            title: "Restaurant Team Member",
            company: "Pizza Pizza Ltd.",
            details: `
            <ul>
                <li>Interacted with customers in making sales transactions in a fast-paced environment</li>
                <li>Verified the methods, processes, and standards for kitchen setup</li>
                <li>Asked open-ended questions that could enhance feedback on customer satisfaction</li>
            </ul>
            `,
            duration: "August 2021-Present"
        },
        {
            title: "Assistant Coder Coach",
            company: "CoderSports Academy Inc.",
            details: `
            <ul>
                <li>Discussed with some parents face-to-face about the skills offered at the academy to their children.</li>
                <li>Observed the manager several times while writing code for a certain project</li>
                <li>Learned how to write game project instructions in the Markdown language through the Replit web application.</li>
                <li>Worked with other teammates to meet the deadlines of projects.</li>
            </ul>
            `,
            duration: "July 2022-August 2022"
        }
    ];

    const experienceContainer = document.getElementById('experience');

    workExperience.forEach(job => {
        const div = document.createElement('div');
        div.className = 'mb-4 border-start ps-3 border-primary';
        div.innerHTML = `
        <h4>${job.title}</h4>
        <p class="text-secondary">${job.company}</p>
        <p><em>${job.duration}</em></p>
        <p>${job.details}</p>
    `;
        experienceContainer.appendChild(div);
    });
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
        div.className = 'mb-4 border-start ps-3 border-primary';
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
        },
        {
            title: "Philosophy API Based Dynamic Web Application",
            location: "Foundations of Web Applications, School of Computer Science, Carleton University, Ottawa, Ontario",
            duration: "April 2024",
            details:
                `
                    <ul>
                        <li>Reviewed the API that would best suit the needs for the proposed project</li>
                        <li>Designed and implemented the design for the dynamic web application using Node.js framework and Handlebars, through which users composed and viewed blog entries</li>
                        <li>Resolved issues that arose through thorough code testing and debugging</li>
                    </ul>
                `,
        }
    ];

    const projectsContainer = document.getElementById("projects");

    projects.forEach((project) => {
        const div = document.createElement('div');
        div.className = 'mb-4 border-start ps-3 border-primary';
        div.innerHTML = `
        <h4>${project.title}</h4>
        <p class="text-secondary">${project.location}</p>
        <p><em>${project.duration}</em></p>
        <p>${project.details}</p>
    `;
        projectsContainer.appendChild(div);
    });
}

// Function calls to load content
loadSkills();
loadEducation();
loadExperience();
loadVolunteerExperience();
loadProjects();