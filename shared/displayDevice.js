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

        if (!this.props.data.device.type){
            this.props.data.device.type = 'Undefined';
        }
        if (!this.props.data.device.serialNumber){
            this.props.data.device.serialNumber = 'Undefined';
        }
        if (!this.props.data.device.condition){
            this.props.data.device.condition = 'Undefined';
        }
        if (!this.props.data.device.currentUser){
            this.props.data.device.currentUser = 'None';
        }
        if (!this.props.data.device.students){
            this.props.data.device.students = [{name: 'None', date: 'none', id: 'none'}];
        }

    return(
        <Container>
            
            <h2>
                {this.props.data.device.type}: <em>{this.props.data.device.serialNumber}</em>
            </h2>
            <h5>
                Status: <em style ={{color:'green'}}>{this.props.data.device.condition}</em>
            </h5>
        
            <hr />

                <h3>Deployed to: {this.props.data.device.currentUser.name}</h3>

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
                        {this.props.data.device.students.map(student => 
                        
                        <tr>
                            <td>{student.name}</td>
                            <td>{student.date}</td>
                            <td>{student.id}</td>
                        </tr>
                        
                        )}
                    </tbody>

                </Table>
                
                <NewField data={{show: this.state.fieldState, idSerialNumber: this.props.data.device.serialNumber}}/>

                <Button onClick={fieldToggle}>
                    Assign Student
                </Button>

        </Container>
    )
}
}

