import { connect } from 'react-redux'
import CompletionButton from './CompletionButton'
import { editCraftedRecipe, saveCraftedRecipesList } from 'reducers/actions'

function mapStateToProps (state, ownProps) {
  const { shopKey, ingredients } = ownProps
  const hasAllRequiredMaterials = ingredients.every(
    ingredient => state.materials[ingredient.key][shopKey] >= ingredient.quantity
  )
  return {
    hasAllRequiredMaterials,
    craftedRecipes: state.craftedRecipes
  }
}

export default connect(mapStateToProps, { editCraftedRecipe, saveCraftedRecipesList })(CompletionButton)
