import React from 'react'

import { useDispatch, useSelector } from '../../hooks/useRedux'

export default function Test() {
  const dispatch = useDispatch()
  const { countReducer1 } = useSelector()

  return (
    <div>
      <div>{countReducer1.count}</div>
      <button onClick={() => dispatch({ type: 'ADD_COUNTER' })}>触发dispatch-action</button>
    </div>
  )
}
