import React from 'react'
import { Alert, Button } from 'react-native'
import { getString } from 'utils/localization'

export default class CompletionButton extends React.Component {
  askAutofill () {
    Alert.alert(
      'Alert Title',
      getString('app.askAutofill'),
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    )
  }

  render () {
    return (
      <Button title={getString('app.crafted')} onPress={this.askAutofill} />
    )
  }
}
