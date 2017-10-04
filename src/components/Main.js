import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'
import Venue from './Venue'
import VenueList from './VenueList';

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={VenueList} />
                <Route path='/venue/:id' component={Venue} />
            </Switch>
        )
    }
}

export default Main;