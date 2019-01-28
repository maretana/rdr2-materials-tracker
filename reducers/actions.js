import { ToastAndroid } from 'react-native'
import {
  readMaterialCount, writeMaterialCount, clearAppData,
  getUserDataSynchronous, writeCraftedRecipes
} from 'utils/storage'

export const ACTIONS = {
  UPDATE_MATERIAL_COUNT: 'UPDATE_MATERIAL_COUNT',
  ON_MATERIAL_COUNT_SAVED: 'ON_MATERIAL_COUNT_SAVED',
  RESET_APP_DATA: 'RESET_APP_DATA',
  LOG_REDUX_STATE: 'LOG_REDUX_STATE',
  LOAD_USER_DATA: 'LOAD_USER_DATA',
  EDIT_CRAFTED_RECIPE: 'EDIT_CRAFTED_RECIPE',
  ON_CRAFTED_RECIPE_SAVED: 'ON_CRAFTED_RECIPE_SAVED'
}

// Action creators

function updateMaterialCounts (materialKey, materialCount) {
  return {
    type: ACTIONS.UPDATE_MATERIAL_COUNT,
    payload: {
      materialKey,
      materialCount
    }
  }
}

/**
 * Gets the material count stored on the device and sets it on state.
 * @param  {String} materialKey value used to identify the material
 * @return {Function}           A thunk to asynchronously read from the device
 *                              and then update state
 */
export function getMaterialCount (materialKey) {
  return dispatch => {
    readMaterialCount(materialKey).then(countObject => {
      dispatch(updateMaterialCounts(materialKey, countObject))
    })
  }
}

function onMaterialCountSaved () {
  return {
    type: ACTIONS.ON_MATERIAL_COUNT_SAVED
  }
}

/**
 * Saves the new count to the device and state
 * @param {String} materialKey value used to identify the material
 * @param {Object} count       The new count of materials per store
 */
export function setMaterialCount (materialKey, count) {
  return dispatch => {
    dispatch(updateMaterialCounts(materialKey, count))
    writeMaterialCount(materialKey, count).then(() => {
      dispatch(onMaterialCountSaved())
    })
  }
}

function resetStateUserData () {
  return {
    type: ACTIONS.RESET_APP_DATA
  }
}

/**
 * Gets user data that was loaded asynchronous when the app was loaded and merge
 * it with state
 * @return {Object} The action to merge the data.
 */
export function loadUserData () {
  const userData = getUserDataSynchronous()
  return {
    type: ACTIONS.LOAD_USER_DATA,
    payload: {
      ...userData
    }
  }
}

export function editCraftedRecipe (recipeName) {
  return {
    type: ACTIONS.EDIT_CRAFTED_RECIPE,
    payload: {
      recipeName
    }
  }
}

function onCraftedRecipeSaved () {
  return {
    type: ACTIONS.ON_CRAFTED_RECIPE_SAVED
  }
}

export function saveCraftedRecipesList (craftedRecipesList) {
  return dispatch => {
    writeCraftedRecipes(craftedRecipesList).then(() => {
      dispatch(onCraftedRecipeSaved())
    })
  }
}

/**
 * Deletes all user data for this app and resets the app state
 */
export function resetAppData () {
  return dispatch => {
    clearAppData().then(() => {
      ToastAndroid.show('App data was reset', ToastAndroid.SHORT) // TODO: Remove this or at least check for platform (Andorid|iOS)
      dispatch(resetStateUserData())
    })
  }
}

/**
 * TODO: DELETE THIS
 * Logs in console the current redux state.
 * @return {Object} The action creator
 */
export function logReduxState () {
  return {
    type: ACTIONS.LOG_REDUX_STATE
  }
}
