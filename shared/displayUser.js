import React, { Component } from 'react'
import { Container, Button } from 'react-bootstrap'


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

        if (!this.props.user.name){
            this.props.user.name = 'Undefined';
        }
        if (!this.props.user.id){
            this.props.user.id = 'Undefined';
        }
        if (!this.props.user.date){
            this.props.user.date = 'Undefined';
        }
        if (!this.props.user.device){
            this.props.user.device = 'None';
        }

    return(
        <Container>
            
            <h2>
                {this.props.user.name}: <em>{this.props.user.id}</em>
            </h2>
            <h5>
                Status: <em style ={{color:'green'}}>{this.props.user.date}</em>
            </h5>
        
            <hr />

                <h3>Deployed to: {this.props.user.device}</h3>

        </Container>
    )
}
}

