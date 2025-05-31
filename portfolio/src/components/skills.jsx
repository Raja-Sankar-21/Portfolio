const Skills = () => (
  <section className="skills">
    <h2>Skills</h2>
    <div className="skills-grid">
      {["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Git, GitHub", "Figma, Adobe XD", "AWS Basics"].map(skill => (
        <div key={skill} className="skill-card">{skill}</div>
      ))}
    </div>
  </section>
);
export default Skills;