import { ACTION_TYPES } from '../../actions/materials'
import { fromJS } from 'immutable'

const reducer = {}

reducer[ACTION_TYPES.SET_MATERIAL_COUNT] = (state, { materialKey, materialCount }) => {
  return state.set(materialKey, fromJS(materialCount))
}

export default reducer
