import { createContext, useContext, useReducer } from 'react'

const ProviderContext = createContext('provider')

export default (reducer) => (Component) => () => {
  const [state, dispatch] = useReducer(reducer, reducer({}, {}))
  return (
    <ProviderContext.Provider
      value={{ state, dispatch }}
    >
      <Component />
    </ProviderContext.Provider >
  )
}

export const useSelector = () => useContext(ProviderContext).state
export const useDispatch = () => useContext(ProviderContext).dispatch

export const combineReducers = (reducers) =>
  (state = {}, action) =>
    Object.keys(reducers)
      .reduce(
        (newState, key) => {
          newState[key] = reducers[key](state[key], action)
          return newState
        },
        {},
      )
