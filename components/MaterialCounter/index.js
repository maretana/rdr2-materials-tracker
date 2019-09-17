import { connect } from 'react-redux'
import { getMaterialCount } from './selectors'
import MaterialCounter from './MaterialCounter'
import withImmutablePropsToJS from 'with-immutable-props-to-js'

function mapStateToProps (state, ownProps) {
  return {
    materialCount: getMaterialCount(state, ownProps)
  }
}

const mapDispatchToProps = {
  // getMaterialCount,
  // setMaterialCount
}

export default connect(mapStateToProps, mapDispatchToProps)(withImmutablePropsToJS(MaterialCounter))
