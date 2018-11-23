import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { getString } from 'utils/localization'

export default class Recipe extends React.Component {
  render () {
    const { marketKey, ingredients, _cost = 0, name } = this.props.recipe
    console.log(marketKey)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{`${getString(name)} $${_cost}`}</Text>
        {ingredients.map(ingredient => {
          const key = `${ingredient.name}@${name}`
          return (
            <Text key={key} style={styles.text}>
              {`${getString(ingredient.name)} x${ingredient.quantity}`}
            </Text>)
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 3,
    borderWidth: 1,
    borderColor: 'white'
  },
  text: {
    color: 'white',
    fontSize: 16
  }
})
