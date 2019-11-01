import React from 'react'
import { connect } from 'react-redux'
import AppNavigator from 'navigation/AppNavigator'
import { loadAppData } from 'store/actions/settings'
import withImmutablePropsToJS from 'with-immutable-props-to-js'
import { writeCraftedRecipes } from 'utils/storage'

/**
 * This class acts as a setup stage to perform state actions once the app loads
 * for the first time. Use it to load async data such as user saved data or user
 * settings.
 * @extends React
 */
class RDR2MaterialsTracker extends React.PureComponent {
  state = {
    firstLoad: true // prevents app from writing the data it just read on first load
  }

  componentDidMount () {
    this.props.loadAppData()
  }

  async componentDidUpdate (prevProps) {
    if (prevProps.craftedRecipes !== this.props.craftedRecipes) {
      if (this.state.firstLoad) {
        this.setState({ firstLoad: false })
      } else {
        await writeCraftedRecipes(this.props.craftedRecipes)
      }
    }
  }

  render () {
    return <AppNavigator />
  }
}

function mapStateToProps (state) {
  return {
    craftedRecipes: state.get('craftedRecipes')
  }
}

export default connect(mapStateToProps, { loadAppData })(withImmutablePropsToJS(RDR2MaterialsTracker))
