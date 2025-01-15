import React from 'react'
import ReviewsData from './reviews.json'
import './Reviews.css'

const Reviews = () => {
  return (
    <div className="clients-reviews flex-column">
      <h1 class="reviews-header special-color capitalize"> clients reviews </h1>
      <div className="clients-reviews-content">
      {ReviewsData.map((item , index) => {
        return (
          <div className="review-img" key={index} >
            <img src={ require(`./../../images/reviews/${item.reviewImg}`)} alt="" className="" />                            
          </div>
            )
          })}
     </div>
  </div>
  )
}

export default Reviews
