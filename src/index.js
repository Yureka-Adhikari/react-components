import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
class Student extends React.Component {
  render() {
    return <h2> Hi, my name is Yureka.</h2>;
  }
}
function FuncStudent() {
  return <h2> Hi, I am being called by a function, FuncStudent </h2>;
}

root.render(
  <>
    <Student />
    <FuncStudent />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
