import * as trapper from '../recipes/trapper.json'
import * as camp from '../recipes/camp.json'
import * as wae from '../recipes/wae.json'
import reducer from './reducers'

const initialState = {
  markets: [trapper, camp, wae]
}

export default function (state = initialState, { type, payload }) {
  return reducer[type] ? reducer[type](state, payload) : state
}
