import React from 'react'
import './style.scss';

function Texts(props) {
  return (
      <>
    <div id="twotexts">
    <h5>{props.sub}</h5>
    <h1>{props.main}</h1>   
    </div>

    </>
  )
}

export default Texts