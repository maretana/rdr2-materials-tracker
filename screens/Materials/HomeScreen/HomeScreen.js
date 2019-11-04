import React from 'react'
import { Dimensions, FlatList, Text, View } from 'react-native'
import { getString } from 'utils/localization'
import MaterialCounter from 'components/MaterialCounter'
import ListCard from 'components/ListCard'
import Header from './components/MaterialsScreenHeader'
import { SearchBar } from 'react-native-elements'

export default class HomeScreen extends React.PureComponent {
  handleUpdateSearch = (search) => {
    this.props.setMaterialsFilter(search)
  }

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

  renderHeader = () => {
    const { filter } = this.props
    return (
      <SearchBar
        placeholder={getString('app.searchMaterialPlaceholder')}
        onChangeText={this.handleUpdateSearch}
        value={filter}
        round
      />
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
            ListHeaderComponent={this.renderHeader}
            stickyHeaderIndices={[0]}
          />
        </View>
      </View>
    )
  }
}
