import React from 'react'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import HomeScreen from 'screens/Recipes/HomeScreen'
import RecipeScreen from 'screens/Recipes/RecipeScreen'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'expo'
import { getString } from 'utils/localization'

const RecipesStack = createStackNavigator({
  Home: HomeScreen,
  Recipe: RecipeScreen
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
  Recipes: {
    screen: RecipesStack,
    navigationOptions: {
      drawerLabel: getString('app.recipes')
    }
  }
})
