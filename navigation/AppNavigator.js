import { createDrawerNavigator } from 'react-navigation'
import { getString } from 'utils/localization'
import ShopsStack from './ShopsNavigator'

export default createDrawerNavigator({
  Shops: {
    screen: ShopsStack,
    navigationOptions: {
      drawerLabel: getString('app.shops')
    }
  }
})
