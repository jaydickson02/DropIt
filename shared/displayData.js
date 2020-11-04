import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'


const display = (props) => {
    console.log(props)
    return(
        <Container>
            
            <h2>
                {props.device.type}: <em>{props.device.serialNumber}</em>
            </h2>
            <h5>
                Status: <em style ={{color:'green'}}>{props.device.condition}</em>
            </h5>
        
            <hr />

                <h3>Deployed to: {props.device.currentUser.name}</h3>

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
                        {props.device.students.map(student => 
                        
                        <tr>
                            <td>{student.name}</td>
                            <td>{student.date}</td>
                            <td>{student.id}</td>
                        </tr>
                        
                        )}
                    </tbody>
                </Table>
            

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>

        </Container>
    )

}

export default display;