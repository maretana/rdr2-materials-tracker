import React from 'react'
import { ScrollView, Button, StyleSheet } from 'react-native'
import { getString } from 'utils/localization'
import Recipe from './components/Recipe'

export default class MarketScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: getString(navigation.getParam('data').name)
  })

  _onPress (params) {
    const { navigation, ingredient, marketKey } = params
    return () => {
      navigation.push('Market', {
        data: {
          ...ingredient,
          marketKey
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

  renderSubmarketButtons ({ ingredient, marketKey }) {
    return (
      <Button
        key={ingredient.name}
        title={getString(ingredient.name)}
        onPress={this._onPress({ navigation: this.props.navigation, ingredient, marketKey })}
      />
    )
  }

  render () {
    const data = this.props.navigation.getParam('data')
    const marketKey = data.marketKey
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {data.ingredients.map(ingredient => {
          if (this.isRecipe(ingredient)) {
            return this.renderRecipe({ ...ingredient, marketKey })
          } else {
            return this.renderSubmarketButtons({ ingredient, marketKey })
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
