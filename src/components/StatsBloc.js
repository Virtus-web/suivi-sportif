import { useParams } from 'react-router-dom'
// import { useCall } from '../utils/hooks'
// import { Loader } from '../utils/styles/loader'
import styled from 'styled-components'
import Calories from '../assets/Calories.svg'
import Protein from '../assets/Protein.svg'
import Fat from '../assets/Fat.svg'
import Carbs from '../assets/Carbs.svg'
import Nutrition from './Nutrition'
import GraphicActivity from './GraphicActivity'
import GraphicSessions from './GraphicSessions'
import GraphicMapping from './GraphicMapping'
import GraphicScore from './GraphicScore'

import { userData } from '../data/user'


const Container = styled.div`
    margin-top: 7em;
    width: 100%;
    height: 100%;
`

const BlocStats = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-between;
`

const BlocGraphics = styled.div`
    margin-right: 1%;
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
`

const BlocGraphicsMetrics = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const BlocNutrition = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`

const StatsBloc = () => {

    const { profileId }  = useParams()

    // const { data, isLoading, error } = useCall (
    //     `http://localhost:3000/user/${profileId}`
    // )

    // const profileData = data?.data

    // if (error) {
    //     return <span>Oups il y a eu un problème</span>
    // }
    // console.log(parseInt(profileId) === userData[1].id ? 'yes' : 'no')
    return (

        <Container>
            {
                userData
                .filter(user => user.id === parseInt(profileId))
                .map(({keyData}, index) => {
                    return <BlocStats key={index}>
                        <BlocGraphics>
                            <GraphicActivity />
                            <BlocGraphicsMetrics>
                                <GraphicSessions />
                                <GraphicMapping />
                                <GraphicScore />
                            </BlocGraphicsMetrics>
                        </BlocGraphics>
                        <BlocNutrition>
                            <Nutrition foodIcon={Calories} foodType="Calories" foodAmount={keyData.calorieCount} extension="kCal" />
                            <Nutrition foodIcon={Protein} foodType="Proteines" foodAmount={keyData.proteinCount} extension="g" />
                            <Nutrition foodIcon={Carbs} foodType="Glucides" foodAmount={keyData.carbohydrateCount} extension="g" />
                            <Nutrition foodIcon={Fat} foodType="Lipides" foodAmount={keyData.lipidCount} extension="g" />
                        </BlocNutrition>
                    </BlocStats>
                })
            }
        </Container>
    )
}

export default StatsBloc
