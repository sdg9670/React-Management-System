import React from 'react';
import { Button } from '@material-ui/core';

class CustomerDelete extends React.Component {

    deleteCustomer(id) {
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }

    render() {
        return(
            <Button variant="contained" onClick={(e) => {this.deleteCustomer(this.props.id)}}>삭제</Button>
        );
    }
}

export default CustomerDelete;