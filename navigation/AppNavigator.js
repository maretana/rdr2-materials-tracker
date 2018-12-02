import React from 'react'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import HomeScreen from 'screens/Shops/HomeScreen'
import ShopScreen from 'screens/Shops/ShopScreen'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'expo'
import { getString } from 'utils/localization'

const ShopsStack = createStackNavigator({
  Home: HomeScreen,
  Shop: ShopScreen
}, {
  initialRouteName: 'Home',
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
  }),
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0
    }
  })
})

export default createDrawerNavigator({
  Shops: {
    screen: ShopsStack,
    navigationOptions: {
      drawerLabel: getString('app.shops')
    }
  }
})
