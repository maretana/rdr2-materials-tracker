import { connect } from 'react-redux'
import { getMaterialCount, setMaterialCount } from 'reducers/actions'
import MaterialCounter from './MaterialCounter'

function mapStateToProps (state, ownProps) {
  return {
    materialCount: state.materials[ownProps.materialKey] || {}
  }
}

const mapDispatchToProps = {
  getMaterialCount,
  setMaterialCount
}

export default connect(mapStateToProps, mapDispatchToProps)(MaterialCounter)
