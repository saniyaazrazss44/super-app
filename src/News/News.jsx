import React, { useEffect, useState } from 'react'
import './News.css'
import { getNewsDetails } from '../apis/newsapi'
import { getDateInDDMMYY } from '../utils/helper'
import { getTimeInAmPm } from '../utils/helper'

const News = () => {

    const [news, setNews] = useState(false)
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    useEffect(() => {
        fetchNews()
    }, [])

    useEffect(() => {
        const dateInMMDDYYYY = getDateInDDMMYY()
        setDate(dateInMMDDYYYY)
    }, [])

    useEffect(() => {
        const timeInHoursMins = getTimeInAmPm()
        setTime(timeInHoursMins)
    }, [])

    const fetchNews = async () => {
        const response = await getNewsDetails()
        setNews(response)
    }

    return (
        <div>
            <div className='news-main'>
                <div className='news'>
                    {news && news.data && news.data.articles ? (
                        <div>
                            <div style={{ backgroundColor: '#ffffff', borderTopRightRadius: '19px', borderTopLeftRadius: '19px' }}>
                                <div style={{ backgroundColor: '#ffffff', borderTopRightRadius: '19px', borderTopLeftRadius: '19px', height: '50vh', backgroundPosition: 'center', objectFit: 'contain' }}>
                                    <img
                                        src={`${news.data.articles[0].urlToImage}`} style={{ backgroundColor: 'transparent', width: '100%', height: '100%', borderTopRightRadius: '19px', borderTopLeftRadius: '19px' }}
                                        alt="News"
                                    />
                                </div>
                                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#ffffff', fontWeight: '800', width: '100%', height: '100%', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', bottom: '6.1rem' }}>

                                    <div style={{ backgroundColor: 'transparent', fontSize: '1.2rem' }}>
                                        {news.data.articles[0].title}
                                    </div>

                                    <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-start', gap: '1rem', alignItems: 'center', backgroundColor: 'transparent' }}>
                                        <div style={{ backgroundColor: 'transparent' }}>
                                            {date}
                                        </div>

                                        <div style={{ border: '1px solid #ffffff', height: '1rem' }}></div>

                                        <div style={{ backgroundColor: 'transparent' }}>
                                            {time}
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div style={{ backgroundColor: '#ffffff', padding: '1rem', height: '100%', width: '100%' }}>
                                    {news.data.articles[0].description}
                                </div>
                            </div>
                        </div>
                    ) : (<div>No weather data available</div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default News