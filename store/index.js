import { fromJS } from 'immutable'
import { combineReducers } from 'redux-immutable'
import { createStore } from 'redux'
import middleware from './middleware'
import materialsList from 'data/materials.json'
import { sortMaterialsList } from 'utils/localization'
import craftedRecipes from './reducers/craftedRecipes'
import materials from './reducers/materials'
import recipes from './reducers/recipes'

const initialState = fromJS({
  materialsList: sortMaterialsList(materialsList)
})
const rootReducer = combineReducers({
  materialsList: state => state,
  recipes,
  craftedRecipes,
  materials
})

export default createStore(rootReducer, initialState, middleware)
