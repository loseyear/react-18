import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'

import {
  Article,
  List,
} from './style'

export default function App({
  word,
}) {
  const [data, loading, error, load, cancel] = useFetch()

  useEffect(
    () => {
      word && load(word)
    },
    [word],
  )

  if (loading) return <Article>loading...</Article>

  if (error) return <Article>{error}</Article>

  return (
    <Article>
      <List>
        <ul>
          {
            data?.hits?.map(
              (v) => (
                <li
                  key={v.created_at_i}
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

