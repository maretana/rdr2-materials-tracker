import reducer from './reducer'
import { List } from 'immutable'

const initialState = List()

export default function (state = initialState, { type, payload }) {
  return reducer[type] ? reducer[type](state, payload) : state
}
