//// @ts-check

import { useParams } from 'react-router-dom'
// import { useCall } from '../utils/hooks'
// import { Loader } from '../utils/styles/loader'
import styled from 'styled-components'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, CartesianAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { activityData } from '../data/activity'


const StyledGraphic = styled.div`
    margin-bottom: 2em;
    height: 15em;
    width: auto;
    padding: 0.5em;
    background-color: rgb(245,245,245);
    border-radius: 0.5em;
`
const GraphTitle = styled.h2`
    font-size: 1.3em;
`

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
            <div className="tooltipActivity">
                <p>{payload[0].value} kg</p>
                <p>{payload[1].value} kCal</p>
            </div>
        )
    }
    return null
}

/**
* This stateless component customize the legend of the graphic 
* @param {propType} payload Liste of items
*/
const RenderLegend = ({payload}) => {

    //On aurait pu écrire simplement props à la place de {payload} et
    // const { payload } = props;

    return (
        <ul className="legend">
            <li className="legend1"><span>{payload[0].value} (kg)</span></li>
            <li className="legend2"><span>{payload[1].value} brûlées (kcal)</span></li>
        </ul>
    )
}

/**
* This function modifies the date format
* @param {Date} tick 
* @returns {Number}  
*/
const formatDate = (tick) => {
    const date = new Date(tick)
    return date.getDate()
}

/**
* This class component manage the display of the daily activity bar chart
*/
const GraphicActivity = () => {

    /**
    * @typedef {{profileId: Number}} URLparameter
    */

    /**
    * @type {URLparameter} profileId
    */
    const { profileId }  = useParams()
    // const { data, isLoading, error } = useCall (
    //     `http://localhost:3000/user/${profileId}/activity`
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
            <GraphTitle>Activité Quotidienne</GraphTitle>
            {
                activityData
                .filter(user => user.userId === parseInt(profileId)).map(({sessions}, index) => (
                    <ResponsiveContainer key={index} width="100%" height="75%">
                        <BarChart
                        width={500}
                        height={300}
                        data={sessions}
                        margin={{
                            top: 0,
                            right: 30,
                            left: -55,
                            bottom: 10,
                        }}
                        >
                            <CartesianGrid strokeDasharray="2" vertical={false} />
                            <CartesianAxis width={50} />
                            <XAxis dataKey="day" axisLine={true} tickLine={false} tickMargin={20} tickFormatter={formatDate} />
                            <YAxis orientation="right" domain={["auto", "auto"]} tickCount={4} hide={false} axisLine={false} tickLine={false} tickMargin={35} />
                            <Tooltip content={<CustomTooltip />} wrapperStyle={{ width: 150 }} cursor={{ fill: 'grey' }} contentStyle={{backgroundColor: 'red', color:'white'}} itemStyle={{color:'white'}} />
                            <Legend content={<RenderLegend />} width={200} iconType={"circle"} iconSize={10} wrapperStyle={{ top: -70, right: 10 }} verticalAlign="left" />
                            <Bar dataKey="kilogram" fill="black" barSize={10} radius={[10, 10, 0, 0]} />
                            <Bar dataKey="calories" fill="red" barSize={10} radius={[10, 10, 0, 0]} tooltipItemColor="black" />
                        </BarChart>
                    </ResponsiveContainer>
                ))
            }
        </StyledGraphic>
    )
}

export default GraphicActivity