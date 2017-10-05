import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blueGrey600} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Search from './Search'
import LeftDrawer from './LeftDrawer'

const muiTheme = getMuiTheme({
    palette: {
      textColor: blueGrey600,
    },
    appBar: {
      height: 50,
      color: blueGrey600,
      textColor: '#D1D6E7'
    },
  });

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
          };
          this.toggleDrawer = this.toggleDrawer.bind(this);
          this.handleClose = this.handleClose.bind(this);
    }

    toggleDrawer(){
        this.setState({
          open: !this.state.open
        });
      }
    
      handleClose(){
        this.setState({open: false})
      }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <AppBar
                    title="Denver Happy Hours"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.toggleDrawer}
                />
                <LeftDrawer open={this.state.open} handleClose={this.handleClose} onToggleDrawer={this.toggleDrawer}/>
            </MuiThemeProvider>
        );
    }
}

export default Header;
