import { Icon } from 'expo'
import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { TouchableOpacity } from 'react-native'
import SettingsScreen from 'screens/Settings/SettingsScreen'

export default createStackNavigator({
  Settings: SettingsScreen
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
  }),
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0
    }
  })
})
