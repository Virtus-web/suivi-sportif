import styled from 'styled-components'
import PropTypes from 'prop-types'


const FoodCard = styled.div`
    background-color: rgb(245,245,245);
    border-radius: 0.5em;
    width: 11em;
    padding: 1.5em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Container = styled.div`
    margin-left: 1em;
`

const FoodIcon = styled.img`
    height: 50px;
`

const FoodAmount = styled.h2`
    margin: 0;
    font-size: 1.3em;
`

const FoodType = styled.p`
    margin: 0;
    font-size: 1em;
`

/**
* 
* @typedef {{foodIcon: String, foodType: String, foodAmount: Number, extension: String}} propType
*/

/**
* This stateless component customize the legend of the graphic 
* @param {propType} foodIcon Profile user ID
* @param {propType} foodType Profile gender
* @param {propType} foodAmount Profile user name
* @param {propType} extension Profile user name
*/
const Nutrition = ({foodIcon, foodType, foodAmount, extension}) => {

    return (

        <FoodCard>
            <FoodIcon src={foodIcon} alt="nutriment-icon" />
            <Container>
                <FoodAmount>{foodAmount} {extension}</FoodAmount>
                <FoodType>{foodType}</FoodType>
            </Container>
        </FoodCard>
    )
}

Nutrition.propTypes = {
    foodIcon: PropTypes.string,
    foodType: PropTypes.string,
    foodAmount: PropTypes.number,
    extension: PropTypes.string
}

export default Nutrition