const todoReducer = ( state = [] , action ) => {

  switch (action.type) {
    case 'add':
      return [...state, action.payload]
    case 'delete':
      return state.filter(state => state.id !== action.payload)
    case 'changeDone': 
      return state.map(state => (
          (state.id === action.payload) 
          ? {...state, done: !state.done}
          : state
        )
      )
    default:
      return state
  }

}

export default todoReducer;