import { ACTION_TYPES } from '../../actions/craftedRecipes'

const reducer = {}

reducer[ACTION_TYPES.TOGGLE_CRAFTED_RECIPE] = (state, { recipeName }) => {
  const index = state.indexOf(recipeName)
  if (index === -1) {
    return state.push(recipeName)
  } else {
    return state.delete(index)
  }
}

export default reducer
