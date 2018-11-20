import * as trapper from '../recipes/trapper.json'
import * as camp from '../recipes/camp.json'
import * as wae from '../recipes/wae.json'

const initialState = {
  recipes: [trapper, camp, wae]
}

export default function (state = initialState, action) {
  return state
}
