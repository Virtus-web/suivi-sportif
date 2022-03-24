import { useParams } from 'react-router-dom'
// import { useCall } from '../utils/hooks'
// import { Loader } from '../utils/styles/loader'
import styled from 'styled-components'

import { userData } from '../data/user'


const BlocName = styled.div`
margin-top: 3em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const UserNameContainer = styled.div`
    padding-right: 10px;
    line-height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

const ToggleName = styled.span`
    color: red;
`

const UserWelcome = styled.h1`
    margin: 0;
`

const UserCheerup = styled.p`
    margin: 0;
`

const Name = () => {

    /**
    * @typedef {{profileId: Number}} URLparameter
    */

    /**
    * @type {URLparameter} profileId
    */
    const { profileId }  = useParams()
    // const { data, isLoading, error } = useCall (
    //     `http://localhost:3000/user/${profileId}`
    // )

    /**
    * @constant
    * @type {Array.<String|Object|Number>}
    * @default
    */
    // const profileData = data?.data

    // if (error) {
    //     return <span>Oups il y a eu un problème</span>
    // }

    return (
        <BlocName>
            {
                userData
                .filter(user => user.id === parseInt(profileId)).map(({userInfos}, index) => (
                    <UserNameContainer key={index}>
                        <UserWelcome>Bonjour <ToggleName>{userInfos.firstName}</ToggleName></UserWelcome>
                        <UserCheerup>Félicitation ! Vous avez explosé vos objectifs hier 👏</UserCheerup>
                    </UserNameContainer>
                ))
            }
        </BlocName>
    )
}

export default Name
