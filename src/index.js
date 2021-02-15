import React from "react";
import ReactDOM from "react-dom";

import SimpleComponent from "./components/SimpleComponent";
import SimplerComponent from "./components/SimplerComponent";

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={() => (thisDiv.style.color = "blue")} />
  </div>,
  document.getElementById("root")
);
let thisDiv = document.getElementById("superSimple");
