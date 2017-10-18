import React from 'react';
import { auth } from '../firebase.js';
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
    let myAccountBtn = null;
    if (auth.currentUser) {
      myAccountBtn = <MenuItem onClick={this.handleClose} containerElement={<Link to="/account"/>}>My Account</MenuItem>
    } 

    return (
      <div>
        <Drawer open={this.props.open} onRequestChange={(open) => this.setState({open})}>
          <MenuItem onClick={this.handleClose} containerElement={<Link to="/" />}>Home</MenuItem>
          {myAccountBtn}
        </Drawer>
      </div>
    );
  }
}
export default LeftDrawer;