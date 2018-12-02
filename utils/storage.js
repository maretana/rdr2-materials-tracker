import { AsyncStorage } from 'react-native'

/**
 * Reads the material counts object in the device
 * @param  {String} materialKey value used to identify the material
 * @return {Object}             The material count object
 */
export async function readMaterialCount (materialKey) {
  try {
    const value = await AsyncStorage.getItem(materialKey)
    return value === null ? {} : JSON.parse(value)
  } catch (error) {
    // TODO: Catch error!!!
    console.error(error)
  }
}

/**
 * Saves the material counts object in the device
 * @param {String} materialKey value used to identify the material
 * @param {Object} newValue    New value to save as the material counts object
 */
export async function writeMaterialCount (materialKey, newValue) {
  try {
    await AsyncStorage.setItem(materialKey, JSON.stringify(newValue))
  } catch (error) {
    // TODO: Catch error!!!
    console.error(error)
  }
}
