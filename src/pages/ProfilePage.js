import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import ProfileFull from '../components/ProfileFull'

const BlocPage = styled.div`
    height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

function ProfilePage() {

    return (
        <BlocPage>
            <Sidebar />
            <ProfileFull />
        </BlocPage>
    )
}

export default ProfilePage