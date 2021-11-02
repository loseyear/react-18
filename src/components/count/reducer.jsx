export const countInit = {
  count: 1,
}

export const countReducer = (state = { count: 1 }, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return { count: action.payload }
    default:
      return state
  }
}
