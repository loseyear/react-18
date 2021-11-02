import {
  useState,
  useEffect,
  useTransition,
  Suspense,
  lazy,
} from 'react'

const List = lazy(() => import('./list'))

import {
  Wrapper,
} from './style'

/*
 * 最新版本 useTransition 和 useDeferredValue 不好用
*/

export default function App() {
  const [word, setWord] = useState('')
  const [isPending, startTransition] = useTransition({ timeoutMs: 3000 })

  const click = (value) => {
    startTransition(() => { setWord(value) })
  }

  return (
    <Wrapper>
      <input
        type="text"
        onChange={({ target }) => !isPending && click(target.value)}
      />
      <ol>
        {
          ['react', 'vue', 'ng'].map(
            (v) => (
              <li
                key={v}
                onClick={() => setWord(v)}
              >
                {v}
              </li>
            ),
          )
        }
      </ol>
      <Suspense
        fallback={<h1>Loading profile...</h1>}
      >
        <List
          word={word}
        />
      </Suspense>
    </Wrapper>
  )
}

