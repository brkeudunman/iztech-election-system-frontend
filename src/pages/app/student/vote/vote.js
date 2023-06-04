import React, { useEffect, useState } from "react";
import "./vote.css";
import peterParkerImage from './peterparker.jpg';
import { getTimeDifference } from "./../../../../util/get-time-difference";


const VotePage = () => {
  const [timeDiff, setTimeDiff] = useState({});
  return (
    <content className="container">
      <div className="heading">
        <p>Computer Engineering Department Representative Selection</p>
      </div>

      <main className='items'>

        <div className='item'>
          <div className='top-section'>
            <img src={peterParkerImage} alt="Peter Parker" />
            <div className='content'>
              <div className='top-paragrapgh'>
                <p>Peter Parker</p>
                <p>Comp Eng.</p>
              </div>
              <p className='bottom-paragraph'>3rd Class</p>
            </div>
          </div>

          <div className='click'>
            <button>Vote</button>
          </div>
        </div>

        <div className='item'>
          <div className='top-section'>
            <img src={peterParkerImage} alt="Peter Parker" />
            <div className='content'>
              <p>Peter Parker</p>
              <p>Comp Eng.</p>
              <p>3rd Class</p>
            </div>
          </div>

          <div className='click'>
            <button>Vote</button>
          </div>
        </div>

        <div className='item'>
          <div className='top-section'>
            <img src={peterParkerImage} alt="Peter Parker" />
            <div className='content'>
              <p>Peter Parker</p>
              <p>Comp Eng.</p>
              <p>3rd Class</p>
            </div>
          </div>

          <div className='click'>
            <button>Vote</button>
          </div>
        </div>

        <div className='item'>
          <div className='top-section'>
            <img src={peterParkerImage} alt="Peter Parker" />
            <div className='content'>
              <p>Peter Parker</p>
              <p>Comp Eng.</p>
              <p>3rd Class</p>
            </div>
          </div>

          <div className='click'>
            <button>Vote</button>
          </div>
        </div>

      </main>

      <div className="timer">
        <p> Remaining time: {timeDiff.days} Days {timeDiff.hours} Hours {timeDiff.minutes} Minutes </p>
      </div>

    </content>
  )
}

export default VotePage