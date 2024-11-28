import React, { Component } from "react";  
import "./Educations.css";  
import DegreeCard from "../../components/degreeCard/DegreeCard.js";  
import CertificationCard from "../../components/certificationCard/CertificationCard.js";  
import { degrees, certifications, competitiveSites } from "../../portfolio";  
import { Fade } from "react-reveal";  

class Educations extends Component {  
  render() {  
    const theme = this.props.theme;  
    return (  
      <div className="main" id="educations">  
        {/* Degrees Section */}  
        <div className="educations-header-div">  
          <Fade bottom duration={2000} distance="20px">  
            <h1 className="educations-header" style={{ color: theme.text }}>  
              Degrees Received  
            </h1>  
          </Fade>  
        </div>  
        <div className="educations-body-div">  
          {degrees.degrees.map((degree, index) => {  
            return <DegreeCard key={index} degree={degree} theme={theme} />;  
          })}  
        </div>  

        {/* Competitive Sites Section */}  
        <div className="competitive-sites-header-div">  
          <Fade bottom duration={2000} distance="20px">  
            <h1 className="competitive-sites-header" style={{ color: theme.text }}>  
              Professional Profiles  
            </h1>  
          </Fade>  
        </div>  
        <div className="competitive-sites-body-div">  
          <ul className="dev-icons">  
            {competitiveSites.competitiveSites.map((site, index) => {  
              return (  
                <li className="competitive-site-inline" key={index}>  
                  <a  
                    href={site.profileLink}  
                    target="_blank"  
                    rel="noopener noreferrer"  
                  >  
                    <span  
                      className="iconify"  
                      data-icon={site.iconifyClassname}  
                      style={site.style}  
                    ></span>  
                  </a>  
                </li>  
              );  
            })}  
          </ul>  
        </div>  

        {/* Certifications Section */}  
        <div className="certifications-header-div">  
          <Fade bottom duration={2000} distance="20px">  
            <h1 className="certifications-header" style={{ color: theme.text }}>  
              Certifications  
            </h1>  
          </Fade>  
        </div>  
        <div className="certifications-body-div">  
          {certifications.certifications.map((cert, index) => {  
            return <CertificationCard key={index} certificate={cert} theme={theme} />;  
          })}  
        </div>  
      </div>  
    );  
  }  
}  

export default Educations;