import React from 'react'

export default function Dashboard(props) {
    const handleStrike = () => {
        if (props.strikes < 2)
        {
            props.setStrikes(props.strikes + 1);
        }
        else if (props.strikes === 2){
            props.setStrikes(0);
            // props.setFouls(0);
            props.setBalls(0);
        }
    }
    const handleFoul = () => {
        if (props.strikes < 2)
        {
            props.setStrikes(props.strikes + 1);
        }
    }
    const handleBall = () => {
        if (props.balls < 3)
        {
            props.setBalls(props.balls + 1);
        }
        else if (props.balls === 3){
            props.setStrikes(0);
            // props.setFouls(0);
            props.setBalls(0);
        }
    }
    const handleHit = () => {
        props.setHits(props.hits + 1);
        props.setStrikes(0);
        // props.setFouls(0);
        props.setBalls(0);
    }

    return (
        <div>
            <button onClick={handleStrike}>Strike</button>
            <button onClick={handleFoul}>Foul</button>
            <button onClick={handleBall}>Ball</button>
            <button onClick={handleHit}>Hit</button>
        </div>
    )
}
