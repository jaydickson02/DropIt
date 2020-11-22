import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import {Form, Nav, Card} from 'react-bootstrap'


export default class extends Component {
    constructor(props){
        super(props);
        this.state = {
            devices: props.devices,
            filteredDevices: props.devices,
            //filters: props.filters
        }
    }

    render() {

        let updateSearch = (event) => {

            let filteredDevices = [];

            if(event.target.value){
                /* Version that allows for a filter props

                for(let i = 0; i < this.state.filters.length; i++){
                    let result = this.state.devices.filter(device => {return device[this.state.filters[i]].toLowerCase().includes(event.target.value.toLowerCase())});
                    

                    filteredDevices = filteredDevices.concat(result);
                }
                */
                
                let byNumber = this.state.devices.filter(device => {return device.serialNumber.toLowerCase().includes(event.target.value.toLowerCase())})

                let byName = this.state.devices.filter(device => {return device.currentUser.name.toLowerCase().includes(event.target.value.toLowerCase())})

                let byType = this.state.devices.filter(device => {return device.type.toLowerCase().includes(event.target.value.toLowerCase())})

                filteredDevices = byNumber.concat(byName).concat(byType);
                

            } else {
                filteredDevices = this.state.devices;
            }

            

            this.setState({filteredDevices: filteredDevices})
        }

        return(
            <div>
                <Nav style={{paddingBottom: '15px'}}>
                    <Nav.Item>
                    <Form inline style={{width: '200%'}}>
                        <Form.Control style={{width: '100%'}} type="text" placeholder="Search" className="mr-sm-2" onChange={updateSearch}/>
                    </Form>
                    </Nav.Item>
                </Nav>

                {this.state.filteredDevices.map(device => 
                        
                    <Card style={{ width: '100%', marginBottom: '5px'}}>
                    <Card.Body>
                        <Card.Title>{device.serialNumber}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{device.type} • {device.currentUser.name}</Card.Subtitle>
                        
                        <Card.Link href={'/devices/' + device.serialNumber}>View</Card.Link>
                        <Card.Link href="#">Edit</Card.Link>
                    </Card.Body>
                    </Card>) }
            </div>
        )
      
    }
}