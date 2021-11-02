import { useContext } from 'react'

import { useSelector, useDispatch } from '../../hooks/useRedux'

export default () => {
  const dispatch = useDispatch()
  const { countReducer } = useSelector()
  return (
    <div>
      <div>第一层，触发 action </div>
      <p>count: {countReducer.count}</p>
      <button onClick={() => dispatch({ type: 'reset', payload: 1 })}>
        reset
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>----</button>
      <button onClick={() => dispatch({ type: 'increment' })}>++++</button>
    </div>
  )
}
