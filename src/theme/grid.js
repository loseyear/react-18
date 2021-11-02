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

export const FlexBorder = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;

  background-color: #ffffff;
  border: 1px solid #e3e3ef;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 #e3e3ef;
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

// 默认边框容器
export const BorderInput = styled.input`
  background-color: #ffffff;
  border: 1px solid #e3e3ef;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 #e3e3ef;
`

// 默认无边框容器
export const Box = styled.div`
  background-color: #ffffff;
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

// chart/empty 容器
export const Chart = styled.div`
  width: 100%;
  height: 480px;
  max-height: 100%;
`

export const Title = styled.div`
  width: 100%;
  height: 28px;
  padding: 20px 0;

  h2 {
    float: left;
    padding: 0 20px 0 0;
    font-size: 16px;
    font-weight: bold;
    line-height: 28px;
    color: ${({ theme }) => theme.fontColor};

    outline: none;
  }
`

export const Tip = styled.div`
  padding: 20px 0 0;

  p {
    font-size: 12px;
    line-height: 14px;
    color: #909fba;
  }
`
