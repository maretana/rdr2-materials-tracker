import { List, fromJS } from 'immutable'
import { ACTION_TYPES } from '../../actions/craftedRecipes'

export const initialState = List()
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
reducer['RESET_APP_DATA'] = (state, action) => {
  return initialState
}

reducer['LOAD_APP_DATA'] = (state, { craftedRecipes }) => {
  return fromJS(craftedRecipes)
}

export default reducer
