import HomeScreen from './HomeScreen'
import { connect } from 'react-redux'

function mapStateToProps (state) {
  return state
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
