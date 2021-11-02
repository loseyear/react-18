import { useContext } from 'react'

import { useSelector } from '../../hooks/useRedux'

export default () => {
  const { countReducer } = useSelector()
  return (
    <div>
      <p>count: {countReducer.count}</p>
    </div>
  )
}
