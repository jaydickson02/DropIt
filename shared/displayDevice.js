import React, { Component } from 'react'
import { Container, Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import NewField from './newField'


export default class extends Component {

    constructor(props){
        super(props)
        this.state = {fieldState: false};
    }
    
    render(){

        let fieldToggle = () => {
            if(this.state.fieldState){
                this.setState({fieldState: false})
            } else {
                this.setState({fieldState: true}); 
            }
        }

        //Values to default to if relevant data is not stored in DB.

        if (!this.props.device.type){
            this.props.device.type = 'Undefined';
        }
        if (!this.props.device.serialNumber){
            this.props.device.serialNumber = 'Undefined';
        }
        if (!this.props.device.condition){
            this.props.device.condition = 'Undefined';
        }
        if (!this.props.device.currentUser){
            this.props.device.currentUser = 'None';
        }
        if (!this.props.device.students){
            this.props.device.students = [{name: 'None', date: 'none', id: 'none'}];
        }

    return(
        <Container>
            
            <h2>
                {this.props.device.type}: <em>{this.props.device.serialNumber}</em>
            </h2>
            <h5>
                Status: <em style ={{color:'green'}}>{this.props.device.condition}</em>
            </h5>
        
            <hr />

                <h3>Deployed to: {this.props.device.currentUser.name}</h3>

                <h3>User History</h3>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Issue Date</th>
                        <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.device.students.map(student => 
                        
                        <tr>
                            <td>{student.name}</td>
                            <td>{student.date}</td>
                            <td>{student.id}</td>
                        </tr>
                        
                        )}
                    </tbody>

                </Table>
                
                <NewField data={{show: this.state.fieldState, idSerialNumber: this.props.device.serialNumber}}/>

                <Button onClick={fieldToggle}>
                    New Student
                </Button>

        </Container>
    )
}
}

