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
        {this.props.shops.map(shop => {
          return (
            <Button
              key={shop.name}
              title={getString(shop.name)}
              onPress={() => { this.props.navigation.navigate('Shop', { data: shop }) }}
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
