/**
 * ===========================================================================================
 * SYSTEM NAME    : SNS-app
 * PROGRAM ID     : src/repositories/post.js
 * PROGRAM NAME   : post.js
 *                : Supabase postテーブル処理
 * DEVELOPED BY   : yamabakery
 * CREATE DATE    : 2024/11/01
 * CREATE AUTHOR  : yakoo292929
 * ===========================================================================================
**/

import { supabase } from "../lib/supabase";


export const postRepositiry = {

  //-----------------------------------------//
  // Supabase postデータ作成
  //-----------------------------------------//
  async create(content, userId) {
    const {data, error} = await supabase
      .from("posts")
      .insert([{ content, user_id: userId }])
      .select();
    if (error !== null) {
        throw new Error(error.message);
    }
    return data[0];
  },


  //-----------------------------------------//
  // Supabase postデータ検索
  //-----------------------------------------//
  async find(page, limit) {
    page = isNaN(page) || page < 1 ? 1 : page;
    const start = limit * (page -1);
    const end = start + limit -1;

    const {data, error} = await supabase
      .from("posts_view")
      .select("*")
      .range(start, end)
      .order("created_at", { ascending: false });
    if (error !== null) {
        throw new Error(error.message);
    }
    return data.map((post) => {
      return {
        ...post,
        userId: post.user_id,
        userName: post.user_metadata.name,
      };
    });
  },

  //-----------------------------------------//
  // Supabase postデータ削除
  //-----------------------------------------//
  async delete(id) {
    const {error} = await supabase
      .from("posts")
      .delete()
      .eq("id", id);
    if (error !== null) {
        throw new Error(error.message);
    }
    return true;
  },

};
