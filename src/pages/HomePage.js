import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import Login from '../components/Login'
import Woman from '../assets/Woman.png'
import Man from '../assets/Man.png'


const BlocPage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`

const ProfileWrapper = styled.div`
    margin: auto;
    width: 30em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

function HomePage() {

    return (
        <BlocPage>
            <Sidebar />
            <ProfileWrapper>
                <Login icon={Woman} name="Cecilia" id="18" sex={false} />
                <Login icon={Man} name="Karl" id="12" sex={true} />
            </ProfileWrapper>
        </BlocPage>
    )
}

export default HomePage