import { createSelector } from 'reselect'

const getRecipeFromProps = (state, props) => props.recipe
const getCraftedRecipes = state => state.get('craftedRecipes')
export const getMaterials = state => state.get('materials')

export function makeGetIsRecipeCrafted () {
  return createSelector(
    [getCraftedRecipes, getRecipeFromProps],
    (craftedRecipes, targetRecipe) => craftedRecipes.includes(targetRecipe.name)
  )
}

export function makeGetHasAllRequiredMaterials () {
  return createSelector(
    [getMaterials, getRecipeFromProps],
    (materials, { ingredients, shopKey }) => {
      return ingredients.every(
        ingredient => {
          return materials.getIn([ingredient.key, shopKey]) >= ingredient.quantity
        }
      )
    }
  )
}
