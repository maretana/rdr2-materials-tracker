import { writeMaterialCount } from 'utils/storage'

export const ACTION_TYPES = {
  SET_MATERIAL_COUNT: 'SET_MATERIAL_COUNT'
}

// Action creators

export function setMaterialCount (materialKey, materialCount) {
  return async dispatch => {
    await writeMaterialCount(materialKey, materialCount)
    dispatch(setMaterialCountInState(materialKey, materialCount))
  }
}

function setMaterialCountInState (materialKey, materialCount) {
  return {
    type: ACTION_TYPES.SET_MATERIAL_COUNT,
    payload: {
      materialKey,
      materialCount
    }
  }
}
