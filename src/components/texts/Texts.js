import React from 'react'
import './style.scss';

function Texts(props) {
  return (
      <>
    <div id="twotexts">
    <h4>{props.sub}</h4>
    <h1>{props.main}</h1>   
    </div>

    </>
  )
}

export default Texts