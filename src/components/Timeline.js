/**
 * ===========================================================================================
 * SYSTEM NAME    : SNS-app
 * PROGRAM ID     : src/pages/Timeline.js
 * PROGRAM NAME   : Timeline.js
 *                : Timelineコンポーネント
 * DEVELOPED BY   : yamabakery
 * CREATE DATE    : 2024/11/01
 * CREATE AUTHOR  : yakoo292929
 * ===========================================================================================
**/

import { useContext } from "react";
import { SessionContext } from "../SessionProvider";


////////////////////////////////////////////////////////////////////////
// Timeline
////////////////////////////////////////////////////////////////////////
export function Timeline(props) {
  
  //-----------------------------------------//
  // useContext：コンポーネント共有
  //-----------------------------------------//
  const { currentUser } = useContext(SessionContext);

  //-----------------------------------------//
  // データの存在確認
  //-----------------------------------------//
  if (!currentUser) {
      console.error("currentUser is undefined.");
      return <div>Error: User is not logged in.</div>;
  }

  if (!props.post) {
      console.error("props.post is undefined.");
      return <div>Error: Post data is not available.</div>;
  }

  /////////////////////////////////////////////
  // 画面表示
  /////////////////////////////////////////////
  return (
    <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">by {props.post.userName}</h3>
      <p className="text-gray-700">{props.post.content}</p>

      {currentUser.id === props.post.userId && (
        <button
          onClick={() => props.onDelete(props.post.id)}
          className="text-blue-500 hover:underline cursor-pointer focus:outline-none"
        >
          削除
        </button>
      )}
    </div>
  );
}
