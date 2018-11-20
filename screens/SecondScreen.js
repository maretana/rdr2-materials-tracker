import React from 'react'
import { Text } from 'react-native'

export default class SecondScreen extends React.Component {
  static navigationOptions = {
    title: 'Second Screen'
  }
  render () {
    return (
      <Text>Hello there!</Text>
    )
  }
}
