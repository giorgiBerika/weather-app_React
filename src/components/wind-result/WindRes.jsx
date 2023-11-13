import './WindRes.scss'

import WindIcon from '../../assets/icons/wind-speed-icon.png'

import HumidityIcon from '../../assets/icons/humidity-icon.png'

const WindRes = ({infoType, infoNumber}) => 
{

    return (
        <>
            <div className="extra-info_wrapper">
                <img src={(infoType === 'humidity')? HumidityIcon : WindIcon} alt="" />
                <div>
                    <span>{infoNumber}{(infoType === "humidity")? "%" : "Km/h"}</span>
                    <p>{infoType === "humidity" ? "humidity" : "wind speed"}</p>
                </div>
            </div>
        </>
    )
}

export default WindRes 