import React, { useEffect, useState } from "react";
import "./vote.css";
import peterParkerImage from './peterparker.jpg';
import { getTimeDifference } from "./../../../../util/get-time-difference";
import { Button, Row } from "antd";
import { Card } from 'antd';

const { Meta } = Card;
const VotePage = () => {
  const [timeDiff, setTimeDiff] = useState({});
  return (
    <content className="container">
      <div className="heading">
        <p>Computer Engineering Department Representative Selection</p>
      </div>

      <main className='items'>
        <div className='item'>
          <Card hoverable style={{ width: 240, backgroundColor: 'azure' }} cover={<img src={peterParkerImage} alt="Peter Parker" />}>
            <Meta title="Peter Parker" description="Computer Engineer, 3rd Class" />
          </Card>

          <Row>
            <Button style={{
              width: "240px", backgroundColor: 'white'
            }}>Vote!</Button>
          </Row>
        </div>

        <div className='item'>
          <Card hoverable style={{ width: 240, backgroundColor: 'azure' }} cover={<img src={peterParkerImage} alt="Peter Parker" />}>
            <Meta title="Peter Parker" description="Computer Engineer, 3rd Class" />
          </Card>

          <Row>
            <Button style={{
              width: "240px", backgroundColor: 'white'
            }}>Vote!</Button>
          </Row>
        </div>

        <div className='item'>
          <Card hoverable style={{ width: 240, backgroundColor: 'azure' }} cover={<img src={peterParkerImage} alt="Peter Parker" />}>
            <Meta title="Peter Parker" description="Computer Engineer, 3rd Class" />
          </Card>

          <Row>
            <Button style={{
              width: "240px", backgroundColor: 'white'
            }}>Vote!</Button>
          </Row>
        </div>

        <div className='item'>
          <Card hoverable style={{ width: 240, backgroundColor: 'azure' }} cover={<img src={peterParkerImage} alt="Peter Parker" />}>
            <Meta title="Peter Parker" description="Computer Engineer, 3rd Class" />
          </Card>

          <Row>
            <Button style={{
              width: "240px", backgroundColor: 'white'
            }}>Vote!</Button>
          </Row>
        </div>


      </main>

      <div className="timer">
        <p> Remaining time: {timeDiff.days} Days {timeDiff.hours} Hours {timeDiff.minutes} Minutes </p>
      </div>

    </content>
  )
}

export default VotePage