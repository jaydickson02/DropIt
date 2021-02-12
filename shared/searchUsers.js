import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import {Form, Nav, Card} from 'react-bootstrap'


export default class extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: props.users,
            filteredUsers: props.users,
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
                        <Card.Subtitle className="mb-2 text-muted">{user.id} • {user.date}</Card.Subtitle>
                        
                        <Card.Link href={'/users/' + user.id}>View</Card.Link>
                        <Card.Link href="#">Edit</Card.Link>
                    </Card.Body>
                    </Card>) }
            </div>
        )
      
    }
}