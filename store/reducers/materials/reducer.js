import { ACTION_TYPES } from '../../actions/materials'
import { fromJS, Map } from 'immutable'

export const initialState = fromJS({
  counts: {},
  filter: ''
})
const reducer = {}

reducer[ACTION_TYPES.SET_MATERIAL_COUNT] = (state, { materialKey, materialCount }) => {
  return state.setIn(['counts', materialKey], fromJS(materialCount))
}

reducer[ACTION_TYPES.SET_MATERIALS_FILTER] = (state, { filter }) => {
  return state.set('filter', filter)
}

// TODO: Delete this
reducer.RESET_APP_DATA = (state, action) => {
  return state.withMutations(nextState => {
    nextState
      .set('filter', '')
      .set('counts', nextState.get('counts').map(materialCount => new Map()))
  })
}

reducer.LOAD_APP_DATA = (state, { materials }) => {
  return fromJS({ counts: materials, filter: state.get('filter') })
}

export default reducer
