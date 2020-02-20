export const EXAMPLE_FUNCTION = "EXAMPLE_FUNCTION"

export const exampleFunction = () => dispatch => {
  dispatch({type: EXAMPLE_FUNCTION, payload: "im the example function"})
}