import { connect } from 'react-redux'
import HomeScreen from './HomeScreen'

function mapStateToProps (state) {
  return {
    materialsList: state.materialsList
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
