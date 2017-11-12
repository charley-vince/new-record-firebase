import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {removeClip, editClip} from '../actions/clip'
import EditClipForm from '../components/EditClipForm'

function mapStateToProps(state) {
  let clip = state.clipPage.editedClip
  let presentationURL = state.clipPage.presentationURL
  return {
    presentationURL: presentationURL,
    clipError: state.clipError.error,
    successOnEdit: state.clipEdit.successOnEdit,
    initialValues: {
      tag: clip? clip.tag: null,
      title: clip? clip.title: null,
    /*  isPresentation: clip? clip.url === presentationURL: false*/
    },
    clip: clip
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({editClip, removeClip}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(EditClipForm)
