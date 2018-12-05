import { connect } from 'react-redux'
import { resetAppData } from 'reducers/actions'
import SettingsScreen from './SettingsScreen'

export default connect(null, { resetAppData })(SettingsScreen)
