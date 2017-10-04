import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
    titleStyle: {
      color: 'rgb(0, 188, 212)',
    },
  };

class List extends Component {
    render() {
      return (
        <div style={styles.root}>
            <MuiThemeProvider>
                <GridList style={styles.gridList} cols={2.2}>
                    {this.props.tilesData.map((tile) => (
                        <GridTile
                            containerElement={<Link to={{ pathname: "/venue/" + tile.id  }}/>}    
                            key={tile.id}
                            title={tile.name}
                            actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                            titleStyle={styles.titleStyle}
                            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                            >
                            <img src={tile.image} alt={tile.title} />
                        </GridTile>
                    ))}
                </GridList>
            </MuiThemeProvider>
        </div>
      );
    }
  }
  
  export default List;