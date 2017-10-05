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
    constructor(){
        super();
        this.state = {
            venue_info: {},
        }
      }
    
      componentDidMount() {
          fetch("http://localhost:8080/venue/" + this.props.match.params.id)
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({ venue_info: responseJson.data});
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
