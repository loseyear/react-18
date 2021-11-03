export const countReducer1 = (
  state = {
    count: 1,
  },
  action,
) => {
  switch (action.type) {
    case 'ADD_COUNTER':
      return { count: state.count + 1 }
    default:
      return state
  }
}
