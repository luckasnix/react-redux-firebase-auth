import { createReducer } from 'redux-create-reducer'

const initState = {}

const userReducer = createReducer(
  initState,
  {
    'ADD_DATA': (_, action) => { return action.data }
  }
)

export default userReducer