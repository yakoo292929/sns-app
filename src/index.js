/**
 * ===========================================================================================
 * SYSTEM NAME    : SNS-app
 * PROGRAM ID     : src/index.js
 * PROGRAM NAME   : index.js
 *                : 初期処理
 * DEVELOPED BY   : yamabakery
 * CREATE DATE    : 2024/11/01
 * CREATE AUTHOR  : yakoo292929
 * ===========================================================================================
**/

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {SessionProvider} from "./SessionProvider"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <SessionProvider>
    <App />
  </SessionProvider>

);

