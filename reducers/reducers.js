import { ACTIONS } from './actions'

let reducer = {}

reducer[ACTIONS.UPDATE_MATERIAL_COUNT] = (state, { materialKey, materialCount }) => {
  let materialUpdate = {}
  materialUpdate[materialKey] = materialCount
  const materials = Object.assign({ ...state.materials }, materialUpdate)
  return {
    ...state,
    materials
  }
}

export default reducer
