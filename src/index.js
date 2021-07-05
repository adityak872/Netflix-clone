import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";

const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/main" component={App} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
