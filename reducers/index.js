import * as trapper from 'data/trapper.json'
import * as camp from 'data/camp.json'
import * as wae from 'data/wae.json'
import materialsList from 'data/materials.json'
import { sortMaterialsList } from 'utils/localization'
import { getCraftedRecipesListSynchronous } from 'utils/storage'
import reducer from './reducers'

const initialState = {
  shops: [trapper, camp, wae],
  materials: {},
  materialsList: sortMaterialsList(materialsList),
  craftedRecipes: getCraftedRecipesListSynchronous()
}

export default function (state = initialState, { type, payload }) {
  return reducer[type] ? reducer[type](state, payload) : state
}
