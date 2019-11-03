import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    image: {
        width: 60,
        height: 60
    }
});

class Customer extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={"http://www.simpf.ga:5000" + this.props.image} alt="profile" className={classes.image}></img></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
                <TableCell><CustomerDelete id={this.props.id} stateRefresh={this.props.stateRefresh}/></TableCell>
            </TableRow>
        );
    }
}

export default withStyles(styles)(Customer);