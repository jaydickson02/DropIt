import { useRouter } from 'next/router'
import Layout from '../../shared/layout'
import DisplayData from '../../shared/displayDevice'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'

const device = (props) => {
    
const router = useRouter();
const { deviceSN } = router.query;

let device;

for(let i = 0; i < props.response.devices.length; i++){
    for(let i = 0; i < props.response.devices.length; i++){
    if(props.response.devices[i].serialNumber == deviceSN){
        device = props.response.devices[i];
    }
}
}

if(!device){
    //Change to error page later
    return(<h1>Error Not Found</h1>)
}

return(
<Layout activeLink={'/'}>
    <Container>
        <Button onClick={() => {router.back()}}>Back</Button>
        <hr />
    </Container>
    <DisplayData device={device}/>
</Layout>
)
}
    

device.getInitialProps = async (ctx) => {
    

    const resDevices = await fetch('https://drop-it-db.vercel.app/api/devices')
    const devJson = await resDevices.json()

    const resUsers = await fetch('https://drop-it-db.vercel.app/api/users')
    const userJson = await resUsers.json()

    let json = {'devices' : devJson, 'users' : userJson};
    
    return { response: json }
  }

export default device