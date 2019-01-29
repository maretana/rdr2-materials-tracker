import React from 'react'
import { ScrollView, Button, StyleSheet } from 'react-native'
import { getString } from 'utils/localization'
import Recipe from './components/Recipe'

export default class ShopScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: getString(navigation.getParam('data').name)
  })

  _onPress (params) {
    const { navigation, ingredient, shopKey } = params
    return () => {
      navigation.push('Shop', {
        data: {
          ...ingredient,
          shopKey
        }
      })
    }
  }

  isRecipe (data) {
    return data.ingredients[0].ingredients === undefined
  }

  renderRecipe (recipe) {
    return <Recipe key={recipe.name} recipe={recipe} />
  }

  renderShopNavigationButton ({ ingredient, shopKey }) {
    return (
      <Button
        key={ingredient.name}
        title={getString(ingredient.name)}
        onPress={this._onPress({ navigation: this.props.navigation, ingredient, shopKey })}
      />
    )
  }

  componentDidUpdate (prevProps) {
    if (prevProps.craftedRecipes.length !== this.props.craftedRecipes.length) {
      this.props.saveCraftedRecipesList(this.props.craftedRecipes)
    }
  }

  render () {
    const data = this.props.navigation.getParam('data')
    const shopKey = data.shopKey
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {data.ingredients.map(ingredient => {
          if (this.isRecipe(ingredient)) {
            return this.renderRecipe({ ...ingredient, shopKey })
          } else {
            return this.renderShopNavigationButton({ ingredient, shopKey })
          }
        })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000'
  },
  contentContainer: {
    paddingHorizontal: 10
  },
  text: {
    color: 'white',
    fontSize: 18
  }
})
