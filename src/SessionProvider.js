/**
 * ===========================================================================================
 * SYSTEM NAME    : SNS-app
 * PROGRAM ID     : src/SessionProvider.js
 * PROGRAM NAME   : SessionProvider.js
 *                : セッションプロバイダー
 * DEVELOPED BY   : yamabakery
 * CREATE DATE    : 2024/11/01
 * CREATE AUTHOR  : yakoo292929
 * ===========================================================================================
**/

import { createContext, useEffect, useState } from "react";
import { authRepository } from "./repositories/auth";

const SessionContext = createContext();
const SessionProvider = (props) => {

  //-----------------------------------------//
  // useState：状態管理
  //-----------------------------------------//
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //-----------------------------------------//
  // useEffect：副作用レンダリング以外の処理
  //-----------------------------------------//
  useEffect(() => {
    setSession();
  }, []);

  //-----------------------------------------//
  // setSession：関数
  //-----------------------------------------//
  const setSession = async () => {
    const currentUser = await authRepository.getCurrentUser();
    setCurrentUser(currentUser);
    setIsLoading(false);
  }

  if (isLoading) return <div />;
  return(
    <SessionContext.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </SessionContext.Provider>
  );

};

export {SessionContext, SessionProvider};
