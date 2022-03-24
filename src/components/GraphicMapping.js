import { useParams } from 'react-router-dom'
// import { useCall } from '../utils/hooks'
// import { Loader } from '../utils/styles/loader'
import styled from 'styled-components'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'

import { performanceData } from '../data/performance'


const StyledGraphic = styled.div`
    height: 13em;
    width: 11em;
    background-color: #282d30;
    border-radius: 0.5em;
`

/**
* @constant mappingLabels
* @type {Array.<String="Cardio","Energy","Endurance","Strength","Speed","Intensity">}
*/
const mappingLabels = ["Cardio","Energy","Endurance","Strength","Speed","Intensity"]

/**
* This function modifies the label format
* @param {Number} tick 
* @returns {String}  
*/
const manageLabel = (tick) => {
    
    return mappingLabels[tick-1]
}

/**
* This class component manage the display of the performances on a radar chart
*/
const GraphicMapping = () => {
    
    /**
    * @typedef {{profileId: Number}} URLparameter
    */

    /**
    * @type {URLparameter} profileId
    */
    const { profileId }  = useParams()   
    // const { data, isLoading, error } = useCall (
    //     `http://localhost:3000/user/${profileId}/performance`
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

        <StyledGraphic>
            {
                performanceData
                .filter(user => user.userId === parseInt(profileId)).map(({data}, index) => (
                    <ResponsiveContainer key={index} width="100%" height="100%">
                        <RadarChart cx="48%" cy="50%" outerRadius="70%" data={data}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="kind" tickLine={false} tick={{fill: 'white', fontSize: 6}} tickFormatter={manageLabel} />
                            <PolarRadiusAxis axisLine={false} tick={false} />
                            <Radar name="" dataKey="value" fill="red" fillOpacity={0.6} />
                        </RadarChart>
                    </ResponsiveContainer>
                ))
            }
        </StyledGraphic>
    )
}

export default GraphicMapping