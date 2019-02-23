import React from 'react'
import { Alert, Button } from 'react-native'
import { getString } from 'utils/localization'

export default class CompletionButton extends React.Component {
  _onPress = () => {
    const { hasAllRequiredMaterials, recipeName, editCraftedRecipe } = this.props
    if (hasAllRequiredMaterials) {
      editCraftedRecipe(recipeName)
      console.log('can mark as crafted and lock min materials count')
    } else {
      this.askAutofill()
    }
  }

  onAutofill = () => {
    // Add missing materials
    // Set new min count
    // Save recipe as crafted <- standalone method?
  }

  askAutofill () {
    Alert.alert(
      'Alert Title',
      getString('app.askAutofill'),
      [
        { text: 'Cancel', onPress: () => {}, style: 'cancel' },
        { text: 'Yes', onPress: this.onAutofill }
      ],
      { cancelable: false }
    )
  }

  render () {
    return (
      <Button title={getString('app.crafted')} onPress={this._onPress} />
    )
  }
}
