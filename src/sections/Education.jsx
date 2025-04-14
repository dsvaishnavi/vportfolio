
const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "Mumbai University",
      duration: "2022 - 2026",
      description:
        "Currently pursuing my degree with a focus on software development, algorithms, and system design.",
    },
    {
      degree: "Higher Secondary Education",
      institution: "DY Patil College, Navi Mumbai",
      duration: "2020 - 2022",
      description:
        "Completed my 11th and 12th grade with Computer Science as my main subject.",
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="card-icon">🎓</div>
              <div className="card-content">
                <h3 className="degree">{edu.degree}</h3>
                <h4 className="institution">{edu.institution}</h4>
                <p className="duration">{edu.duration}</p>
                <p className="description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;