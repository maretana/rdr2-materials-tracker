export const ACTION_TYPES = {
  SET_MATERIAL_COUNT: 'SET_MATERIAL_COUNT'
}

// Action creators

export function setMaterialCount (materialKey, materialCount) {
  return {
    type: ACTION_TYPES.SET_MATERIAL_COUNT,
    payload: {
      materialKey,
      materialCount
    }
  }
}
