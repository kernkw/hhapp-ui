import React, { Component } from 'react'
// import {GridList, GridTile} from 'material-ui/GridList';
// import IconButton from 'material-ui/IconButton';
// import Subheader from 'material-ui/Subheader';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Subheader from 'material-ui/Subheader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import List from './List'

// const styles = {
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'space-around',
//     },
//     gridList: {
//       display: 'flex',
//       flexWrap: 'nowrap',
//       overflowX: 'auto',
//     },
//     titleStyle: {
//       color: 'rgb(0, 188, 212)',
//     },
//   };

// const popularTilesData = [
//   {
//     id: 1,
//     img: 'http://coloradobites.com/wp-content/uploads/2015/05/panzanococktail1.jpg',
//     title: 'Panzano',
//   },
//   {
//     id: 2,
//     img: 'https://www.totalhappyhour.com/preview/500-450/content/files/mod.happyhour/42959504e05245439bd59f449f106cd7.jpg',
//     title: 'The Fainting Goat',
//   },
//   {
//     id: 3,
//     img: 'http://denver.thedrinknation.com/images/bars/lingerdenver.jpg',
//     title: 'Linger',
//   },
// ];

// const roofTopTilesData = [
//   {
//     id: 4,
//     img: 'http://denver.thedrinknation.com/images/bars/lingerdenver.jpg',
//     title: 'Linger',
//   },
//   {
//     id: 5,
//     img: 'http://coloradobites.com/wp-content/uploads/2015/05/panzanococktail1.jpg',
//     title: 'Panzano',
//   },
//   {
//     id: 6,
//     img: 'https://www.totalhappyhour.com/preview/500-450/content/files/mod.happyhour/42959504e05245439bd59f449f106cd7.jpg',
//     title: 'The Fainting Goat',
//   },
// ];

// const drinkSpecialsTilesData = [
//   {
//     id: 7,
//     img: 'https://www.totalhappyhour.com/preview/500-450/content/files/mod.happyhour/42959504e05245439bd59f449f106cd7.jpg',
//     title: 'The Fainting Goat',
//   },
//   {
//     id: 8,
//     img: 'http://denver.thedrinknation.com/images/bars/lingerdenver.jpg',
//     title: 'Linger',
//   },
//   {
//     id: 9,
//     img: 'http://coloradobites.com/wp-content/uploads/2015/05/panzanococktail1.jpg',
//     title: 'Panzano',
//   },
// ];

// const foodSpecialsTilesData = [
//   {
//     img: 'https://www.totalhappyhour.com/preview/500-450/content/files/mod.happyhour/42959504e05245439bd59f449f106cd7.jpg',
//     title: 'The Fainting Goat',
//   },
//   {
//     img: 'http://denver.thedrinknation.com/images/bars/lingerdenver.jpg',
//     title: 'Linger',
//   },
//   {
//     img: 'http://coloradobites.com/wp-content/uploads/2015/05/panzanococktail1.jpg',
//     title: 'Panzano',
//   },
// ];

const mainPageList = ['popularTilesData','drinkSpecialsTilesData', 'foodSpecialsTilesData', 'roofTopTilesData' ]


/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
class VenueList extends Component {
  constructor(){
    super();
    this.state = {
      popularTilesData: [],
      drinkSpecialsTilesData: [],
      foodSpecialsTilesData: [],
      roofTopTilesData: []
    }
  }

  componentDidMount() {
      fetch("http://localhost:8080/venue_list?name=Popular")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ popularTilesData: responseJson.data});
      })
      .catch((error) => {
        console.error(error);
      });

  }

  render() {
    return (
 
      <MuiThemeProvider>
      {console.log("this.state.popularTilesData", this.state.popularTilesData)}
        <Subheader>Popular</Subheader>
        <List tilesData={this.state.popularTilesData} />
        <Subheader>Best Drink Specials</Subheader>
        <List tilesData={this.state.drinkSpecialsTilesData} />
        <Subheader>Best Food Specials</Subheader>
        <List tilesData={this.state.foodSpecialsTilesData} />
        <Subheader>Roof Top</Subheader>
        <List tilesData={this.state.roofTopTilesData} />
      </MuiThemeProvider>
    );
  }
}

export default VenueList;