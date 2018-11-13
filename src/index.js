import React from "react";
import ReactDOM from "react-dom";
import Activity from "./activity.js";
import Typography from "@material-ui/core/Typography";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Typography
        color="primary"
        className="header"
        variant="h3"
        component="h2"
      >
        Welcome to the Hour of Code!
      </Typography>
      <br />
      <Activity className="activity" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
