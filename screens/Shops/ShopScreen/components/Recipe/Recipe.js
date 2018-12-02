/* globals alert */

import React from 'react'
import { Text, View, Button } from 'react-native'
import { getString } from 'utils/localization'
import styles from './styles'

export default class Recipe extends React.Component {
  renderRecipeCost (cost) {
    if (cost) {
      return (
        <View style={styles.costContainer}>
          <Text style={styles.text}>
            {`${getString('app.cost')}: $${cost}`}
          </Text>
        </View>
      )
    } else {
      return null
    }
  }

  renderRecipeTitle (title) {
    return (
      <View style={styles.recipeTitleContainer}>
        <Text style={[styles.text, styles.recipeTitleText]} numberOfLines={1}>
          {getString(title).toUpperCase()}
        </Text>
      </View>
    )
  }

  renderMaterialCounter ({ materialKey, shopKey }) {
    return null
  }

  render () {
    const { shopKey, ingredients, _cost = 0, name } = this.props.recipe
    return (
      <View style={styles.container}>
        {this.renderRecipeTitle(name)}
        {this.renderRecipeCost(_cost)}
        {ingredients.map(ingredient => {
          const key = `${ingredient.name}@${name}`
          return (
            <View key={key}>
              <Text style={styles.text}>
                {`${getString(ingredient.name)} x${ingredient.quantity}`}
              </Text>
              {this.renderMaterialCounter({ materialKey: ingredient.name, shopKey })}
            </View>
          )
        })}
        <Button title={getString('app.crafted')} onPress={() => alert(getString('app.askAutofill'))} />
      </View>
    )
  }
}
