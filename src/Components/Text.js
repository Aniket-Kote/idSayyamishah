import React from 'react'

const Text = (props) => {
  return (
    <div className={props.classes}>{props.value}</div>
  )
}

export default Text