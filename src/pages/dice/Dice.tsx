import React from 'react';
import {Timeline} from 'rsuite';

const DiceLog = () => {
    return(
        <Timeline>
        <Timeline.Item>16:27:41 Your order starts processing</Timeline.Item>
        <Timeline.Item>16:28:43 Your order to be ready for delivery</Timeline.Item>
        <Timeline.Item>16:28:45 Your parcel has been out of the library</Timeline.Item>
        <Timeline.Item>02:34:41 Send to Shanghai Hongkou Company</Timeline.Item>
        <Timeline.Item>15:05:29 Sending you a piece</Timeline.Item>
        </Timeline>
    )

}

const Dice = () => {
    return (
        <div className="Dice">
        <h1> Dice </h1>
        <DiceLog />
        </div>
    )
}

export default Dice;