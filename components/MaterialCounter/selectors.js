import { Map } from 'immutable'

export const getMaterialCount = (state, props) => state.getIn(['materials', 'counts', props.materialKey]) || new Map()
