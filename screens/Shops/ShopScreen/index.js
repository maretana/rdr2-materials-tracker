import { connect } from 'react-redux'
import ShopScreen from './ShopScreen'
import { getCraftedRecipes } from './selectors'
import withImmutablePropsToJS from 'with-immutable-props-to-js'

function mapStateToProps (state) {
  return {
    craftedRecipes: getCraftedRecipes(state)
  }
}

const mapDispatchToProps = {
  // saveCraftedRecipesList
}

export default connect(mapStateToProps, mapDispatchToProps)(withImmutablePropsToJS(ShopScreen))
