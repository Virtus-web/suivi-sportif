import { useParams } from 'react-router-dom'
// import { useCall } from '../utils/hooks'
// import { Loader } from '../utils/styles/loader'
import styled from 'styled-components'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'

import { sessionsData } from '../data/sessions'


const StyledGraphic = styled.div`
    height: 13em;
    width: 11em;
    background-color: red;
    border-radius: 0.5em;
`

const GraphTitle = styled.h2`
    font-size: 0.9em;
    color: white;
    width: 10em;
    position: relative;
    top: 1em;
    left: 1em;
`

/**
* @constant weekDays
* @type {Array.<String="Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche">}
*/
const weekDays = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"]

/**
* This function modifies the date format
* @param {Number} tick 
* @returns {String}  
*/
const formatDate = (tick) => {
    
    return [...weekDays[tick-1][0]]
}

/**
* 
* @typedef {{payload: Array, active: Boolean}} propType
*/

/**
* This stateless component customize the tooltip of the graphic 
* @param {propType} active
* @param {propType} payload
*/
function CustomTooltip({ active, payload }) {
    if (active) {
        return (
            <div className="tooltipSessions">
                <p>{payload[0].value} min</p>
            </div>
        )
    }
    return null
}

/**
* This class component manage the display of the average duration of daily sessions on a line chart
*/
const GraphicSessions = () => {
    
    /**
    * @typedef {{profileId: Number}} URLparameter
    */

    /**
    * @type {URLparameter} profileId
    */
    const { profileId }  = useParams()   
    // const { data, isLoading, error } = useCall (
    //     `http://localhost:3000/user/${profileId}/average-sessions`
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
            <GraphTitle>Durée moyenne des sessions</GraphTitle>
            {
                sessionsData
                .filter(user => user.userId === parseInt(profileId)).map(({sessions}, index) => (
                    <ResponsiveContainer key={index} width="100%" height="75%">
                        <LineChart width={300} height={100} data={sessions} margin={{ top: 30, right: 0, left: 5, bottom: 15 }}>
                            <Line type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={2} />
                            <Tooltip content={<CustomTooltip />} wrapperStyle={{ width: 100 }} cursor={{ stroke: '#850606', strokeWidth: 1 }} />
                            <XAxis dataKey="day" axisLine={false} tickLine={false} tickMargin={20} tick={{fill: 'white', fontSize: 10}} tickFormatter={formatDate} />
                        </LineChart>
                    </ResponsiveContainer>
                ))
            }
        </StyledGraphic>
    )
}

export default GraphicSessions