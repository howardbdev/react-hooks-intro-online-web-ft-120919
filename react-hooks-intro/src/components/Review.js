import React from 'react'

const Review = ({ review }) => {
  const buildReview = () => {
    switch (review.rating) {
      case 1:
        return <span role="img" aria-label="One Star">⭐️</span>
      case 2:
        return <span role="img" aria-label="Two Stars">⭐️⭐️</span>
      case 3:
        return <span role="img" aria-label="Three Stars">⭐️⭐️⭐️</span>
      case 4:
        return <span role="img" aria-label="Four Stars">⭐️⭐️⭐️⭐️</span>
      case 5:
        return <span role="img" aria-label="Five Stars">⭐️⭐️⭐️⭐️⭐️</span>
    }
  }
  return (
      <div className="Review">
        {
          review
            ? <>{buildReview()}<p>{review.content}</p></>
            : <h5>Loading Reviews...</h5>
        }
      </div>
  )
}

export default Review
