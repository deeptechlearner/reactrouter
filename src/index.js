import React from "react";
import "./index.css"; 
import Main from "./Main";
import { createRoot } from 'react-dom/client';

const container = document.getElementById("root");
const root = createRoot(container);
 
root.render(
  <Main/>,
);