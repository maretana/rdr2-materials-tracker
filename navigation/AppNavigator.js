import React from 'react'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import SecondScreen from '../screens/SecondScreen'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'expo'

const MainStack = createStackNavigator({
  Home: HomeScreen,
  SecondScreen
}, {
  navigationOptions: ({ navigation }) => ({
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
      >
        <Icon.MaterialIcons name='menu' size={26} color='black' />
      </TouchableOpacity>
    ),
    headerRightContainerStyle: {
      backgroundColor: 'white',
      color: 'black',
      marginRight: 20
    }
  })
})

export default createDrawerNavigator({
  Main: MainStack
})
