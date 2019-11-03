import React from 'react'
import { Alert, Button } from 'react-native'
import { getString } from 'utils/localization'

export default class CompletionButton extends React.PureComponent {
  handleOnPress = () => {
    const { hasAllRequiredMaterials, isRecipeCrafted } = this.props
    if (!isRecipeCrafted) {
      if (hasAllRequiredMaterials) {
        this.completeRecipe()
      } else {
        this.askAutofill()
      }
    } else {
      this.askUnmarkAsCrafted()
    }
  }

  askUnmarkAsCrafted () {
    const { recipeName } = this.props
    Alert.alert(
      getString('app.askNotCraftedTitle'),
      getString('app.askNotCrafted', { recipeName: getString(recipeName) }),
      [
        { text: getString('app.cancel'), onPress: () => {}, style: 'cancel' },
        { text: getString('app.yes'), onPress: this.unmarkRecipeAsCrafted }
      ],
      { cancelable: false }
    )
  }

  unmarkRecipeAsCrafted = () => {
    const { recipeName, toggleCraftedRecipe, unlockMinMaterials } = this.props
    unlockMinMaterials()
    toggleCraftedRecipe(recipeName)
  }

  completeRecipe = () => {
    const { autofillMaterials, toggleCraftedRecipe, recipeName } = this.props
    autofillMaterials()
    toggleCraftedRecipe(recipeName)
  }

  askAutofill () {
    Alert.alert(
      getString('app.askAutofillTitle'),
      getString('app.askAutofill'),
      [
        { text: getString('app.cancel'), onPress: () => {}, style: 'cancel' },
        { text: getString('app.yes'), onPress: this.completeRecipe }
      ],
      { cancelable: false }
    )
  }

  render () {
    const { isRecipeCrafted } = this.props
    const buttonTitle = isRecipeCrafted ? getString('app.crafted') : getString('app.notCrafted')
    return (
      <Button title={buttonTitle} onPress={this.handleOnPress} />
    )
  }
}
