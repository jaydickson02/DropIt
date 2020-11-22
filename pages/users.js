import { Container, Button, Card } from 'react-bootstrap'
import Layout from '../shared/layout'
import { useRouter } from 'next/router'
import Search from '../shared/searchUsers'

let users = (props) => {

    const router = useRouter();

    return(
        <Layout activeLink={'/users'}>
            <Container>
                <Button style={{marginRight: '10px'}} onClick={() => {router.back()}}>Back</Button>
                <Button href='/newuser'>Add User</Button>
                <hr />
                
                <Search users = {props.users}/>
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