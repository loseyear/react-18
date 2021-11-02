import styled from 'styled-components'

// 闭合浮动
export const Clearfix = styled.div`
  &:before,
  &:after {
    display: table;
    font: 0/0 a;
    content: " ";
  }

  &:after {
    clear: both;
  }
`

// 默认 flex 容器
export const Flex = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
`

// 默认边框容器
export const Border = styled.div`
  background-color: #ffffff;
  border: 1px solid #e3e3ef;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 #e3e3ef;
`

// 禁止选择
export const UnSelect = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;

  -o-user-select: none;
  user-select: none;
`
