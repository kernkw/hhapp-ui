import React, { Component } from 'react'
import Subheader from 'material-ui/Subheader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import List from './List'


/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
class VenueList extends Component {
  constructor() {
    super();
    this.state = {
      popularTilesData: [],
      drinkSpecialsTilesData: [],
      foodSpecialsTilesData: [],
      roofTopTilesData: []
    }
  }

  componentDidMount() {
    // remove duplication here
    // cache happy hours so page wont reload each time
    let url = process.env.REACT_APP_API_URL
    fetch(url + "/venue_list?name=Popular")
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.data.length > 0) {
          this.setState({ popularTilesData: responseJson.data });
        }
      })
      .catch((error) => {
        console.error(error);
      });
    fetch(url +"/venue_list?name=Best%20Drink%20Specials")
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.data.length > 0) {
          this.setState({ drinkSpecialsTilesData: responseJson.data });
        }
      })
      .catch((error) => {
        console.error(error);
      });
    fetch(url + "/venue_list?name=Best%20Food%20Specials")
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.data.length > 0) {
          this.setState({ foodSpecialsTilesData: responseJson.data });
        }
      })
      .catch((error) => {
        console.error(error);
      });
    fetch(url + "/venue_list?name=Roof%20Top")
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.data.length > 0) {
          this.setState({ roofTopTilesData: responseJson.data });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Subheader>Popular</Subheader>
          <List tilesData={this.state.popularTilesData} />
          <Subheader>Best Drink Specials</Subheader>
          <List tilesData={this.state.drinkSpecialsTilesData} />
          <Subheader>Best Food Specials</Subheader>
          <List tilesData={this.state.foodSpecialsTilesData} />
          <Subheader>Roof Top</Subheader>
          <List tilesData={this.state.roofTopTilesData} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default VenueList;