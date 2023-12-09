import React, { useEffect, useState } from 'react'
import './Weather.css'
import { getWeatherDetails } from '../apis/weatherapi'
import Pressure from '../assets/pressure.png'
import Humidity from '../assets/humidity.png'
import Wind from '../assets/wind.png'
import { getDateInDDMMYY } from '../utils/helper'
import { getTimeInAmPm } from '../utils/helper'

const Weather = () => {

  const [weather, setWeather] = useState(false)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  useEffect(() => {
    fetchWeather()
  }, [])

  useEffect(() => {
    const dateInMMDDYYYY = getDateInDDMMYY()
    setDate(dateInMMDDYYYY)
  }, [])

  useEffect(() => {
    const timeInHoursMins = getTimeInAmPm()
    setTime(timeInHoursMins)
  }, [])

  const fetchWeather = async () => {
    const response = await getWeatherDetails()
    setWeather(response)
  }

  return (
    <div>
      <div className='weather_main'>

        <div className='weather'>
          <div>{date}</div>
          <div>{time}</div>
        </div>
        <div className='weather_content'>
          <div>
            {weather && weather.data && weather.data.current ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', gap: '0.3rem' }}>
                <img
                  src={`http:${weather.data.current.condition.icon}`} style={{ width: '4rem' }}
                  alt="Weather Icon"
                />
                {weather.data.current.condition.text}
              </div>) : (
              <div>No weather data available</div>
            )}
          </div>

          <div style={{ borderRight: '1px solid #ffffff', height: '5rem' }}></div>

          <div>
            {weather && weather.data && weather.data.current ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', gap: '1rem' }}>
                <div style={{ fontSize: '2rem' }}>{weather.data.current.temp_f}°C</div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div><img src={Pressure} style={{ width: '10px' }} alt="pressure" /></div>
                  <div>
                    <div>{weather.data.current.pressure_mb} mbar</div>
                    <div>Pressure</div>
                  </div>
                </div>
              </div>) : (
              <div>No weather data available</div>
            )}
          </div>

          <div style={{ borderRight: '1px solid #ffffff', height: '5rem' }}></div>

          <div>
            {weather && weather.data && weather.data.current ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div>
                    <img src={Wind} style={{ width: '1.5rem' }} alt="wind" />
                  </div>
                  <div>
                    <div>{weather.data.current.wind_kph} km/h</div>
                    <div>Wind</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div>
                    <img src={Humidity} style={{ width: '1rem' }} alt="humidity" />
                  </div>
                  <div>
                    <div>{weather.data.current.humidity}%</div>
                    <div>Humidity</div>
                  </div>
                </div>

              </div>) : (
              <div>No weather data available</div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Weather