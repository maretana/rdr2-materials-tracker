import { createSelector } from 'reselect'
import { getString } from 'utils/localization'

const getMaterialsList = state => state.get('materialsList')
export const getMaterialsFilter = state => state.getIn(['materials', 'filter'])

export const getFilteredMaterialsList = createSelector(
  getMaterialsList, getMaterialsFilter,
  (materialsList, filter) => {
    return materialsList.filter(material => getString(material.get('name')).toLowerCase().includes(filter.toLowerCase()))
  }
)
