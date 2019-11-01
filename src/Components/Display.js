import React from 'react'

export default function Display(props) {


    return (
        <div className='display'>
            <div className='outline'>
                <h1>{props.strikes}</h1>
                <p>Strikes</p>
            </div>
            {/* <div className='outline'>
                <h1>{props.fouls}</h1>
                <p>Fouls</p>
            </div> */}
            <div className='outline'>
                <h1>{props.balls}</h1>
                <p>Balls</p>
            </div>
            <div className='outline'>
                <h1>{props.hits}</h1>
                <p>Hits</p>
            </div>
        </div>
    )
}
