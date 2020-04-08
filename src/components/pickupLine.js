import React from 'react'

function PickupLine({ onClick, pickupLine }) {
  return (
    <div className='pickup-line'>
      <h2>{pickupLine}</h2>
      <button onClick={onClick}>Get Pickup Line!</button>
    </div>
  )
}

export default PickupLine
