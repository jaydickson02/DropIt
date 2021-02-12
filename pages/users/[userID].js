import { useRouter } from 'next/router'
import Layout from '../../shared/layout'
import DisplayData from '../../shared/displayUser'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'

const user = (props) => {
    
const router = useRouter();
const { userID } = router.query;

let user;

for(let i = 0; i < props.users.length; i++){
    if(props.users[i].id == userID){
        user = props.users[i];
    }
}

if(!user){
    //Change to error page later
    return(<h1>Error Not Found</h1>)
}

return(
<Layout activeLink={'/'}>
    <Container>
        <Button onClick={() => {router.back()}}>Back</Button>
        <hr />
    </Container>
    <DisplayData user={user}/>
</Layout>
)
}

user.getInitialProps = async (ctx) => {
    const res = await fetch('https://drop-it-db.vercel.app/api/users')
    const json = await res.json()
    return { users: json }
  }

export default user