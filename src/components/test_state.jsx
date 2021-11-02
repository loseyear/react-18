import { useState } from 'react'
import { flushSync } from 'react-dom'

function TestState() {
  const [count, setCount] = useState(0)

  const click = () => {
    setCount(() => (count + 1))
    console.log(count)

    // 立即更新 DOM(从 DOM 取最新值)，但是 state 中 count 未变
    flushSync(() => {
      setCount(count => (count + 1))
      console.log(count)
    })

    /* 因 state 中值未变，这里会有问题
    setTimeout(() => {
      setCount(count + 1)
      console.log(count)
      setCount(count + 1)
      console.log(count)
    }, 1000)
    */
  }

  return (
    <div>
      <button
        onClick={() => click()}
      >
        click
      </button>
      {count}
    </div>
  )
}

export default TestState
