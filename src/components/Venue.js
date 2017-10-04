import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
    // card: {
    //     height: 200,
    // },
    media: {
        'max-width': '25%',
        'min-width': '25%',
    },
};

const venues = []


class Venue extends Component {
    render() {
        let id = this.props.match.params.id
        console.log('venue_id: ',id)
        let venue_info = {
            id: 1,
            img: 'http://coloradobites.com/wp-content/uploads/2015/05/panzanococktail1.jpg',
            title: 'Panzano',
            address: "909 17th St, Denver, CO 80202",
          }
        return (
            <MuiThemeProvider>
                <Card >
                    <CardHeader
                        title={venue_info.title}
                        subtitle={venue_info.address}
                    />
                    <CardMedia
                        style={styles.media}
                    >
                        <img src={venue_info.img} alt={venue_info.title} />
                    </CardMedia>
                    {/* <CardTitle title="Card title" subtitle="Card subtitle" /> */}
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
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
