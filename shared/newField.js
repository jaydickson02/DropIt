import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default class extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props.data.idSerialNumber);

        if(this.props.data.show){
            return(
            <Form action='https://drop-it-db.vercel.app/api/update' method='post'>
                <Row>
                    <Col>
                        <Form.Group controlId="newStudentInput">
                            <Form.Control name='student' type='text'></Form.Control>
                        </Form.Group>
                    </Col>

                    <Col> 
                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                    </Col>
                </Row>

                <Form.Group controlId="idSerialNumber">
                    <Form.Control name='idSerialNumber' type='hidden' value={this.props.data.idSerialNumber}></Form.Control>
                </Form.Group>

            </Form>
            );
        } else {
            return (<div></div>);
        }
      
    }
}

  
