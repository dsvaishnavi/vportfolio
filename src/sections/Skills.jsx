const skills = [
  {
    name: 'React.js',
    icon: '⚛️',
    description: 'Build responsive web apps.'
  },
  {
    name: 'Node.js',
    icon: '🌐',
    description: 'Server-side JS environment.'
  },
  {
    name: 'MongoDB',
    icon: '🍃',
    description: 'NoSQL database for documents.'
  },
  {
    name: 'Express.js',
    icon: '🚀',
    description: 'Backend framework for Node.'
  },
  // {
  //   name: 'MERN Stack',
  //   icon: '🧩',
  //   description: 'Full-stack web development.'
  // },
  {
    name: 'HTML',
    icon: '📄',
    description: 'Structure for web content.'
  },
  {
    name: 'CSS',
    icon: '🎨',
    description: 'Styling for modern websites.'
  },
  {
    name: 'Python',
    icon: '🐍',
    description: 'Backend and AI programming.'
  },
  {
    name: 'PHP',
    icon: '🐘',
    description: 'Scripting dynamic web apps.'
  },
  {
    name: 'SQL',
    icon: '🗄️',
    description: 'Manage relational databases.'
  },
  {
    name: 'Project Management',
    icon: '📊',
    description: 'Organize tasks and timelines.'
  },
  {
    name: 'Webflow',
    icon: '🕸️',
    description: 'No-code web designing tool.'
  },
  { 
    name: 'VPS Hosting', 
    icon: '💻', 
    description: 'Deploy apps on servers.' 
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-desc">{skill.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
