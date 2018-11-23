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
        {this.props.markets.map(market => {
          return (
            <Button
              key={market.name}
              title={getString(market.name)}
              onPress={() => { this.props.navigation.navigate('Market', { data: market }) }}
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
