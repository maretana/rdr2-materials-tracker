import React from 'react'
import { ScrollView, Button, StyleSheet, Text } from 'react-native'
import { getString } from '../../utils/localization'

export default class RecipeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('recipeName', '')
  })

  _onPress (params) {
    return () => {
      params.navigation.push('Recipe', {
        recipeName: getString(params.ingredient.name),
        ingredients: params.ingredient.ingredients
      })
    }
  }

  isItem (ingredient) {
    return ingredient.ingredients === undefined
  }

  render () {
    const ingredients = this.props.navigation.getParam('ingredients', [])
    return (
      <ScrollView styles={styles.container}>
        {ingredients.map(ingredient => {
          if (this.isItem(ingredient)) {
            return (
              <Text key={ingredient.name}>
                {`${getString(ingredient.name)} x${ingredient.quantity}`}
              </Text>
            )
          }
          return (
            <Button
              key={ingredient.name}
              title={getString(ingredient.name)}
              onPress={this._onPress({ navigation: this.props.navigation, ingredient })}
            />
          )
        })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 20
  }
})
