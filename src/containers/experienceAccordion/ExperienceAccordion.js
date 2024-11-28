// ExperienceAccordion.js
import React from "react";
import "./ExperienceAccordion.css";
import { experience } from "../../portfolio";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";

function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <div className="experience-accord">
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        <Accordion onChange={({ expanded }) => console.log(expanded)}>
          {experience.experiences.map((exp, i) => (
            <Panel
              className="accord-panel"
              title={exp.title}
              key={i}
              overrides={{
                Header: {
                  style: () => ({
                    backgroundColor: `${exp.color_code}`,
                    color: "white",
                    borderRadius: "8px",
                    marginBottom: "10px",
                    padding: "10px",
                  }),
                },
                Content: {
                  style: () => ({
                    backgroundColor:
                      props.theme.name === "dark" ? "#333" : "white",
                    color: props.theme.name === "dark" ? "white" : "black",
                    padding: "20px",
                  }),
                },
              }}
            >
              <div className="accord-content">
                <img
                  className="accord-image"
                  src={`/images/${exp.logo_path}`}
                  alt={exp.alt_name}
                />
                <div className="accord-details">
                  <h5 className="accord-subtitle">{exp.subtitle}</h5>
                  <p className="accord-description">{exp.description}</p>
                  {exp.certificate_link && (
                    <a
                      href={exp.certificate_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="accord-link"
                    >
                      See More
                    </a>
                  )}
                </div>
              </div>
            </Panel>
          ))}
        </Accordion>
      </ThemeProvider>
    </div>
  );
}

export default ExperienceAccordion;
