import React, { Component } from 'react'
import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import VenueMenu from './VenueMenu'

const styles = {
    media: {
        'max-width': '40%',
        'min-width': '40%',
    },
};

class Venue extends Component {
    constructor() {
        super();
        this.state = {
            venue_info: {},
            menu_items: []

        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/venue/" + this.props.match.params.id)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ venue_info: responseJson.data });
            })
            .catch((error) => {
                console.error(error);
            });
        fetch("http://localhost:8080/menu_items?venue_id=" + this.props.match.params.id)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ menu_items: responseJson.data });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <MuiThemeProvider>
                <Card >
                    <CardHeader
                        title={this.state.venue_info.name}
                        subtitle={this.state.venue_info.address + " " + this.state.venue_info.city + " " + this.state.venue_info.zip}
                    />
                    <CardMedia
                        style={styles.media}
                    >
                        <img src={this.state.venue_info.image} alt={this.state.venue_info.title} />
                    </CardMedia>
                    {/* <CardTitle title="Card title" subtitle="Card subtitle" /> */}
                    <CardText children={<VenueMenu menu_items={this.state.menu_items} />} />


                    {/* <CardActions>
                        <FlatButton label="Action1" />
                        <FlatButton label="Action2" />
                    </CardActions> */}
                </Card>
            </MuiThemeProvider>
        )
    }
}

export default Venue;
