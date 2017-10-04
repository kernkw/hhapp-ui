import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'

class LeftDrawer extends React.Component {
    
      constructor(props) {
        super(props);
      }
    
      render() {
        return (
          <div>
            <Drawer open={this.props.open}>
              <MenuItem containerElement={<Link to="/" />}>Home</MenuItem>
              <MenuItem>My Account</MenuItem>
            </Drawer>
          </div>
        );
      }
    }
    export default LeftDrawer;