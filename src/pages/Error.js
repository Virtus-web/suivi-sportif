import { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/styles/color'

const ErrorTitle = styled.h2`
    color: ${colors.secondary};
    font-weight: bold;
    font-size: 288px;
    margin: auto;
    text-align: center;
    @media all and (max-width: 480px){
        font-size: 96px;
        margin-top: 1em;
    }
`

const ErrorDescription = styled.p`
    color: ${colors.primary};
    font-weight: 500;
    font-size: 36px;
    margin: auto;
    text-align: center;
    @media all and (max-width: 480px){
        font-size: 18px;
    }
`

const ErrorBack = styled(Link)`
    display: inline-block;
    width: 100%;
    color: ${colors.primary};
    font-weight: 500;
    font-size: 18px;
    text-decoration-line: underline;
    margin: 5em auto auto auto;
    text-align: center;
    @media all and (max-width: 480px){
        font-size: 14px;
    }
`

export class Error extends Component {
    render() {
        return (
            <div>
                <ErrorTitle>404</ErrorTitle>
                <ErrorDescription>Oups! La page que vous demandez n'existe pas.</ErrorDescription>
                {/* <ErrorBack exact to="/user">Retourner sur la page de profile</ErrorBack> */}
                <ErrorBack exact to="/">Retourner sur la page de profile</ErrorBack>
            </div>
        )
    }
}

export default Error