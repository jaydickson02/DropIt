import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Search from './searchSelectUser'

export default class extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props.data.idSerialNumber);

        if(this.props.data.show){
            return(
            <div>
                <Search data = {{users: this.props.data.users, deviceID: this.props.data.idSerialNumber}}/>
            </div>
            );
        } else {
            return (<div></div>);
        }
      
    }
}

  
