import { useRouter } from 'next/router'
import Layout from '../shared/layout'
import Card from 'react-bootstrap/Card'
import { Button, Container, Form, Nav } from 'react-bootstrap'
import Search from '../shared/searchDevices'

const devices = (props) => {

const router = useRouter();


return(

<Layout activeLink={'/devices'}>
    <Container>
        <Button style={{marginRight: '10px'}} onClick={() => {router.back()}}>Back</Button>
        <Button href='/newdevice'>New Device</Button>
        <hr />

        <Search devices={props.devices}/>

    </Container>
</Layout>
)
}

devices.getInitialProps = async (ctx) => {
    const res = await fetch('https://drop-it-db.vercel.app/api/devices')
    const json = await res.json()
    return { devices: json }
  }

export default devices;