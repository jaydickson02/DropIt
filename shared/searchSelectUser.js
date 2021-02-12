import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import {Form, Nav, Card} from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import axios from 'axios'

export default class extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: props.data.users,
            filteredUsers: props.data.users,
            deviceID: props.data.deviceID
            //filters: props.filters
        }
    }

    render() {

        let updateSearch = (event) => {

            let filteredUsers = [];

            if(event.target.value){
                
                let byName = this.state.users.filter(user => {return user.name.toLowerCase().includes(event.target.value.toLowerCase())})

                let byDate = this.state.users.filter(user => {return user.date.toLowerCase().includes(event.target.value.toLowerCase())})

                let byId = this.state.users.filter(user => {return user.id.toLowerCase().includes(event.target.value.toLowerCase())})

                filteredUsers = byId.concat(byName).concat(byDate);
                

            } else {
                filteredUsers = this.state.users;
            }

            

            this.setState({filteredUsers: filteredUsers})
        }

        let assignUser = (user) => {

            console.log('running');

            axios.post('https://drop-it-db.vercel.app/api/update', {
                student: user.name,
                id: user.id,
                idSerialNumber: this.state.deviceID 
              })
              .then(function (response) {
                window.location.reload();
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }

        return(
            <div>
                <Nav style={{paddingBottom: '15px'}}>
                    <Nav.Item>
                    <Form inline>
                        <Form.Control type="text" placeholder="Search" className="mr-sm-2" onChange={updateSearch}/>
                    </Form>
                    </Nav.Item>
                </Nav>

                {this.state.filteredUsers.map(user => 
                        
                        
                        <Card style={{ width: '100%', marginBottom: '5px' }}>
                        <Card.Body>
                            <Card.Title>{user.name}</Card.Title>
                            <Button variant="primary" onClick={function(){assignUser(user)}}>
                                Assign
                            </Button>
                        </Card.Body>
                        </Card>
                    
                        /*
                    <Form action='https://drop-it-db.vercel.app/api/update' method='post'>
                    <Form.Group controlId="newStudentInput">
                        <Form.Control name='student' type='hidden' value={user.name}></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="studentID">
                        <Form.Control name='id' type='hidden' value={user.id}></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="idSerialNumber">
                        <Form.Control name='idSerialNumber' type='hidden' value={this.state.deviceID}></Form.Control>
                    </Form.Group>

                </Form> */



                ) }
            </div>
        )
      
    }
}