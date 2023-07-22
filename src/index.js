import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="nelson.jpg" alt="Nelson Izah" />;
}

function Intro() {
  return (
    <div>
      <h1>Nelson Izah</h1>
      <p>
        Nelson is a dynamic technology enthusiast, a software developer, and an
        ardent volunteer with extensive experience in community development and
        youth empowerment.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="🔥" color="Blue" />
      <Skill skill="Data Science" emoji="🔥" color="Red" />
      <Skill skill="Laravel" emoji="🔥" color="Green" />
      <Skill skill="Python" emoji="🔥" color="Black" />
    </div>
  );
}

function Skill(props) {
  return (
    <div
      className="skill"
      style={{ backgroundColor: props.color, color: "white" }}
    >
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
