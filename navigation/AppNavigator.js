import { createDrawerNavigator } from 'react-navigation'
import { getString } from 'utils/localization'
import ShopsStack from './ShopsNavigator'
import SettingsStack from './SettingsNavigator'

export default createDrawerNavigator({
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
