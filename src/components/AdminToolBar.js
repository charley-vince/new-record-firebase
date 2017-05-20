import React from 'react'
import PropTypes from 'prop-types'
import {Navbar, Nav, NavItem, Modal} from 'react-bootstrap'
import AddClipForm from '../containers/AddClipForm'

class ToolBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  close = () => {
    this.setState({showModal: false})
    this.props.resetErrorAndSuccess()
  }

  open = () => {
    this.setState({showModal: true})
  }
  wrapSignOut = () => {
    this.props.signOutAndRedirect(this.props.history.push)
  }

  render() {
    return (
      <div className="admin-navbar">
        <Navbar inverse collapseOnSelect>
          <Nav className="admin-navbar-btns">
            <NavItem onClick={this.open}>Add video</NavItem>
            <NavItem className="pull-right" onClick={this.wrapSignOut}>Logout</NavItem>
          </Nav>
        </Navbar>

        <Modal show={this.state.showModal} onHide={this.close} className="add-clip-modal">
          <Modal.Header closeButton>
            <Modal.Title>Add video</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddClipForm />
          </Modal.Body>
        </Modal>

      </div>
    )
  }
}

ToolBar.propTypes = {
  signOutAndRedirect: PropTypes.func.isRequired,
  resetErrorAndSuccess: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default ToolBar
