import { connect } from 'react-redux'
import { editCraftedRecipe, setMaterialCount } from 'reducers/actions'
import Recipe from './Recipe'

function mapStateToProps (state, ownProps) {
  const { shopKey, ingredients, name } = ownProps.recipe
  const hasAllRequiredMaterials = ingredients.every(
    ingredient => {
      return state.materials[ingredient.key] &&
      state.materials[ingredient.key][shopKey] >= ingredient.quantity
    }
  )
  return {
    hasAllRequiredMaterials,
    isRecipeCrafted: state.craftedRecipes.includes(name),
    materials: state.materials
  }
}

export default connect(mapStateToProps, { editCraftedRecipe, setMaterialCount })(Recipe)
