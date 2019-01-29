import { connect } from 'react-redux'
import CompletionButton from './CompletionButton'
import { editCraftedRecipe } from 'reducers/actions'

function mapStateToProps (state, ownProps) {
  const { shopKey, ingredients } = ownProps
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

export default connect(mapStateToProps, { editCraftedRecipe })(CompletionButton)
