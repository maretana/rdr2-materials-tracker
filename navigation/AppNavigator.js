import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import { getString } from 'utils/localization'
import ShopsStack from './ShopsNavigator'
import SettingsStack from './SettingsNavigator'
import MaterialsScreen from 'screens/Materials/HomeScreen'

const MainNavigator = createDrawerNavigator({
  Materials: {
    screen: MaterialsScreen,
    defaultNavigationOptions: {
      drawerLabel: getString('app.materials')
    }
  },
  Shops: {
    screen: ShopsStack,
    defaultNavigationOptions: {
      drawerLabel: getString('app.shops')
    }
  },
  Settings: {
    screen: SettingsStack,
    defaultNavigationOptions: {
      drawerLabel: getString('app.settings')
    }
  }
})

export default createAppContainer(MainNavigator)
