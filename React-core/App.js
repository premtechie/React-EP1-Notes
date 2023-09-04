import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("h1", { className: "root-div" }, [
  React.createElement("div", { className: "children1" }, "children1"),
  React.createElement("div", { className: "children2" }, "children2"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
