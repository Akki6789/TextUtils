import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleModeHandler = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#9CA3AF";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar
        title="Textutils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleModeHandler}
      />

      <Alert alert={alert} />

      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>

          <Route exact path="/">
            <TextForm
              heading="Enter the text to analyse"
              mode={mode}
              showAlert={showAlert}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;