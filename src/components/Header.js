import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Search from './Search'
import LeftDrawer from './LeftDrawer'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleTouchMap() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <MuiThemeProvider>
                <AppBar
                    title="Denver Happy Hours"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    iconElementRight={
                        <Search />
                    }
                    onLeftIconButtonTouchTap={this.handleTouchMap.bind(this)}
                />
                <LeftDrawer open={this.state.open}  autoFocus/>
            </MuiThemeProvider>
        );
    }
}

export default Header;
