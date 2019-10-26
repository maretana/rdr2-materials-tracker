import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default class MaterialsScreenHeader extends React.PureComponent {
  render () {
    const { title, navigation } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
          >
            <MaterialIcons name='menu' size={26} color='black' />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 90
  },
  header: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  headerText: {
    color: 'black',
    fontSize: 26
  }
})
