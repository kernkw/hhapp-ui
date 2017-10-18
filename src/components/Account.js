import React, { Component } from 'react'
import MobileTearSheet from './MobileTearSheet';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import { Link } from 'react-router-dom'
import { GridList, GridTile } from 'material-ui/GridList';
import { auth, isAuthenticated, curUserID } from '../firebase.js';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    gridRoot: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
};


class Account extends Component {

    constructor() {
        super();
        this.state = {
            userFavorites: [],
        }
    }

    componentDidMount() {
        if (isAuthenticated) {
            fetch("http://localhost:8080/user_favorites?user_id=" + curUserID)
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({ userFavorites: responseJson.data });
                })
                .catch((error) => {
                    console.error(error);
                });
        }

    }

    render() {
        let user;
        if (auth.currentUser) {
            user = (
                <div style={styles.root}>
                    <MobileTearSheet>
                        <List>
                            <Subheader>My Account</Subheader>
                            <ListItem
                                primaryText="Name"
                                secondaryText={auth.currentUser.displayName}
                            />
                            <ListItem
                                primaryText="Email"
                                secondaryText={auth.currentUser.email}
                            />
                        </List>
                        <Divider />
                        <List>
                            <Subheader>Email Notifications</Subheader>
                            <ListItem primaryText="Monthly" rightToggle={<Toggle />} />
                            <ListItem primaryText="Weekly" rightToggle={<Toggle />} />
                            <ListItem primaryText="Promotions" rightToggle={<Toggle />} />
                        </List>
                    </MobileTearSheet>
                    <List>
                        <Subheader>My Favorites</Subheader>
                        <div style={styles.gridRoot}>
                            <GridList
                                cellHeight={180}
                                style={styles.gridList}
                            >
                                {this.state.userFavorites.map((venue) => (
                                    <GridTile
                                        containerElement={<Link to={{ pathname: "/venue/" + venue.id }} />}
                                        key={venue.id}
                                        title={venue.name}
                                    >
                                        <img src={venue.image} alt={venue.name}/>
                                    </GridTile>
                                ))}
                            </GridList>
                        </div>
                    </List>
                </div>
            )
        } else {
            user = (
                <h2>No user information found</h2>
            )
        }
        return (
            <div>
                {user}
            </div>
        )
    }
}

export default Account;