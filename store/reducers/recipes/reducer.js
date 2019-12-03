import trapper from 'data/trapper.json'
import camp from 'data/camp.json'
import wae from 'data/wae.json'
import { fromJS } from 'immutable'
import { ACTION_TYPES } from 'store/actions/recipes'

export const initialState = fromJS({
  shops: [trapper, camp, wae],
  filter: '',
  sortBy: '',
  isSortAscending: true
})

const reducer = {}

reducer[ACTION_TYPES.SET_IS_SORT_ASCENDING] = (state, { isSortAscending }) => {
  return state.set('isSortAscending', isSortAscending)
}

reducer[ACTION_TYPES.SET_RECIPES_FILTER] = (state, { filter }) => {
  return state.set('filter', filter)
}

reducer[ACTION_TYPES.SET_SORT_CRITERIA] = (state, { sortBy }) => {
  return state.set('sortBy', sortBy)
}

reducer.RESET_APP_DATA = (state, action) => {
  return state.withMutations(nextState => {
    nextState
      .set('filter', '')
      .set('sortBy', '')
      .set('isSortAscending', true)
  })
}

export default reducer
