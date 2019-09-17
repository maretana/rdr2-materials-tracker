import React from 'react'
import { Dimensions, FlatList, Text, View } from 'react-native'
import { getString } from 'utils/localization'
import MaterialCounter from 'components/MaterialCounter'
import ListCard from 'components/ListCard'
import Header from './components/MaterialsScreenHeader'

export default class HomeScreen extends React.PureComponent {
  renderMaterial ({ item }) {
    return (
      <ListCard title={item.name}>
        {item.shops.map(shop => {
          return (
            <View key={`${item.key}@${shop.key}`}>
              <Text style={{ color: 'white' }}>{getString(shop.name)}</Text>
              <MaterialCounter
                materialKey={item.key}
                shopKey={shop.key}
                requiredAmount={shop.quantity}
              />
            </View>
          )
        })}
      </ListCard>
    )
  }

  render () {
    const { height } = Dimensions.get('window')
    return (
      <View>
        <Header navigation={this.props.navigation} title={getString('app.materials')} />
        <View style={{ height: (height - 90) }}>
          <FlatList
            data={this.props.materialsList}
            renderItem={this.renderMaterial}
          />
        </View>
      </View>
    )
  }
}
