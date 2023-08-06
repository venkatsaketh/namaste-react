import React from "react";
import ReactDOM from "react-dom/client";

// const heading =  React.createElement("h1",{id:"heading"},"Hello World from React!");

// const parent = React.createElement(
//     "div", { id: "parent" },
//     React.createElement(
//         "div", { id: "child" },
//         [React.createElement("h1", {}, "Im h1"), React.createElement("h2", {}, "Iam h2")]
//     ))

//JSX- Babel(JS compiler) converts JSX to react element
const jsxHeading = (
  <div>
    <h1>namaste react using jsx 🚀</h1>
  </div>
);

const Title = () => (
    <div>
      <h1>namaste react using jsx 🔥</h1>
    </div>
  );
const number = 1000;
//React functional component
const HeadingComponent = () => (
  <div>
    {jsxHeading}{/* jsx element */}
    <Title/>
    <h1>React function component {number}</h1>
    <h3>{100 + 200}</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);