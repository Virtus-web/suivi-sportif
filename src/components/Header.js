import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../assets/Logo.svg'

const HeaderContainer = styled.header`
    border: 1px solid black;
    background-color: black;
    height: 5.5em;
    padding-right: 2em;
    padding-left: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LogoHeader = styled.img`
    height: 55px;
`

const NavContainer = styled.nav`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledLink = styled(Link)`
    text-decoration:none;
    color: white;
    font-size: 1.4em;
`

const Header = () => {

    return (
        <HeaderContainer>
            <Link to="/suivi-sportif">
                <LogoHeader src={Logo} />
            </Link>
            <NavContainer>
                <StyledLink to="#">Accueil</StyledLink>
                <StyledLink to="#">Profil</StyledLink>
                <StyledLink to="#">Réglage</StyledLink>
                <StyledLink to="#">Communauté</StyledLink>
            </NavContainer>
        </HeaderContainer>
    )
}

export default Header

