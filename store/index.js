import { fromJS } from 'immutable'
import { combineReducers } from 'redux-immutable'
import { createStore } from 'redux'
import middleware from './middleware'
import trapper from 'data/trapper.json'
import camp from 'data/camp.json'
import wae from 'data/wae.json'
import materialsList from 'data/materials.json'
import { sortMaterialsList } from 'utils/localization'
import craftedRecipes from './reducers/craftedRecipes'
import materials from './reducers/materials'

/**
 * This reducer is a placeholder for static parts of the state.
 * @param {Object} state
 */
function staticReducer (state) {
  return state
}

const initialState = fromJS({
  shops: [trapper, camp, wae],
  materialsList: sortMaterialsList(materialsList)
})
const rootReducer = combineReducers({
  shops: staticReducer,
  materialsList: staticReducer,
  craftedRecipes,
  materials
})

export default createStore(rootReducer, initialState, middleware)
