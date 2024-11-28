import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";
import { skills } from "../../portfolio"; // Bu satırı ekleyin

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            {skills.title || "What I Do?"} {/* Bu satırı güncelleyin */}
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} skills={skills} />{" "}
      {/* skills prop'unu ekleyin */}
    </div>
  );
}
