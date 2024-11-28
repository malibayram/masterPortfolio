import React from "react";  
import { Route, Switch, HashRouter, Redirect } from "react-router-dom";  
import Home from "../pages/home/HomeComponent";  
import Splash from "../pages/splash/Splash";  
import Education from "../pages/education/EducationComponent";  
import Experience from "../pages/experience/Experience";  
import Opensource from "../pages/opensource/Opensource";  
import Contact from "../pages/contact/ContactComponent";  
import Projects from "../pages/projects/Projects";  
import Error404 from "../pages/errors/error404/Error";  

export default function Main(props) {  
  return (  
    <HashRouter>  
      <Switch>  
        <Route  
          exact  
          path="/"  
          render={(routeProps) => <Splash {...routeProps} theme={props.theme} />}  
        />  
        <Route  
          exact  
          path="/home"  
          render={(routeProps) => <Home {...routeProps} theme={props.theme} />}  
        />  
        <Route  
          exact  
          path="/experience"  
          render={(routeProps) => (  
            <Experience {...routeProps} theme={props.theme} />  
          )}  
        />  
        <Route  
          exact  
          path="/education"  
          render={(routeProps) => (  
            <Education {...routeProps} theme={props.theme} />  
          )}  
        />  
        <Route  
          exact  
          path="/opensource"  
          render={(routeProps) => (  
            <Opensource {...routeProps} theme={props.theme} />  
          )}  
        />  
        <Route  
          exact  
          path="/contact"  
          render={(routeProps) => <Contact {...routeProps} theme={props.theme} />}  
        />  
        <Route  
          exact  
          path="/projects"  
          render={(routeProps) => <Projects {...routeProps} theme={props.theme} />}  
        />  
        <Route  
          path="*"  
          render={(routeProps) => <Error404 {...routeProps} theme={props.theme} />}  
        />  
      </Switch>  
    </HashRouter>  
  );  
}