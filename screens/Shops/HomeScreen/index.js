import HomeScreen from './HomeScreen'
import { connect } from 'react-redux'

function mapStateToProps (state) {
  return {
    shops: state.shops
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
