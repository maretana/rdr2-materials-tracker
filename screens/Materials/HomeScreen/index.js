import { connect } from 'react-redux'
import HomeScreen from './HomeScreen'
import withImmutablePropsToJS from 'with-immutable-props-to-js'
import { getMaterialsList } from './selectors'

function mapStateToProps (state) {
  return {
    materialsList: getMaterialsList(state)
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(withImmutablePropsToJS(HomeScreen))
