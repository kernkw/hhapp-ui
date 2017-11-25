import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { GridList, GridTile } from 'material-ui/GridList';
import { auth } from '../firebase.js';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
};

class List extends Component {
  addToFavorites(id) {
    fetch('http://apihhapp-env.us-west-2.elasticbeanstalk.com/create_user_favorite', {
      method: 'POST',
      body: JSON.stringify({
        user_id: auth.currentUser.uid,
        venue_id: id,
      })
    })
  }

  render() {
    return (
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2} >
          {this.props.tilesData.map((tile) => (
            <GridTile
              containerElement={<Link to={{ pathname: "/venue/" + tile.id }} />}
              key={tile.id}
              title={tile.name}
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <img src={tile.image} alt={tile.title} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default List;