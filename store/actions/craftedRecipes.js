export const ACTION_TYPES = {
  TOGGLE_CRAFTED_RECIPE: 'TOGGLE_CRAFTED_RECIPE'
}

// Action creators

export function toggleCraftedRecipe (recipeName) {
  return {
    type: ACTION_TYPES.TOGGLE_CRAFTED_RECIPE,
    payload: {
      recipeName
    }
  }
}
