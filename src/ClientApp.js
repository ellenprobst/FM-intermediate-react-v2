import React from "React";
import { hydrate } from "react-dom";
import App from "./App";

hydrate(<App />, document.getElementById("root"));

// note:   using babel-node for ease, there is a better way to do this, main function is to replace jsx since node can not read this
