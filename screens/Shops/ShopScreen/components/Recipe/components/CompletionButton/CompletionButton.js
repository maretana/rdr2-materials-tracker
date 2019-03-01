import React from 'react'
import { Alert, Button } from 'react-native'
import { getString } from 'utils/localization'

export default class CompletionButton extends React.Component {
  _onPress = () => {
    const { hasAllRequiredMaterials } = this.props
    if (hasAllRequiredMaterials) {
      this.completeRecipe()
    } else {
      this.askAutofill()
    }
  }

  completeRecipe = () => {
    const { autofillMaterials, editCraftedRecipe, recipeName } = this.props
    autofillMaterials()
    editCraftedRecipe(recipeName)
  }

  askAutofill () {
    Alert.alert(
      getString('app.askAutofillTitle'),
      getString('app.askAutofill'),
      [
        { text: 'Cancel', onPress: () => {}, style: 'cancel' },
        { text: 'Yes', onPress: this.completeRecipe }
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
