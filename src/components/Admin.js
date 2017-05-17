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
    this.changePage = this.changePage.bind(this)
    this.renderEditClipForm = this.renderEditClipForm.bind(this)
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
    //close modal if clip was successfully deleted
    if (this.props.clipList.clips.length > nextProps.clipList.clips.length) {
      this.setState({showModal: false})
    }
  }
  componentDidMount() {
    if (this.props.clipList.tag != this.props.tag) {
      this.props.getClipList(this.props.tag)
    }
    this.props.getPresentationClip()
  }
  changePage(newPage) {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: '?tag=' + this.props.tag + '&page=' + newPage + ''
    })
  }

  switchTag = e => {
    if (this.props.tag != e.target.value) {
      window.scrollTo(0, 0)
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: '?tag=' + e.target.value + '&page=1'
      })
    }
  }
  close = () => {
    this.setState({showModal: false})
    this.props.resetErrorAndSuccess()
  }

  renderEditClipForm = clip => {
    this.props.setEditedClip(clip)
    this.setState({showModal: true})
  }
  clipButtons = clip => {
    return (
      <div className="under-clip-buttons">
        <Button bsSize="lg" onClick={() => this.renderEditClipForm(clip)} bsStyle="danger">
          Edit
        </Button>
      </div>
    )
  }

  render() {
    const {
      isFetching,
      clipList,
      activePage,
      tag,
      getClipList,
      signOutAndRedirect,
      history,
      clipError,
      resetErrorAndSuccess
    } = this.props
    const isEmpty = clipList.tag != tag || clipList.clips.length === 0
    return (
      <div className="admin-wrapper">
        <ToolBar
          signOutAndRedirect={signOutAndRedirect}
          history={history}
          resetErrorAndSuccess={resetErrorAndSuccess}
        />
        <div className="admin-body">
          <div className="col-md-offset-2 col-md-8 admin-panel">
            <div>
              <span>Chose video by tag</span>
              <select name="tag" onChange={e => this.switchTag(e)} value={tag}>
                <option value="weddings">weddings</option>
                <option value="voice">voice</option>
                <option value="other">other</option>
              </select>
            </div>
            <Button
              onClick={() => getClipList(tag)}
              className="refresh-by-tag"
              type="button"
              value="Refresh"
            >
              Refresh
            </Button>
          </div>
          {isEmpty
            ? isFetching ? <Loading /> : clipError ? <Notification error={clipError} /> : <div />
            : <ClipList
                clips={clipList.clips}
                activePage={activePage}
                changePage={this.changePage}
                perPage={3}
                clipButtons={this.clipButtons}
              />}
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Edit video</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <EditClipForm />
            </Modal.Body>
            <Modal.Footer>
              <Button bsSize="lg" bsStyle="default" className="default-btn" onClick={this.close}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    )
  }
}

AdminPage.PropTypes = {
  clipList: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
  tag: PropTypes.string.isRequired,
  getClipList: PropTypes.func.isRequired,
  removeClip: PropTypes.func.isRequired,
  signOutAndRedirect: PropTypes.func.isRequired,
  setEditedClip: PropTypes.func.isRequired,
  resetErrorAndSuccess: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default AdminPage
