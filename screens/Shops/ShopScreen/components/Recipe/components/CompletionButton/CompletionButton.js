import React from 'react'
import { Alert, Button } from 'react-native'
import { getString } from 'utils/localization'

export default class CompletionButton extends React.Component {
  _onPress = () => {
    const { hasAllRequiredMaterials, recipeName, editCraftedRecipe } = this.props
    if (hasAllRequiredMaterials) {
      editCraftedRecipe(recipeName)
    } else {
      this.askAutofill()
    }
  }

  onAutofill = () => {
    const { autofillMaterials, editCraftedRecipe, recipeName } = this.props
    autofillMaterials()
    editCraftedRecipe(recipeName)
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
      <Button title={getString('app.crafted')} onPress={this._onPress} disabled={this.props.isRecipeCrafted} />
    )
  }
}
