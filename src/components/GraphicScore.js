import { useParams } from 'react-router-dom'
// import { useCall } from '../utils/hooks'
// import { Loader } from '../utils/styles/loader'
import styled from 'styled-components'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'

import { userData } from '../data/user'


const StyledGraphic = styled.div`
    height: 13em;
    width: 11em;
    background-color: rgb(245,245,245);
    border-radius: 0.5em;
    position: relative;
`

const GraphTitle = styled.h2`
    font-size: 0.9em;
    color: #282d30;
    position: relative;
    top: 1em;
    left: 3em;
`

const GraphPerf = styled.p`
    font-size: 1em;
    color: #282d30;
    position: absolute;
    z-index: 100;
    text-align: center;
    width: 4em;
    top: 4.3em;
    left: 3.7em;
`

const NumSpan = styled.span`
    font-size: 1.5em;
    font-weight: bold;
`

/**
* This class component manage the display of the global performance on a radial chart
*/
const GraphicScore = () => {
    
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

    /**
    * This constant manage to get the good number in the API regarding which profile is displayed
    * @constant {Number} profileScore
    */
    const profileScore = profileId === '18' ? userData[1].score * 100 : userData[0].todayScore * 100
    
    /**
    * This constant contains the data to build the radial chart
    * @constant {Array.<Object>} graphicData
    */
    const graphicData = [{score: 100, fill: 'rgb(245,245,245)'}, {score: profileScore, fill: 'red'}]

    // if (error) {
    //     return <span>Oups il y a eu un problème</span>
    // }
    
    return (

        <StyledGraphic>
            <GraphTitle>Score</GraphTitle>
            <GraphPerf className="score"><NumSpan>{profileScore}%</NumSpan> de votre objectif</GraphPerf>        
                <ResponsiveContainer width="100%" height="80%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="100%" data={graphicData} >
                        <RadialBar
                            minAngle={15}
                            background={{fill: 'white'}}
                            clockWise
                            dataKey="score"
                            barSize={10}
                            radius={[10, 10, 0, 0]}
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
        </StyledGraphic>
    )
}

export default GraphicScore