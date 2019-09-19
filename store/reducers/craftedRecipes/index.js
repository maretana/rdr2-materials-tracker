import reducer, { initialState } from './reducer'

export default function (state = initialState, { type, payload }) {
  return reducer[type] ? reducer[type](state, payload) : state
}
