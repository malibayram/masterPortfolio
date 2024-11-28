import React, { Component } from "react";  
import "./Experience.css";  
import ExperienceAccordion from "./ExperienceAccordion";  // Yolu değiştirdik  
import { experience } from "../../portfolio";  
import { Fade } from "react-reveal";  

class Experience extends Component {  
  render() {  
    const theme = this.props.theme;  
    return (  
      <div className="experience-main" id="experience">  
        <div className="basic-experience">  
          <Fade bottom duration={2000} distance="40px">  
            <div className="experience-heading-div">  
              <div className="experience-heading-img-div">  
                <img  
                  src={require(`../../assets/images/${experience["header_image_path"]}`)}  
                  alt="Experience Header"  
                  className="experience-heading-img"  
                />  
              </div>  
              <div className="experience-heading-text-div">  
                <h1 className="experience-heading-text" style={{ color: theme.text }}>  
                  {experience.title}  
                </h1>  
                <h3 className="experience-heading-sub-text" style={{ color: theme.secondaryText }}>  
                  {experience.subtitle}  
                </h3>  
                <p className="experience-header-detail-text" style={{ color: theme.text }}>  
                  {experience.description}  
                </p>  
              </div>  
            </div>  
          </Fade>  
        </div>  
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />  
      </div>  
    );  
  }  
}  

export default Experience;
