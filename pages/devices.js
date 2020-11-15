import Layout from '../shared/layout'

const devices = (props) => {
    console.log(props)
return(
<Layout activeLink={'/devices'}>
    {props.devices.map(device => <div><a href={'/devices/' + device.serialNumber}>{device.serialNumber}</a></div>) }
</Layout>
)
}

devices.getInitialProps = async (ctx) => {
    const res = await fetch('https://drop-it-db.vercel.app/api/devices')
    const json = await res.json()
    return { devices: json }
  }

export default devices