import React from 'react'
import {
  countInit1,
  countReducer1,
} from './components/add/reducer'

import {
  countInit,
  countReducer,
} from './components/count/reducer'

import { combineReducers } from './hooks/useRedux'

export const reducer = combineReducers({
  countReducer1,
  countReducer,
})

export const initialState = {
  countReducer1: countInit1,
  countReducer: countInit,
}
