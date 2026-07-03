import { createContext } from "react";

export const SkillsContext = createContext();

const SkillsProvider = ({ children }) => {
  const skills = [
    { name: "HTML", percentage: 80 },
    { name: "CSS", percentage: 80 },
    { name: "Bootstrap", percentage: 70 },
    { name: "Javascript", percentage: 50 },
  ];

  return (
    <div>
      <SkillsContext.Provider value={{ skills }}>
        {children}
      </SkillsContext.Provider>
    </div>
  );
};

export default SkillsProvider;
