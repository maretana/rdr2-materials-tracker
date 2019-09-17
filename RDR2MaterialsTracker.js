import React from 'react'
import { connect } from 'react-redux'
import AppNavigator from 'navigation/AppNavigator'
import { loadUserData } from 'reducers/actions'

/**
 * This class acts as a setup stage to perform state actions once the app loads
 * for the first time. Use it to load async data such as user saved data or user
 * settings.
 * @extends React
 */
class RDR2MaterialsTracker extends React.Component {
  componentDidMount () {
    this.props.loadUserData()
  }

  render () {
    return <AppNavigator />
  }
}

export default connect(null, { loadUserData })(RDR2MaterialsTracker)
