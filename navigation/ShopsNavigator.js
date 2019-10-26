import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { TouchableOpacity } from 'react-native'
import HomeScreen from 'screens/Shops/HomeScreen'
import ShopScreen from 'screens/Shops/ShopScreen'

export default createStackNavigator({
  Home: HomeScreen,
  Shop: ShopScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: ({ navigation }) => ({
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
      >
        <MaterialIcons name='menu' size={26} color='black' />
      </TouchableOpacity>
    ),
    headerRightContainerStyle: {
      backgroundColor: 'white',
      color: 'black',
      marginRight: 20
    }
  }),
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0
    }
  })
})
