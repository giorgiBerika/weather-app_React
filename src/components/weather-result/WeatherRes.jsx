import './WeatherRes.scss'
import cloud from '../../assets/cloud.png'
const WeatherRes = () => 
{

    return (
        <>
            <div className='weather-result_wrapper'>
                <img src={cloud} alt="weather type" />
                <div className="temperature-info_wrapper">
                <p>27</p>
                <span>°C</span>
                </div>
                <p className='description'>Scattered clouds</p>
            </div>
        </> 
    )
}

export default WeatherRes 
