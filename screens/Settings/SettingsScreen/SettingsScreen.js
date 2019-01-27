import React from 'react'
import { Button, View } from 'react-native'
import { getString } from 'utils/localization'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: getString('app.settings')
  }

  render () {
    return (
      <View>
        <Button title={'Reset App Data'} onPress={() => this.props.resetAppData()} />
        <Button title={'Log Redux State'} onPress={() => this.props.logReduxState()} />
      </View>
    )
  }
}
