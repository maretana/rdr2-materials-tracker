import React from 'react'
import { Text, View } from 'react-native'
import { getString } from 'utils/localization'
import ListCard from 'components/ListCard'
import MaterialCounter from 'components/MaterialCounter'
import CompletionButton from './components/CompletionButton'
import styles from './styles'

export default class Recipe extends React.PureComponent {
  autofillMaterials = () => {
    const { recipe: { shopKey, ingredients }, materials, setMaterialCount } = this.props
    ingredients.forEach(ingredient => {
      let materialCount = materials[ingredient.key]
      let newCount = Object.assign({}, materialCount)
      let minCount = materialCount.min || {}
      let count = (newCount[shopKey] || 0) - (minCount[shopKey] || 0)
      if (count < ingredient.quantity) {
        newCount[shopKey] = (newCount[shopKey] || 0) + (ingredient.quantity - count)
      }
      newCount.min = Object.assign({}, minCount)
      newCount.min[shopKey] = (newCount.min[shopKey] || 0) + ingredient.quantity
      setMaterialCount(ingredient.key, newCount)
    })
  }
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
    const {
      hasAllRequiredMaterials, toggleCraftedRecipe,
      recipe: { shopKey, ingredients, _cost = 0, name },
      isRecipeCrafted
    } = this.props
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
              {!isRecipeCrafted && (
                <MaterialCounter
                  materialKey={ingredient.key}
                  shopKey={shopKey}
                  subtractMinCount
                />
              )}
            </View>
          )
        })}
        <CompletionButton
          recipeName={name}
          hasAllRequiredMaterials={hasAllRequiredMaterials}
          toggleCraftedRecipe={toggleCraftedRecipe}
          isRecipeCrafted={isRecipeCrafted}
          autofillMaterials={this.autofillMaterials}
        />
      </ListCard>
    )
  }
}
