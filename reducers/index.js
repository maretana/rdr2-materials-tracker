import * as trapper from '../data/trapper.json'
import * as camp from '../data/camp.json'
import * as wae from '../data/wae.json'
import reducer from './reducers'

const initialState = {
  shops: [trapper, camp, wae],
  materials: {}
}

export default function (state = initialState, { type, payload }) {
  return reducer[type] ? reducer[type](state, payload) : state
}
