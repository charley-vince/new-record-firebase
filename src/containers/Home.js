import {bindActionCreators} from 'redux'
import {getPresentationClip} from '../actions/clip'
import {connect} from 'react-redux'
import Home from '../components/Home'

function mapStateToProps(state) {
  return {
    isFetching: state.clipPage.isFetching,
    presentationURL: state.clipPage.presentationURL,
    clipError: state.clipError.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPresentationClip: bindActionCreators(getPresentationClip, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
