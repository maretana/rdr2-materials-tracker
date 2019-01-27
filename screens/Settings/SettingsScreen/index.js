import { connect } from 'react-redux'
import { resetAppData, logReduxState } from 'reducers/actions'
import SettingsScreen from './SettingsScreen'

export default connect(null, { resetAppData, logReduxState })(SettingsScreen)
