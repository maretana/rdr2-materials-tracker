import { connect } from 'react-redux'
import { resetAppData } from 'reducers/actions'
import SettingsScreen from './SettingsScreen'
import withImmutablePropsToJS from 'with-immutable-props-to-js'

function mapStateToProps (state) {
  return {
    state // TODO: For debug purposes only.
  }
}

const mapDispatchToProps = {
  resetAppData
}

export default connect(mapStateToProps, mapDispatchToProps)(withImmutablePropsToJS(SettingsScreen))
