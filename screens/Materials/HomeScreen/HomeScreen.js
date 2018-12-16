import React from 'react'
import { Dimensions, FlatList, Text, View } from 'react-native'
import { getString } from 'utils/localization'
import Header from './components/MaterialsScreenHeader'

export default class HomeScreen extends React.Component {
  renderMaterial ({ item }) {
    return (
      <View>
        <Text style={{ color: 'white' }}>{getString(item.name)}</Text>
      </View>
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
