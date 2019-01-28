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

reducer[ACTIONS.LOAD_USER_DATA] = (state, payload) => {
  return {
    ...state,
    ...payload
  }
}

reducer[ACTIONS.RESET_APP_DATA] = (state, payload) => {
  let materials = {}
  let userData = {
    craftedRecipes: []
  }
  return {
    ...state,
    materials,
    ...userData
  }
}

reducer[ACTIONS.LOG_REDUX_STATE] = (state, payload) => {
  console.log('Redux state:', state)
  return state
}

export default reducer
