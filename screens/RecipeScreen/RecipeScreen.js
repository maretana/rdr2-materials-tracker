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
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {ingredients.map(ingredient => {
          if (this.isItem(ingredient)) {
            return (
              <Text key={ingredient.name} style={styles.text}>
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
    backgroundColor: '#000'
  },
  contentContainer: {
    paddingHorizontal: 20
  },
  text: {
    color: 'white',
    fontSize: 18
  }
})
