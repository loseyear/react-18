import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
html,
body {
  height: 100%;
}

body {
  box-sizing: border-box;

  background: #f7f8fd;
}

body,
ul,
p,
h2,
h3,
h4 {
  margin:0;
}

ul,
input {
  padding: 0;
}

ul {
  list-style: none;
}

input {
  border: 0 none;
}

b,
em {
  font-weight: normal;
}

#app {
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  min-height: 100%;

  font-size: 12px;
}

:-moz-placeholder {
  color: #909fba;
  font-size: 12px;
}
::-moz-placeholder {
  color: #909fba;
  font-size: 12px;
}
input:-ms-input-placeholder {
  color: #909fba;
  font-size: 12px;
}

input::-webkit-input-placeholder{
  color: #909fba;
  font-size: 12px;
}
`
