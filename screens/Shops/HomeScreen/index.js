import HomeScreen from './HomeScreen'
import { connect } from 'react-redux'
import withImmutablePropsToJS from 'with-immutable-props-to-js'
import { getShops } from './selectors'

function mapStateToProps (state) {
  return {
    shops: getShops(state)
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(withImmutablePropsToJS(HomeScreen))
