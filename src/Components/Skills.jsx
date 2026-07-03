import { useContext } from "react";
import { SkillsContext } from "../Context/SkillsContext";
import "./Skills.css";

function Skills() {
  const { skills } = useContext(SkillsContext);

  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h4>{skill.name}</h4>
            <progress value={skill.percentage} max="100" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
