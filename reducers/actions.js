import { readMaterialCount, writeMaterialCount } from 'utils/storage'

export const ACTIONS = {
  UPDATE_MATERIAL_COUNT: 'UPDATE_MATERIAL_COUNT',
  ON_MATERIAL_COUNT_SAVED: 'ON_MATERIAL_COUNT_SAVED'
}

// Dispatchers

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
