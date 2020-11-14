import { useRouter } from 'next/router'
import Layout from '../shared/layout'
import DisplayData from '../shared/displayData'

const index = (props) => {
    
const router = useRouter();
const { deviceSN } = router.query;

let device;

for(let i = 0; i < props.devices.length; i++){
    if(props.devices[i].serialNumber == deviceSN){
        device = props.devices[i];
    }
}

if(!device){
    //Change to error page later
    return(<h1>Error Not Found</h1>)
}

return(
<Layout activeLink={'/'}>
    <DisplayData device={device}/>
</Layout>
)
}

index.getInitialProps = async (ctx) => {
    const res = await fetch('https://drop-it-db.vercel.app/api/devices')
    const json = await res.json()
    return { devices: json }
  }

export default index