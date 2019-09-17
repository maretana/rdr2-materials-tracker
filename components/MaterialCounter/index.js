import { connect } from 'react-redux'
import withImmutablePropsToJS from 'with-immutable-props-to-js'
import { setMaterialCount } from 'store/actions/materials'
import { getMaterialCount } from './selectors'
import MaterialCounter from './MaterialCounter'

function mapStateToProps (state, ownProps) {
  return {
    materialCount: getMaterialCount(state, ownProps)
  }
}

const mapDispatchToProps = {
  setMaterialCount
}

export default connect(mapStateToProps, mapDispatchToProps)(withImmutablePropsToJS(MaterialCounter))
