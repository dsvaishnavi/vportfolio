

const Projects = () => {
  const projects = [
    {
      title: "Cafe Management System",
      description:
        "Desktop app using Python Tkinter for managing cafe operations like inventory and billing.",
      technologies: ["Python", "Tkinter", "SQLite"],
      githubLink: "https://github.com/dsvaishnavi/final-cafemanagement.git",
      hostedLink: null,
    },
    {   
      title: "Todo List App",
      description:
        "A responsive task manager built with React.js with add, delete, and mark features.",
      technologies: ["React", "JavaScript", "CSS"],
      githubLink: "https://github.com/dsvaishnavi/To-do_react.git",
      hostedLink: "https://todolisthaibhai.netlify.app/",
    },
    {
      title: "Flipkart Clone",
      description:
        "Full-stack e-commerce web app built using MERN stack with cart, login, and search features.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/dsvaishnavi/Flipkartclone.git",
      hostedLink: null,
    },
    {
      title: "Data Structures in Python",
      description:
        "A GitHub repo of Python-based data structures with explanations and code examples.",
      technologies: ["Python", "Algorithms"],
      githubLink: 'https://github.com/dsvaishnavi/DSA.git',
      hostedLink: null,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-name">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="project-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubLink} className="btn primary" target="_blank">GitHub</a>
                {project.hostedLink && (
                  <a href={project.hostedLink} className="btn secondary" target="_blank">Live Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
