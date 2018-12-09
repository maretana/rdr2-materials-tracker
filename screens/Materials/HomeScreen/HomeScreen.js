import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { getString } from 'utils/localization'

export default class HomeScreen extends React.Component {
  renderMaterial ({ item }) {
    return (
      <View>
        <Text style={{ color: 'white' }}>{getString(item.name)}</Text>
      </View>
    )
  }

  render () {
    return (
      <FlatList
        data={this.props.materialsList}
        renderItem={this.renderMaterial}
      />
    )
  }
}
