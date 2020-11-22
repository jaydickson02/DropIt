import { useRouter } from 'next/router'
import Layout from '../shared/layout'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'

const newUser = () => {
const router = useRouter()

return(
<Layout activeLink={'/'}>
<Container>
<Button onClick={() => {router.back()}}>Back</Button>
<hr />
<Form action='https://drop-it-db.vercel.app/api/adduser' method='post'>
  <Form.Group controlId="formDeviceType">
    <Form.Label>Full Name</Form.Label>
    <Form.Control name='name' type="text" placeholder="Ex. Jane Doe"></Form.Control>
  </Form.Group>

  <Form.Group controlId="formDeviceSerialNumber">
    <Form.Label>Student Number</Form.Label>
    <Form.Control name='studentNumber' type="text" placeholder="Student Number" />
  </Form.Group>

  <Form.Group controlId="formCurrentDeviceUser">
    <Form.Label>Assign Device</Form.Label>
    <Form.Control name='device' type="text" placeholder="Search" />
  </Form.Group>

  <Form.Group controlId="formCurrentDeviceUser">
    <Form.Label>Date</Form.Label>
    <Form.Control name='date' type="date" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
</Layout>
)
}

export default newUser;