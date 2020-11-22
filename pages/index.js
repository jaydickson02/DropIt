import { Container, Alert, Jumbotron, Button } from 'react-bootstrap'
import Layout from '../shared/layout'

const index = (props) => {
    console.log(props)
return(
<Layout activeLink={'/'}>
    <Container>

    <hr />

        <Alert variant={'primary'}>
            This is the landing page for DropIT. Welcome. We're currently under construction. Feel free to have a look around!
        </Alert>

    <hr />

        <Jumbotron>
            <h1>DropIt</h1>
            <p>
                We're working to build a clean, minimal and highly functional system that's capable of managing all the needs of an IT Department with respect to hardware. Soloutions are available for inventory organisation, tracking repairs and managing users.
            </p>

            <p>
                Click below to check out the devices page. 
            </p>
                
            
            <p>
                <Button href="/devices" variant="primary">Go</Button>
            </p>
        </Jumbotron>
    </Container>
</Layout>
)
}

export default index