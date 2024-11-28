import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <div>
        <Main theme={chosenTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
