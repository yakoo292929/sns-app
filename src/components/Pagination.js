/**
 * ===========================================================================================
 * SYSTEM NAME    : SNS-app
 * PROGRAM ID     : src/pages/Pagination.js
 * PROGRAM NAME   : Pagination.js
 *                : Paginationコンポーネント
 * DEVELOPED BY   : yamabakery
 * CREATE DATE    : 2024/11/01
 * CREATE AUTHOR  : yakoo292929
 * ===========================================================================================
**/

////////////////////////////////////////////////////////////////////////
// Pagination
////////////////////////////////////////////////////////////////////////
export function Pagination(props) {

  /////////////////////////////////////////////
  // 画面表示
  /////////////////////////////////////////////
  return (

    <div className="flex justify-center mt-[16px]">

      <button
        onClick={props.onPrev}
        disabled={props.onPrev === null}
        className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
       >
        Previous
      </button>

      <button
        onClick={props.onNext}
        disabled={props.onNext === null}
        className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>

    </div>

  );

}
