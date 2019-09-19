import { AsyncStorage } from 'react-native'

const CRAFTED_RECIPES_KEY = 'CRAFTED_RECIPES'
const CRAFTED_RECIPES_SEPARATOR = ';'

/**
 * Used  when app is loading previously stored data. The user saved data is first
 * loaded here when app is loading so that the initial state can have the stored
 * value. This way the app can do the async call to getItem from storage and
 * then do a synchronous call to set the value in the reducer initial state.
 * @type {Array<String>}
 */
let firstLoadAppData = null

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

/**
 * Clears all data for this app
 */
export async function clearAppData () {
  try {
    let keys = await AsyncStorage.getAllKeys()
    if (keys.length) await AsyncStorage.multiRemove(keys)
  } catch (error) {
    // TODO: Catch error!!!
    console.error(error)
  }
}

/**
 * Loads the completed crafted recipes of the user.
 * @return {Array<String>} An array of the completed recipe names
 */
export async function readCraftedRecipes () {
  try {
    const value = await AsyncStorage.getItem(CRAFTED_RECIPES_KEY)
    return value === null ? [] : value.split(CRAFTED_RECIPES_SEPARATOR)
  } catch (error) {
    // TODO: Catch error!!!
    console.error(error)
  }
}

/**
 * Writes the user crafted recipes list to disk
 * @param  {Array<String>} craftedRecipes The list of crafted recipes names
 */
export async function writeCraftedRecipes (craftedRecipes) {
  try {
    await AsyncStorage.setItem(
      CRAFTED_RECIPES_KEY,
      craftedRecipes.join(CRAFTED_RECIPES_SEPARATOR)
    )
  } catch (error) {
    // TODO: Catch error!!!
    console.error(error)
  }
}

/**
 * Returns the user data that was previously set by `readAppData`
 * @return {Array<String>} The list of crafted recipes names the user had saved.
 */
export function getAppData () {
  const appData = {
    craftedRecipes: firstLoadAppData.initialCraftedRecipes,
    materials: firstLoadAppData.materials
  }
  firstLoadAppData = undefined
  return appData
}

/**
 * Loads any user data that must be available to `initialState` in the reducer.
 */
export async function readAppData (materialsList) {
  firstLoadAppData = {}
  firstLoadAppData.initialCraftedRecipes = await readCraftedRecipes()
  firstLoadAppData.materials = {}
  for (let material of materialsList) {
    const materialKey = material.get('key')
    let count = await readMaterialCount(materialKey)
    firstLoadAppData.materials[materialKey] = count
  }
}
