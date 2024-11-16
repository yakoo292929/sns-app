/**
 * ===========================================================================================
 * SYSTEM NAME    : SNS-app
 * PROGRAM ID     : src/App.js
 * PROGRAM NAME   : App.js
 *                : アプリケーション全てのページで必要な処理
 * DEVELOPED BY   : yamabakery
 * CREATE DATE    : 2024/11/01
 * CREATE AUTHOR  : yakoo292929
 * ===========================================================================================
**/

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

////////////////////////////////////////////////////////////////////////
// App
////////////////////////////////////////////////////////////////////////
function App() {

  /////////////////////////////////////////////
  // 画面表示
  /////////////////////////////////////////////
  return (

    <BrowserRouter>

      <div className="App">
         <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
         </div>

      </div>

    </BrowserRouter>

  );

}

export default App;
