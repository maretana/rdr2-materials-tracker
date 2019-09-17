import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'expo'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getString } from 'utils/localization'

export default class MaterialCounter extends React.PureComponent {
  static propTypes = {
    materialKey: PropTypes.string.isRequired,
    shopKey: PropTypes.string.isRequired,
    // setMaterialCount: PropTypes.func.isRequired,
    materialCount: PropTypes.object.isRequired,
    requiredAmount: PropTypes.number,
    isReadOnly: PropTypes.bool,
    subtractMinCount: PropTypes.bool
  }

  static defaultProps = {
    isReadOnly: false,
    subtractMinCount: false
  }

  _onPress = (updateModifier) => {
    return () => {
      if (this.props.isReadOnly) {
        return null
      }
      return this.updateMaterialCount(updateModifier)
    }
  }

  updateMaterialCount (updateModifier) {
    const { setMaterialCount, materialKey, shopKey, materialCount } = this.props
    let newCount = Object.assign({}, materialCount)
    let minCount = newCount.min || {}
    let countValue = (materialCount[shopKey] || 0) + updateModifier
    countValue = Math.max((minCount[shopKey] || 0), countValue)
    countValue = Math.min(99, countValue)
    if (countValue !== materialCount[shopKey]) {
      newCount[shopKey] = countValue
      setMaterialCount(materialKey, newCount)
    }
  }

  renderUpdateButton (iconName, updateModifier) {
    return (
      <TouchableOpacity onPress={this._onPress(updateModifier)} disabled={this.props.isReadOnly}>
        <Icon.MaterialIcons name={iconName} style={styles.icon} />
      </TouchableOpacity>
    )
  }

  renderMaterialCount () {
    const { materialCount, shopKey, requiredAmount, subtractMinCount } = this.props
    let count = materialCount[shopKey] || 0
    if (subtractMinCount) {
      let minCount = materialCount.min || {}
      count -= minCount[shopKey] || 0
    }
    let formattedCountText = ('0' + count).slice(-2)
    if (requiredAmount) {
      formattedCountText = getString('app.materialCounterWithTotal', {
        count: formattedCountText,
        total: requiredAmount
      })
    }
    return (
      <View style={styles.countTextContainer}>
        <Text style={styles.countText}>{formattedCountText}</Text>
      </View>
    )
  }

  render () {
    return (
      <View style={[this.props.style, styles.container]}>
        {this.renderUpdateButton('remove-circle', -1)}
        {this.renderMaterialCount()}
        {this.renderUpdateButton('add-circle', 1)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  icon: {
    color: 'white',
    fontSize: 18
  },
  countText: {
    color: 'white'
  },
  countTextContainer: {}
})
