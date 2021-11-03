import React from 'react'
import {
  countReducer1,
} from './components/add/reducer'

import {
  countReducer,
} from './components/count/reducer'

import { combineReducers } from './hooks/useRedux'

export const reducer = combineReducers({
  countReducer1,
  countReducer,
})
