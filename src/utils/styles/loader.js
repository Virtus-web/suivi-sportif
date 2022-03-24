import styled, { keyframes } from 'styled-components'
import colors from './color'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
    transform: rotate(360deg);
    }
`
 
export const Loader = styled.div`
    padding: 10px;
    border: 7px solid ${colors.secondary};
    border-bottom-color: transparent;
    border-radius: 20px;
    animation: ${rotate} 1s infinite linear;
    height: 0;
    width: 0;
`