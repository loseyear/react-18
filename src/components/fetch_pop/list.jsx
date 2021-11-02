import {
  useState,
  useEffect,
} from 'react'
import useFetch from '../../hooks/useFetch'

import {
  Article,
  List,
  Pop,
} from './style'

export default function App({
  word,
}) {
  const [data, loading, error, load, cancel] = useFetch()
  const [list, setList] = useState([])

  useEffect(() => {
    if (data?.hits?.length) setList(data.hits)
  }, [data])

  useEffect(
    () => {
      word && load(word)
    },
    [word],
  )

  return (
    <Article>
      {loading ? <Pop>loading...</Pop> : null}
      {error ? <Pop>{error}</Pop> : null}

      <List>
        <ul>
          {
            list.map(
              (v) => (
                <li
                  key={v.created_at_i}
                  style={{
                    opacity: loading ? 0.7 : 1,
                  }}
                >
                  {v.title}
                </li>
              ),
            )
          }
        </ul>
      </List>
    </Article>
  )
}

