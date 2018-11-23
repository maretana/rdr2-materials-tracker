import React from 'react'
import {
  StyleSheet,
  Button,
  View
} from 'react-native'
import { getString } from 'utils/localization'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: getString('app.home')
  };

  render () {
    return (
      <View style={styles.container}>
        {this.props.markets.map(recipe => {
          return (
            <Button
              key={recipe.name}
              title={getString(recipe.name)}
              onPress={() => { this.props.navigation.navigate('Recipe', { recipeName: getString(recipe.name), ingredients: recipe.ingredients }) }}
            />
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#000'
  }
})
