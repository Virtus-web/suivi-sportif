import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const Wrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration:none;
`

const Picture = styled.img`
    border: 1px solid black;
    box-shadow: ${({ isGirl }) => (isGirl ? '5px 5px 5px pink' : '5px 5px 5px blue')};
    border-radius: 10em;
    object-fit: cover;
    width: 10em;
    height: auto;
`

const ProfileName = styled.h2`
    margin-top: 1em;
    color: ${({ isGirl }) => (isGirl ? 'Pink' : 'blue')};
`

/**
* 
* @typedef {{id: String, icon: String, name: String}} propType
*/

/**
* This stateless component customize the legend of the graphic 
* @param {propType} id Profile user ID
* @param {propType} icon Profile gender
* @param {propType} name Profile user name
*/
function Login({id, icon, name}) {

    return (
        <Wrapper to={`/user/${id}`}>
            <Picture src={icon} alt="profile-icon" isGirl={name === "Cecilia"} />
            <ProfileName isGirl={name === "Cecilia"}>{name}</ProfileName>
        </Wrapper>
    )
}

Login.propTypes = {
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string,
}

Login.defaultProps = {
    id: "12"|"18"
}

export default Login
