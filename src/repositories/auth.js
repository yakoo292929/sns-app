/**
 * ===========================================================================================
 * SYSTEM NAME    : SNS-app
 * PROGRAM ID     : src/repositories/auth.js
 * PROGRAM NAME   : auth.js
 *                : Supabase 認証処理
 * DEVELOPED BY   : yamabakery
 * CREATE DATE    : 2024/11/01
 * CREATE AUTHOR  : yakoo292929
 * ===========================================================================================
**/

import { supabase } from "../lib/supabase";


////////////////////////////////////////////////////////////////////////
// authRepository
////////////////////////////////////////////////////////////////////////
export const authRepository = {

  //-----------------------------------------//
  // Supabase サインアップ
  //-----------------------------------------//
  async signup(name, email, password) {
    const {data, error} = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } }
    });
    if (error !== null) {
        throw new Error(error.message);
    }
    return {
      ...data.user,
      userName: data.user.user_metadata.name,
    };
  },

  //-----------------------------------------//
  // Supabase サインイン
  //-----------------------------------------//
  async signin(email, password) {
    const {data, error} = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error !== null) {
        throw new Error(error.message);
    }
    return {
      ...data.user,
      userName: data.user.user_metadata.name,
    };
  },

  //-----------------------------------------//
  // Supabase カレントユーザーセッション取得
  //-----------------------------------------//
  async getCurrentUser() {
    const {data, error} = await supabase.auth.getSession();
    if (error !== null) {
        throw new Error(error.message);
    }
    if (data.session === null) {
        return;
    }
    return {
      ...data.session.user,
      userName: data.session.user.user_metadata.name,
    };

  },

  //-----------------------------------------//
  // Supabase サインアウト
  //-----------------------------------------//
  async signout() {
    const {error} = await supabase.auth.signOut();
    if (error !== null) {
        throw new Error(error.message);
    }
    return true;
  },

}
