import React from 'react'

function Box(props) {
  return (


    <div className='workbox'>
          <div><img src={props.workicon} alt={props.alt}/></div>
             <div className='text'>
                <h4>{props.heading}</h4>
              <p>{props.desc}</p>
          </div>
    </div>
  )
}

export default Box