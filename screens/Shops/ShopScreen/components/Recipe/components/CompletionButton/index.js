import { connect } from 'react-redux'
import CompletionButton from './CompletionButton'

function mapStateToProps (state, ownProps) {
  const { shopKey, ingredients } = ownProps
  const hasAllRequiredMaterials = ingredients.every(
    ingredient => state.materials[ingredient.key][shopKey] >= ingredient.quantity
  )
  return {
    hasAllRequiredMaterials
  }
}

export default connect(mapStateToProps, {})(CompletionButton)
