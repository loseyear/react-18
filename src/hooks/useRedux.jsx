import React, { createContext, useContext, useReducer } from 'react'

const ProviderContext = createContext('provider')

export default (reducer) => (Com) => {
  return () => {
    const [state, dispatch] = useReducer(reducer, reducer({}, {}))
    return (
      <ProviderContext.Provider value={{ state, dispatch }}>
        <Com />
      </ProviderContext.Provider >
    )
  }
}

export const useSelector = () => useContext(ProviderContext).state
export const useDispatch = () => useContext(ProviderContext).dispatch

export function combineReducers(reducers) {
  return function (state = {}, action) {
    const a = Object.keys(reducers)
      .reduce(
        (newState, key) => {
          newState[key] = reducers[key](state[key], action)
          return newState
        },
        {},
      )

    return a
  }
}
