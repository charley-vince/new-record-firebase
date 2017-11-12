import React from 'react'
import PropTypes from 'prop-types'
import {Navbar, Nav, Button, NavItem, Modal} from 'react-bootstrap'
import AddClipForm from '../containers/AddClipForm'

class ToolBar extends React.Component {
  constructor(props) {
    super(props)
  }

  wrapSignOut = () => {
    this.props.signOutAndRedirect(this.props.history.push)
  }

  render() {
    return (
      <div>
        <div className="nr-admin-navbar d-flex justify-content-between align-items-center p-4">
              <button className="btn btn-light"  data-toggle="modal" data-target="#nr-admin-video-add">Add video</button>
              <button className="btn btn-danger" onClick={this.wrapSignOut}>Logout</button>
        </div>

        <div className="modal fade" id="nr-admin-video-add"  role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add video</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body p-4">
                <AddClipForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ToolBar.propTypes = {
  signOutAndRedirect: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default ToolBar
