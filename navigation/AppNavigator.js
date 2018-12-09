import { createDrawerNavigator } from 'react-navigation'
import { getString } from 'utils/localization'
import ShopsStack from './ShopsNavigator'
import SettingsStack from './SettingsNavigator'
import MaterialsScreen from 'screens/Materials/HomeScreen'

export default createDrawerNavigator({
  Materials: {
    screen: MaterialsScreen,
    navigationOptions: {
      drawerLabel: getString('app.materials')
    }
  },
  Shops: {
    screen: ShopsStack,
    navigationOptions: {
      drawerLabel: getString('app.shops')
    }
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions: {
      drawerLabel: getString('app.settings')
    }
  }
})
