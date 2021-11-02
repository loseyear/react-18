import React from 'react'

import { useDispatch, useSelector } from '../../hooks/useRedux'

function Test() {
  const dispatch = useDispatch()
  const { countReducer1 } = useSelector(state => state)
  return (
    <div>
      <div>{countReducer1.count}</div>
      <button onClick={() => dispatch({ type: 'ADD_COUNTER' })}>触发dispatch-action</button>
    </div>
  )
}
export default Test
