import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {removeClip, setPresentationClip, getClipList} from '../actions/clip'
import {signOutAndRedirect} from '../actions/auth'
import AdminPage from '../components/Admin'
import {parseQuery} from '../utils/helpers'

function mapStateToProps(state, ownProps) {
  return {
    authenticated: state.auth.authenticated,
    clipList: state.clipPage.clipList,
    activePage: parseInt(parseQuery(ownProps.location.search, 'page')) || 1,
    tag: parseQuery(ownProps.location.search, 'tag') || 'weddings',
    clipError: state.clipError.error,
    isFetching: state.clipPage.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {getClipList, removeClip, setPresentationClip, signOutAndRedirect},
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage)
