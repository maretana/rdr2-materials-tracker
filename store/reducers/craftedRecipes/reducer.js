import { List, fromJS } from 'immutable'
import { ACTION_TYPES } from '../../actions/craftedRecipes'

/**
 * The initial state is `[null]` so that it is different from an empty list
 * when the app loads for the first time and there was no data in the device
 * yet. The result would be changing from `[null]` to `[]`.
 * By doing this, `RDR2MaterialsTracker` can safely avoid writing on first load for any case.
 */
export const initialState = List().push(null)
const reducer = {}

reducer[ACTION_TYPES.TOGGLE_CRAFTED_RECIPE] = (state, { recipeName }) => {
  const index = state.indexOf(recipeName)
  if (index === -1) {
    return state.push(recipeName)
  } else {
    return state.delete(index)
  }
}

// TODO: Delete this
reducer.RESET_APP_DATA = (state, action) => {
  return new List()
}

reducer.LOAD_APP_DATA = (state, { craftedRecipes }) => {
  return fromJS([...craftedRecipes])
}

export default reducer
