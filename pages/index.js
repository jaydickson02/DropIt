import Layout from '../shared/layout'
import DisplayData from '../shared/displayData'

const index = (props) => {
    console.log(props)
return(
<Layout activeLink={'/'}>
    <DisplayData device={props.devices[0]}/>
</Layout>
)
}

index.getInitialProps = async (ctx) => {
    const res = await fetch('https://drop-it-db.vercel.app/api/devices')
    const json = await res.json()
    return { devices: json }
  }

export default index