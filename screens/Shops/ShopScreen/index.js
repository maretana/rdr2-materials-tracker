import { connect } from 'react-redux'
import { saveCraftedRecipesList } from 'reducers/actions'
import ShopScreen from './ShopScreen'

function mapStateToProps (state) {
  return {
    craftedRecipes: state.craftedRecipes
  }
}

export default connect(mapStateToProps, { saveCraftedRecipesList })(ShopScreen)
