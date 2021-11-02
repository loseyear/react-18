import { useReducer, lazy, Suspense } from 'react'
import { ThemeProvider } from 'styled-components'

import provider from './hooks/useRedux'
import { reducer } from './store'

import theme from './theme/default'
import GlobalStyle from './theme/global'

const Add = lazy(() => import('./components/add'))
const TestState = lazy(() => import('./components/test_state'))
const Count = lazy(() => import('./components/count/count'))
const CountCopy = lazy(() => import('./components/count/count_copy'))
const CountFirst = lazy(() => import('./components/count/count_first'))
const Fetch = lazy(() => import('./components/fetch'))
const FetchPop = lazy(() => import('./components/fetch_pop'))

function App() {

  return (
    <ThemeProvider
     theme={theme}
    >
      <GlobalStyle />
      <Suspense
        fallback={<>loading...</>}
      >
        <Add />
        <TestState />
        <Count />
        <CountCopy />
        <CountFirst />
        <Fetch />
        <FetchPop />
      </Suspense>
    </ThemeProvider>
  )
}

export default provider(reducer)(App)
