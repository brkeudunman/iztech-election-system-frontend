import React from 'react'
import "./vote.css";
import peterParkerImage from './peterparker.jpg';

const VotePage = () => {
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
        <h4>Remaining time: XXdays XXhours</h4>
      </div>

    </content>
  )
}

export default VotePage