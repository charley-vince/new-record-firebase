import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem, Modal, Button } from 'react-bootstrap';
import AddClipForm from '../containers/AddClipForm';

class ToolBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  close = () => {
    this.setState({ showModal: false });
  };

  open = () => {
    this.setState({ showModal: true });
  };
  wrapSignOut = () => {
    this.props.signOutAndRedirect(this.props.history.push)
  }

  render() {
    return (
      <div className="admin-navbar">
        <Navbar inverse collapseOnSelect>
          <Nav>
            <NavItem onClick={this.open}>Добавить видео</NavItem>
            <NavItem className="pull-right" onClick={this.wrapSignOut}>Выйти</NavItem>
          </Nav>
        </Navbar>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Добавить видео</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddClipForm />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Закрыть</Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}

ToolBar.propTypes = {
  signOutAndRedirect: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default ToolBar;
