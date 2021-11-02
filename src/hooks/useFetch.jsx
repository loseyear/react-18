import { useState } from 'react'

import r, { cancel } from './request'

const Fetch = () => {
  const [status, setStatus] = useState([[], false, ''])
  const load = async (word) => {
    setStatus([[], true, ''])
    const rst = await r({
      url: `https://hn.algolia.com/api/v1/search?query=${word}`,
      body: {},
      method: 'GET'
    })
    if (!rst?.status || rst?.status > 200) {
      setStatus([[], false, rst?.data?.message || '请求错误'])
    } else {
      setStatus([rst?.data || [], false, ''])
    }
  }

  return [...status, load, cancel]
}

export default Fetch
