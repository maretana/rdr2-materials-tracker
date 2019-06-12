import { Map } from 'immutable'
import reducer from './reducer'

const initialState = Map()

export default function (state = initialState, { type, payload }) {
  return reducer[type] ? reducer[type](state, payload) : state
}
