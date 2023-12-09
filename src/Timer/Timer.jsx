import React, { useState, useEffect } from 'react'
import './Timer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Timer = () => {

  const [hourscount, setHoursCount] = useState(0)
  const [minutescount, setMinutesCount] = useState(0)
  const [secondscount, setSecondsCount] = useState(0)
  const [timerKey, setTimerKey] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [buttontext, setButtonText] = useState('Start');

  const handleHoursIncrementClick = () => {
    setHoursCount(hourscount + 1)
  }

  const handleHoursDecrementClick = () => {
    if (hourscount > 0) {
      setHoursCount(hourscount - 1)
    }
    else {
      setHoursCount(0)
    }
  }

  const handleMinutesIncrementClick = () => {
    setMinutesCount(minutescount + 1)
  }

  const handleMinutesDecrementClick = () => {
    if (minutescount > 0) {
      setMinutesCount(minutescount - 1)
    }
    else {
      setMinutesCount(0)
    }
  }

  const handleSecondsIncrementClick = () => {
    setSecondsCount(secondscount + 1)
  }

  const handleSecondsDecrementClick = () => {
    if (secondscount > 0) {
      setSecondsCount(secondscount - 1)
    }
    else {
      setSecondsCount(0)
    }
  }

  const handleStartClick = () => {
    if (isTimerRunning) {
      setIsTimerRunning(false);
      setButtonText('Start');
      setHoursCount(0);
      setMinutesCount(0);
      setSecondsCount(0);
    } else {
      setIsTimerRunning(true);
      setButtonText('Stop');
    }
    setTimerKey(timerKey + 1);
  };

  useEffect(() => {
    if (isTimerRunning) {
      setTimerKey(timerKey + 1);
    }
  }, [isTimerRunning]);

  return (
    <div>
      <div className='timer-main'>
        <div className='timer'>
          <div className='timer_circle'>
            <CountdownCircleTimer
              strokeWidth={7}
              trailColor='transparent'
              rotation='counterclockwise'
              key={timerKey}
              isPlaying={isTimerRunning}
              duration={hourscount * 3600 + minutescount * 60 + secondscount}
              colors={'#FF6A6A'}
              renderTime={(remainingTime) => {
                const hours = Math.floor(remainingTime / 3600);
                const minutes = Math.floor((remainingTime % 3600) / 60);
                const seconds = remainingTime % 60;

                return (
                  <div style={{ color: 'white' }}>
                    {`${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}
                  </div>
                );
              }}
            />
            {/* </CountdownCircleTimer> */}
          </div>

          <div className='timer_content_main'>
            <div className='timer_content'>

              <div className='hours_div'>
                <div className='hours_div_title'>Hours</div>
                <div className='hours_div_content'>
                  <div>
                    <FontAwesomeIcon onClick={handleHoursIncrementClick} icon={faCaretUp} style={{ color: "#949494", backgroundColor: 'transparent', cursor: 'pointer' }} />
                  </div>
                  <div>{hourscount}</div>
                  <div>
                    <FontAwesomeIcon onClick={handleHoursDecrementClick} icon={faCaretDown} style={{ color: "#949494", backgroundColor: 'transparent', cursor: 'pointer' }} />
                  </div>
                </div>
              </div>

              <div className='minutes_div'>
                <div className='minutes_div_title'>Minutes</div>
                <div className='minutes_div_content'>
                  <div>
                    <FontAwesomeIcon onClick={handleMinutesIncrementClick} icon={faCaretUp} style={{ color: "#949494", backgroundColor: 'transparent', cursor: 'pointer' }} />
                  </div>
                  <div>{minutescount}</div>
                  <div>
                    <FontAwesomeIcon onClick={handleMinutesDecrementClick} icon={faCaretDown} style={{ color: "#949494", backgroundColor: 'transparent', cursor: 'pointer' }} />
                  </div>
                </div>
              </div>

              <div className='seconds_div'>
                <div className='seconds_div_title'>Seconds</div>
                <div className='seconds_div_content'>
                  <div>
                    <FontAwesomeIcon onClick={handleSecondsIncrementClick} icon={faCaretUp} style={{ color: "#949494", backgroundColor: 'transparent', cursor: 'pointer' }} />
                  </div>
                  <div>{secondscount}</div>
                  <div>
                    <FontAwesomeIcon onClick={handleSecondsDecrementClick} icon={faCaretDown} style={{ color: "#949494", backgroundColor: 'transparent', cursor: 'pointer' }} />
                  </div>
                </div>
              </div>

            </div>

            <div className='btn_start'>
              <button onClick={handleStartClick}>{buttontext}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timer