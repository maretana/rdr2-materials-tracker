import React from 'react'
import { Alert, Button } from 'react-native'
import { getString } from 'utils/localization'

export default class CompletionButton extends React.Component {
  state = {
    updatedCraftedRecipesList: false
  }

  _onPress = () => {
    const { hasAllRequiredMaterials, recipeName, editCraftedRecipe } = this.props
    if (hasAllRequiredMaterials) {
      editCraftedRecipe(recipeName)
      console.log('can mark as crafted and lock min materials count')
      this.setState({
        updatedCraftedRecipesList: true
      })
    } else {
      this.askAutofill()
    }
  }

  askAutofill () {
    Alert.alert(
      'Alert Title',
      getString('app.askAutofill'),
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Yes', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    )
  }

  componentDidUpdate (prevProps) {
    if (prevProps.craftedRecipes.length !== this.props.craftedRecipes.length && this.state.updatedCraftedRecipesList) {
      this.props.saveCraftedRecipesList(this.props.craftedRecipes)
      this.setState({
        updatedCraftedRecipesList: false
      })
    }
  }

  render () {
    return (
      <Button title={getString('app.crafted')} onPress={this._onPress} />
    )
  }
}
