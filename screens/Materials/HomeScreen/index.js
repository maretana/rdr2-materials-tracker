import { connect } from 'react-redux'
import HomeScreen from './HomeScreen'
import withImmutablePropsToJS from 'with-immutable-props-to-js'
import { getFilteredMaterialsList, getMaterialsFilter } from './selectors'
import { setMaterialsFilter } from 'store/actions/materials'

function mapStateToProps (state) {
  return {
    materialsList: getFilteredMaterialsList(state),
    filter: getMaterialsFilter(state)
  }
}

const mapDispatchToProps = {
  setMaterialsFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(withImmutablePropsToJS(HomeScreen))
