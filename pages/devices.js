import Layout from '../shared/layout'
import Card from 'react-bootstrap/Card'
import { Container } from 'react-bootstrap'

const devices = (props) => {
    
return(
<Layout activeLink={'/devices'}>
    <Container>
        {props.devices.map(device => 
        
        <Card style={{ width: '100%' }}>
        <Card.Body>
            <Card.Title>{device.serialNumber}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{device.type} • {device.currentUser.name}</Card.Subtitle>
            
            <Card.Link href={'/devices/' + device.serialNumber}>View</Card.Link>
            <Card.Link href="#">Edit</Card.Link>
        </Card.Body>
        </Card>) }
        
    </Container>
</Layout>
)
}

devices.getInitialProps = async (ctx) => {
    const res = await fetch('https://drop-it-db.vercel.app/api/devices')
    const json = await res.json()
    return { devices: json }
  }

export default devices