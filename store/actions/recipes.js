export const ACTION_TYPES = {
  SET_RECIPES_FILTER: 'SET_RECIPES_FILTER',
  SET_SORT_CRITERIA: 'SET_SORT_CRITERIA',
  SET_IS_SORT_ASCENDING: 'SET_IS_SORT_ASCENDING'
}

export function setRecipesFilter (filter) {
  return {
    type: ACTION_TYPES.SET_RECIPES_FILTER,
    payload: {
      filter
    }
  }
}

export function setSortCriteria (sortBy) {
  return {
    type: ACTION_TYPES.SET_SORT_CRITERIA,
    payload: {
      sortBy
    }
  }
}

export function setIsSortAscending (isSortAscending) {
  return {
    type: ACTION_TYPES.SET_IS_SORT_ASCENDING,
    payload: {
      isSortAscending
    }
  }
}
