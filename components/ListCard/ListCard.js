import React from 'react'
import { Text, View } from 'react-native'
import { getString } from 'utils/localization'
import styles from './styles'

export default class ListCard extends React.PureComponent {
  renderCardTitle (title) {
    return (
      <View style={styles.listCardTitleContainer}>
        <Text style={[styles.text, styles.listCardTitleText]} numberOfLines={1}>
          {getString(title).toUpperCase()}
        </Text>
      </View>
    )
  }

  render () {
    const { children, title } = this.props
    return (
      <View style={styles.container}>
        {this.renderCardTitle(title)}
        {children}
      </View>
    )
  }
}
