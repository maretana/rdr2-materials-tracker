import { writeMaterialCount } from 'utils/storage'

export const ACTION_TYPES = {
  SET_MATERIAL_COUNT: 'SET_MATERIAL_COUNT',
  SET_MATERIALS_FILTER: 'SET_MATERIALS_FILTER'
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

export function setMaterialsFilter (filter) {
  return {
    type: ACTION_TYPES.SET_MATERIALS_FILTER,
    payload: {
      filter
    }
  }
}
