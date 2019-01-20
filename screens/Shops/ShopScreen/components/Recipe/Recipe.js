import React from 'react'
import { Text, View } from 'react-native'
import { getString } from 'utils/localization'
import ListCard from 'components/ListCard'
import MaterialCounter from 'components/MaterialCounter'
import CompletionButton from './components/CompletionButton'
import styles from './styles'

export default class Recipe extends React.PureComponent {
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

  render () {
    const { shopKey, ingredients, _cost = 0, name } = this.props.recipe
    return (
      <ListCard title={name}>
        {this.renderRecipeCost(_cost)}
        {ingredients.map(ingredient => {
          const key = `${ingredient.name}@${name}`
          return (
            <View key={key}>
              <Text style={styles.text}>
                {`${getString(ingredient.name)} x${ingredient.quantity}`}
              </Text>
              <MaterialCounter materialKey={ingredient.key} shopKey={shopKey} />
            </View>
          )
        })}
        <CompletionButton />
      </ListCard>
    )
  }
}
