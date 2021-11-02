import styled from 'styled-components'

import { Flex } from '../../theme/grid'

export const Wrapper = styled.div`
  padding: 20px;

  background: rgba(0, 0, 0, .4);
`

export const Article = styled(Flex)`
  justify-content: center;
  align-items: center;

  height: 200px;
  padding: 20px;

  color: white;
  background: skyblue;
`

export const List = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`
