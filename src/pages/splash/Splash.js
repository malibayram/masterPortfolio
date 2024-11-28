import React from "react";  
import "./Splash.css";  
import LoaderLogo from "../../components/Loader/LoaderLogo.js";  
import { Redirect } from "react-router-dom";  

class Splash extends React.Component {  
  constructor(props) {  
    super(props);  
    this.state = {  
      redirect: false  
    };  
  }  

  componentDidMount() {  
    if (!sessionStorage.getItem("splashShown")) {  
      sessionStorage.setItem("splashShown", "true");  
      this.splashTimeout = setTimeout(() => {  
        this.setState({ redirect: true });  
      }, 5500);  
    } else {  
      this.setState({ redirect: true });  
    }  
  }  

  componentWillUnmount() {  
    if (this.splashTimeout) {  
      clearTimeout(this.splashTimeout);  
    }  
  }  

  render() {  
    if (this.state.redirect) {  
      return <Redirect to="/home" />;  
    }  

    return (  
      <div className="logo_wrapper">  
        <div   
          className="screen"   
          style={{ backgroundColor: this.props.theme.splashBg }}  
        >  
          <LoaderLogo id="logo" theme={this.props.theme} />  
        </div>  
      </div>  
    );  
  }  
}  

export default Splash;