import React, { createContext, useReducer, useMemo, useContext } from 'react';

const initialState = {
  authorized: false,
  nickname: null,
};

const YBStateContext = createContext();
const YBActionsContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'AUTHORIZE':
      return {
        ...state,
        authorized: true,
      };
    case 'SET_NICKNAME':
      return {
        ...state,
        nickname: action.nickname,
      };
    default:
      throw new Error('Wrong dispatch!');
  }
}

export function useYBState() {
  const value = useContext(YBStateContext);
  if (!value) {
    throw new Error('useYBState should be used within ContextProvider');
  }
  return value;
}

export function useYBActions() {
  const value = useContext(YBActionsContext);
  if (!value) {
    throw new Error('useYBActions should be used within ContextProvider');
  }
  return value;
}

export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useMemo(
    () => ({
      authorize: () => {
        dispatch({ type: 'AUTHORIZE' });
      },
      setNickname: (nickname) => {
        dispatch({ type: 'SET_NICKNAME', nickname });
      },
    }),
    []
  );

  return (
    <YBStateContext.Provider value={state}>
      <YBActionsContext.Provider value={actions}>
        {children}
      </YBActionsContext.Provider>
    </YBStateContext.Provider>
  );
}
