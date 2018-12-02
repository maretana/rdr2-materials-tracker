import { ACTIONS } from './actions'

let reducer = {}

reducer[ACTIONS.UPDATE_MATERIAL_COUNT] = (state, { materialKey, materialCount }) => {
  let materialUpdate = {}
  materialUpdate[materialKey] = materialCount
  const materials = Object.assign(materialUpdate, state.materials)
  return {
    ...state,
    materials
  }
}

export default reducer
