import Layout from '../shared/layout'
import DisplayData from '../shared/displayData'

const devices = (props) => {
    console.log(props)
return(
<Layout activeLink={'/devices'}>
    {props.devices.map(device => <div><a href={device.serialNumber}>{device.serialNumber}</a></div>) }
</Layout>
)
}

devices.getInitialProps = async (ctx) => {
    const res = await fetch('https://drop-it-db.vercel.app/api/devices')
    const json = await res.json()
    return { devices: json }
  }

export default devices