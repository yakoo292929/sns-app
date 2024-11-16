/**
 * ===========================================================================================
 * SYSTEM NAME    : SNS-app
 * PROGRAM ID     : src/pages/SideMenu.js
 * PROGRAM NAME   : SideMenu.js
 *                : SideMenuコンポーネント
 * DEVELOPED BY   : yamabakery
 * CREATE DATE    : 2024/11/01
 * CREATE AUTHOR  : yakoo292929
 * ===========================================================================================
**/

import { useContext } from "react";
import { SessionContext } from "../SessionProvider";


////////////////////////////////////////////////////////////////////////
// SideMenu
////////////////////////////////////////////////////////////////////////
export function SideMenu() {

  //-----------------------------------------//
  // useContext：コンポーネント共有
  //-----------------------------------------//
  const { currentUser } = useContext(SessionContext);


  /////////////////////////////////////////////
  // 画面表示
  /////////////////////////////////////////////
  return (

    <div className="bg-white p-4 rounded-lg shadow-md h-[200px] flex flex-col justify-center">
      <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
      <p>
        <strong>Name:</strong> {currentUser.userName}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
    </div>

  );

}
