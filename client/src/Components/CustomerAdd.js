import React from 'react';
import { post } from 'axios';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const useStyle = theme => ({
    container: {
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: 10,
        marginRight: 10,
        width: 200,
    }
});

class CustomerAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: ''
        }
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        this.addCustomer().then((response) => {
            console.log(response.data);
            this.props.stateRefresh();
        })
        this.setState({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: ''
        });
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        return post(url, formData, config);
    }

    render() {
        const { classes } = this.props;
        return (
            <form onSubmit={this.handleFormSubmit} className={classes.container} noValidate autoComplete="off">
                <h1>고객 추가</h1>
                <Button className={classes.textField} variant="contained" component="label"> <input style={{display:'none'}} type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/>프로필 이미지</Button><br/>
                <TextField className={classes.textField} margin="normal" label="이름" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br/>
                <TextField className={classes.textField} margin="normal"  label="생년월일" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/>
                <TextField className={classes.textField} margin="normal"  label="성별" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
                <TextField className={classes.textField} margin="normal"  label="직업" name="job" value={this.state.job} onChange={this.handleValueChange}/><br/>
                <Button className={classes.textField} variant="contained" type="submit">추가하기</Button>
            </form>
        );
    }
}

export default withStyles(useStyle)(CustomerAdd);