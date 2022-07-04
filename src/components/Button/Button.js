import React from 'react'
import './Button.css'

export default function Button(props) {
  // const classes = 'btn-sbm' || '';
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={props.onCompleteHandler}
    ></button>
  )
}
