import { connect } from 'react-redux'
import Recipe from './Recipe'
import withImmutablePropsToJS from 'with-immutable-props-to-js'
import { makeGetHasAllRequiredMaterials, makeGetIsRecipeCrafted, getMaterials } from './selectors'

function makeMapStateToProps () {
  const getHasAllRequiredMaterials = makeGetHasAllRequiredMaterials()
  const getIsRecipeCrafted = makeGetIsRecipeCrafted()
  return function mapStateToProps (state, ownProps) {
    return {
      hasAllRequiredMaterials: getHasAllRequiredMaterials(state, ownProps),
      isRecipeCrafted: getIsRecipeCrafted(state, ownProps),
      materials: getMaterials(state)
    }
  }
}

const mapDispatchToProps = {
  // editCraftedRecipe,
  // setMaterialCount
}

export default connect(makeMapStateToProps, mapDispatchToProps)(withImmutablePropsToJS(Recipe))
