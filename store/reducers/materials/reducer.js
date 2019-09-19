import { ACTION_TYPES } from '../../actions/materials'
import { fromJS, Map } from 'immutable'

export const initialState = Map()
const reducer = {}

reducer[ACTION_TYPES.SET_MATERIAL_COUNT] = (state, { materialKey, materialCount }) => {
  return state.set(materialKey, fromJS(materialCount))
}

// TODO: Delete this
reducer['RESET_APP_DATA'] = (state, action) => {
  return initialState
}

export default reducer
