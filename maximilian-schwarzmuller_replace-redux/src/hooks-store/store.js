import { useState, useEffect } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
  // 只在乎改變值的方法
  const setState = useState(globalState)[1];

  // actionIdentifier 就是 action 的名稱啦
  const dispatch = (actionIdentifier, payload) => {
    // 這邊類似 reducer
    const newState = actions[actionIdentifier](globalState, payload);
    // 得到 globalState 的新值
    globalState = { ...globalState, newState };

    for (const listener of listeners) {
      // 然後同步更新每一個 listener 的 state 狀態來更新畫面
      listener(globalState);
    }
  };

  // 當 mount 元件就會有一個屬於自己的改變值的方法並加到監聽陣列中
  useEffect(() => {
    if (shouldListen) listeners.push(setState);

    // 因為這裡是個 closure，所以這裡的 setState 取用的值會同外層 const 宣告的而不會因為是物件而不同
    return () => {
      if (shouldListen) listeners = listeners.filter((li) => li !== setState);
    };
    // 因為 setState 不會改變所以不會造成元件 rerun
  }, [shouldListen, setState]);
  // 類似 useReducer 所回傳的
  return [globalState, dispatch];
};

// 管理多種 states 和 actions
export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
