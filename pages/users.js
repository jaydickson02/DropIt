import { Container, Button, Card } from 'react-bootstrap'
import Layout from '../shared/layout'

let users = (props) => {
    return(
        <Layout activeLink={'/users'}>
            <Container>
                <Button style={{marginRight: '10px'}} onClick={() => {router.back()}}>Back</Button>
                <Button href='/newuser'>Add User</Button>
                <hr />
                
                {props.users.map(user => 
        
                    <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{user.id} • {user.date}</Card.Subtitle>
                        
                        <Card.Link href={'/devices/' + user.id}>View</Card.Link>
                        <Card.Link href="#">Edit</Card.Link>
                    </Card.Body>
                    </Card>) }
            </Container>
        </Layout>
    )
}

users.getInitialProps = async (ctx) => {
    const res = await fetch('https://drop-it-db.vercel.app/api/users')
    const json = await res.json()
    return { users: json }
  }

export default users;