import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'

class LeftDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.props.handleClose();
  }


  render() {
    return (
      <div>
        <Drawer open={this.props.open} onRequestChange={(open) => this.setState({open})}>
          <MenuItem onClick={this.handleClose} containerElement={<Link to="/" />}>Home</MenuItem>
          <MenuItem onClick={this.handleClose}>My Account</MenuItem>
        </Drawer>
      </div>
    );
  }
}
export default LeftDrawer;