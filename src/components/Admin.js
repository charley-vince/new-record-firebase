import React from 'react'
import PropTypes from 'prop-types'
import ToolBar from './AdminToolBar'
import {Modal, Button} from 'react-bootstrap'
import ClipList from './ClipList'
import Notification from './Notification'
import Loading from './Loading'
import EditClipForm from '../containers/EditClipForm'
require('Styles/admin.less')

class AdminPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        showModal: false
    }
  }
  componentWillMount() {
    if (!this.props.authenticated) {
      this.props.history.push('/login')
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.tag != nextProps.tag) {
      this.props.getClipList(nextProps.tag)
    }

    if (this.props.clipList.clips.length > nextProps.clipList.clips.length) {
	    $('#nr-admin-video-edit').modal('hide');
        this.setState({showModal: false})
    }
  }
  componentDidMount() {
    if (this.props.clipList.tag != this.props.tag) {
      this.props.getClipList(this.props.tag)
    }
    this.props.getPresentationClip()
  }

	close = () => {
		$('#nr-admin-video-edit').modal('hide');
		this.setState({showModal: false})
		this.props.resetErrorAndSuccess()
	}

  switchTag = e => {
    if (this.props.tag != e.target.value) {
      window.scrollTo(0, 0)
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: '?tag=' + e.target.value
      })
    }
  }

  renderEditClipForm = clip => {
    this.props.setEditedClip(clip);
    this.setState({showModal: true}, () => {
	    $('#nr-admin-video-edit').modal({
            backdrop: 'static'
        });
    })
  }


  clipButtons = clip => {
    return (
      <div className="mx-3">
        <button onClick={() => this.renderEditClipForm(clip)} className="btn btn-light w-100">
          Edit
        </button>
      </div>
    )
  }

  render() {
    const {
      isFetching,
      clipList,
      tag,
      getClipList,
      signOutAndRedirect,
      history,
      clipError
    } = this.props
    const isEmpty = clipList.tag != tag || clipList.clips.length === 0
    return (
      <div className="nr-admin-container">
        <ToolBar
          signOutAndRedirect={signOutAndRedirect}
          history={history}
        />
        <div className="nr-admin-body-container container-fluid">
          <div className="row p-5 justify-content-center">
            <div className="d-flex justify-content-center nr-admin-body-filters p-4" title="Filter by tag">
              <select name="tag" onChange={e => this.switchTag(e)} value={tag} className="nr-admin-body-select w-100 ">
                <option value="weddings">weddings</option>
                <option value="voice">voice</option>
                <option value="other">other</option>
              </select>
            </div>
          </div>
          {isEmpty
            ? isFetching ? <Loading /> : clipError ? <Notification error={clipError} /> : <div />
            : <ClipList
                clips={clipList.clips}
                clipButtons={this.clipButtons}
              />}
	        {this.state.showModal ?
              <div className="modal fade" id="nr-admin-video-edit" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Edit video</h5>
                      <button type="button" className="close" onClick={() => this.close()} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body p-4">
                      <EditClipForm/>
                    </div>
                  </div>
                </div>
              </div>: null
	        }
        </div>
      </div>
    )
  }
}

AdminPage.PropTypes = {
  clipList: PropTypes.object.isRequired,
  tag: PropTypes.string.isRequired,
  getClipList: PropTypes.func.isRequired,
  removeClip: PropTypes.func.isRequired,
  signOutAndRedirect: PropTypes.func.isRequired,
  setEditedClip: PropTypes.func.isRequired,
  resetErrorAndSuccess: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default AdminPage
