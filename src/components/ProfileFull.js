import styled from 'styled-components'
import Name from './Name'
import StatsBloc from './StatsBloc'


const BlocProfile = styled.div`
    width: 100%;
    ${'' /* height: 100vh; */}
    ${'' /* Ne pas mettre de hauteur ici pour que les contenrus enfants puissent faire 100vh et que celui-ci s'adapte */}
    padding: 3em;
`

const ProfileFull = () => {
    return (
        
        <BlocProfile>
            <Name />
            <StatsBloc />
        </BlocProfile>
    )
}

export default ProfileFull
