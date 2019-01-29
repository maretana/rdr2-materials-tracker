import { connect } from 'react-redux'
import { editCraftedRecipe } from 'reducers/actions'
import Recipe from './Recipe'

function mapStateToProps (state, ownProps) {
  const { shopKey, ingredients } = ownProps.recipe
  const hasAllRequiredMaterials = ingredients.every(
    ingredient => {
      return state.materials[ingredient.key] &&
      state.materials[ingredient.key][shopKey] >= ingredient.quantity
    }
  )
  return {
    hasAllRequiredMaterials
  }
}

export default connect(mapStateToProps, { editCraftedRecipe })(Recipe)
