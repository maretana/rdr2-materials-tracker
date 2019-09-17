import { Map } from 'immutable'

export const getMaterialCount = (state, props) => state.getIn(['materials', props.materialKey]) || new Map()
