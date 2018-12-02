import * as trapper from '../shops/trapper.json'
import * as camp from '../shops/camp.json'
import * as wae from '../shops/wae.json'
import reducer from './reducers'

const initialState = {
  shops: [trapper, camp, wae],
  materials: {}
}

export default function (state = initialState, { type, payload }) {
  return reducer[type] ? reducer[type](state, payload) : state
}
