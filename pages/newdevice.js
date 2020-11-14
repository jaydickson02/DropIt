import Layout from '../shared/layout'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'

const index = () => {


return(
<Layout activeLink={'/'}>
<Container>
<Form action='https://drop-it-db.vercel.app/api/add' method='post'>
  <Form.Group controlId="formDeviceType">
    <Form.Label>Device Type</Form.Label>
    <Form.Control name='type' as="select">
      <option>Chromebook</option>
      <option>iPad</option>
      <option>Laptop</option>
      <option>Monitor</option>
      <option>Other</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="formDeviceSerialNumber">
    <Form.Label>Serial Number</Form.Label>
    <Form.Control name='serialNumber' type="text" placeholder="Serial Number" />
  </Form.Group>

  <Form.Group controlId="formCurrentDeviceUser">
    <Form.Label>Current User</Form.Label>
    <Form.Control name='currentUser' type="text" placeholder="Ex. Jane Doe" />
  </Form.Group>

  <Form.Group controlId="formDeviceCondition">
    <Form.Label>Condition</Form.Label>
    <Form.Control name='deviceCondition' as="select">
      <option>Working</option>
      <option>Repairing</option>
      <option>Broken</option>
    </Form.Control>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
</Layout>
)
}

export default index