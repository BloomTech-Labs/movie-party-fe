import {
  EXAMPLE_FUNCTION
} from "../actions/actions"

const initialState = {
  error: "",
  isLoading: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case EXAMPLE_FUNCTION: 
      console.log(action.payload)
      return {
        ...state
      }

    default: 
      return state
  }
}

export default reducer