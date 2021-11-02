import styled from 'styled-components'

import { Flex } from '../../theme/grid'

export const Wrapper = styled.div`
  margin: 20px 0;
  padding: 20px;

  background: rgba(0, 0, 0, .4);
`

export const Article = styled.div`
  position: relative;
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

export const Pop = styled(Flex)`
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100%;
  overflow-y: scroll;

  background: rgba(0, 0, 0, .1);
`
