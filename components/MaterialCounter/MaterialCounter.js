import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'expo'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getString } from 'utils/localization'

export default class MaterialCounter extends React.Component {
  static propTypes = {
    materialKey: PropTypes.string.isRequired,
    shopKey: PropTypes.string.isRequired,
    setMaterialCount: PropTypes.func.isRequired,
    getMaterialCount: PropTypes.func.isRequired,
    materialCount: PropTypes.object.isRequired,
    requiredAmount: PropTypes.number,
    isReadOnly: PropTypes.bool
  }

  static defaultProps = {
    isReadOnly: false
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
    let countValue = (materialCount[shopKey] || 0) + updateModifier
    countValue = Math.max(0, countValue)
    countValue = Math.min(99, countValue)
    if (countValue !== materialCount[shopKey]) {
      newCount[shopKey] = countValue
      setMaterialCount(materialKey, newCount)
    }
  }

  renderUpdateButton (iconName, updateModifier) {
    return (
      <TouchableOpacity onPress={this._onPress(updateModifier)}>
        <Icon.MaterialIcons name={iconName} style={styles.icon} />
      </TouchableOpacity>
    )
  }

  renderMaterialCount () {
    const { materialCount, shopKey, requiredAmount } = this.props
    let formattedCountText = ('0' + (materialCount[shopKey] || 0)).slice(-2)
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

  componentDidMount () {
    const { materialCount, materialKey, shopKey, getMaterialCount } = this.props
    if (!materialCount[shopKey]) {
      getMaterialCount(materialKey)
    }
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
