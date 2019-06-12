export const ACTION_TYPES = {
  UPDATE_MATERIAL_COUNT: 'UPDATE_MATERIAL_COUNT'
}

// Action creators

export function updateMaterialCounts (materialKey, materialCount) {
  return {
    type: ACTION_TYPES.UPDATE_MATERIAL_COUNT,
    payload: {
      materialKey,
      materialCount
    }
  }
}
