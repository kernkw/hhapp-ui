import React, { Component } from 'react'
import { isAuthenticated, curUserID } from '../firebase.js';
import { Card, CardHeader, CardMedia, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import VenueMenu from './VenueMenu'


const styles = {
    media: {
        'maxWidth': '40%',
        'minWidth': '40%',
    },
};

class Venue extends Component {
    constructor() {
        super();
        this.state = {
            venue_info: {},
            user_favorite: {},
            menu_items: [],
            favorited: false,
        }
    }

    componentDidMount() {
        fetch("http://apihhapp-env.us-west-2.elasticbeanstalk.com/venue/" + this.props.match.params.id)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ venue_info: responseJson.data });
            })
            .catch((error) => {
                console.error(error);
            });
        fetch("http://apihhapp-env.us-west-2.elasticbeanstalk.com/menu_items?venue_id=" + this.props.match.params.id)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ menu_items: responseJson.data });
            })
            .catch((error) => {
                console.error(error);
            });
        if (isAuthenticated()) {
            fetch("http://apihhapp-env.us-west-2.elasticbeanstalk.com/user_favorites/" + this.props.match.params.id + "/" + curUserID)
                .then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson.data) {
                        this.setState({ favorited: true });
                        this.setState({ user_favorite: responseJson.data });
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    addToFavorites() {
        fetch('http://apihhapp-env.us-west-2.elasticbeanstalk.com/create_user_favorite', {
            method: 'POST',
            body: JSON.stringify({
                user_id: curUserID,
                venue_id: Number(this.props.match.params.id),
            })
        })
        this.setState({ favorited: true });
    }

    removeFromFavorites(id) {
        fetch('http://apihhapp-env.us-west-2.elasticbeanstalk.com/user_favorite/' + id, {
            method: 'POST',
        })
        this.setState({ favorited: false});
        this.setState({ user_favorite: {} });
    }

    render() {
        let addToFavs = null;
        if (isAuthenticated()) {
            if (!this.state.favorited) {
                addToFavs = (<CardActions>
                    <div>
                        <RaisedButton label="Add To Favorites" onClick={this.addToFavorites.bind(this)} />
                    </div>
                </CardActions>)
            } else {
                addToFavs = (<CardActions>
                    <div>
                        <RaisedButton label="Remove From Favorites" onClick={this.removeFromFavorites.bind(this, this.state.user_favorite.id)} />
                    </div>
                </CardActions>)
            }
    
        }

        return (

                <Card >
                    <CardHeader
                        title={this.state.venue_info.name}
                        subtitle={this.state.venue_info.address + " " + this.state.venue_info.city + " " + this.state.venue_info.zip}
                    />
                    <CardMedia style={styles.media}>
                        <img src={this.state.venue_info.image} alt={this.state.venue_info.title} />
                    </CardMedia>
                    {addToFavs}
                    <CardText children={<VenueMenu menu_items={this.state.menu_items} />} />
                </Card>
        
        )
    }
}

export default Venue;
