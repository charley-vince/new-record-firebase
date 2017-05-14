import {bindActionCreators} from 'redux'
import {addClip} from '../actions/clip'
import {connect} from 'react-redux'
import AddClipForm from '../components/AddClipForm'

function mapStateToProps(state) {
  return {
    clipError: state.clipError.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addClip: bindActionCreators(addClip, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddClipForm)
