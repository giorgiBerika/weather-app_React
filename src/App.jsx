import { useState, useEffect,useRef } from 'react'
import { SearchBar, WeatherRes, WindRes } from './components/main'
import axios from 'axios'
import './App.scss'
// https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=b1af9dc988407783a9a7c41508074fdf
function App() {
  const [count, setCount] = useState(0)
  const [currentLocation, setCurrentLocation] = useState('London')
  const apiKey = useRef('1c484b86bfbb859e8eeb46bdefcaf5dd')
  useEffect(() => {


    async function getWeatherInfo() 
     {
      try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${currentLocation}&appid=${apiKey.current}`)
            console.log(response)
      }
      catch(error){
        console.log(`Error fetching data:`,error)
      }
    };

    // getWeatherInfo();
  } ,[] );
  

  return (
    <>
      <div className="my-app"> 
        <SearchBar />
        <WeatherRes />
        <div className='extra-info'>
          <WindRes 
            infoType={"humidity"}
            infoNumber={75}
            />
          <WindRes 
            infoType={"windSpeed"}
            infoNumber={3}
          />
        </div>
      </div>
    </>
  )
}

export default App
