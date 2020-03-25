import React, { useState } from 'react'
import { updateData } from '../../services/api'
import '../../styling/cardOptions.css'

export const CardOptions = (props) => {
  const [isSold, setIsSold] = useState(props.sold)

  const handleOnClick = () => {
    updateData(`${process.env.REACT_APP_API_ADVERTS}/${props.adId}/sold`)
      .then((advert) => {
        setIsSold(advert.sold)
      })
  }
  return (
    <div className="card-options">
      {isSold && (
        <p className="card-sell-status">
          <i className="card-check-mark" aria-hidden="true"></i>
          Sold
        </p>
      )}
      {!isSold && (
        <button
          className="card-sell-status-button"
          type="button"
          onClick={handleOnClick}>
          Mark as sold
        </button>
      )}
    </div>
  )
}