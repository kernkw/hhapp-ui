import React, { Component } from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import NumericLabel from 'react-pretty-numbers';
import FaGlass from 'react-icons/lib/fa/glass';
import MdLocalPizza from 'react-icons/lib/md/local-pizza';
import MdLocalRestaurant from 'react-icons/lib/md/local-restaurant'


const styles = {
    paper: {
        width: '70%',
        marginTop: 3,
        overflowX: 'auto',
    },
    header: {
        height: '10px',
    },
    tableRow: {
        padding: 0,
    }
};

let currencyFormat = {
    justification: 'L',
    currency: true,
    precision: 2,
};

class VenueMenu extends Component {
    constructor(props) {
        super();
        this.state = {
            menu_items: []
        }
    }


    setCatIcon(iconName) {
        switch (iconName) {
            case "food":
                return <MdLocalPizza />
            case "drink":
                return <FaGlass />
            default:
                return <MdLocalRestaurant />
        }
    }

    render() {
        return (

            <Paper style={styles.paper}>

                <Table height={"100p"}>
                    <TableHeader style={styles.header} displaySelectAll={false}>
                        <TableRow >
                            <TableHeaderColumn >Description</TableHeaderColumn>
                            <TableHeaderColumn>Price</TableHeaderColumn>
                            <TableHeaderColumn >Deal Type</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {this.props.menu_items.map(n => {
                            return (
                                <TableRow key={n.id} style={styles.tableRow}>
                                    <TableRowColumn>{n.description}</TableRowColumn>
                                    <TableRowColumn numeric><NumericLabel params={currencyFormat}>{n.price}</NumericLabel></TableRowColumn>
                                    <TableRowColumn>{this.setCatIcon(n.category)}</TableRowColumn>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>

        )
    }
}

export default VenueMenu;