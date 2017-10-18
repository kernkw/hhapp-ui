import { Switch, Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Venue from './Venue'
import VenueList from './VenueList';
import Account from './Account';
import { isAuthenticated } from '../firebase.js';

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={VenueList} />
                <Route path='/venue/:id' component={Venue} />
                <MatchWhenAuthorized pattern="/account" component={Account} />
            </Switch>
        )
    }
}

const MatchWhenAuthorized = ({ component: Component, ...rest }) => (
    <Route {...rest} render={renderProps => (
        isAuthenticated() ? (
            <Component {...renderProps} />
        ) : (
                <Redirect to={{
                    pathname: '/',
                    state: { from: renderProps.location }
                }} />
            )
    )} />
)

export default Main;