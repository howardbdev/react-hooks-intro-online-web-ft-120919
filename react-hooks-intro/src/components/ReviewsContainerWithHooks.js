import React, { useState, useEffect } from 'react';
import Review from './Review.js'
import NewReview from './NewReview.js'
import NewReviewWithHooks from './NewReviewWithHooks.js'

const ReviewsContainerWithHooks = () => {

  // useState returns an array of size 2 -- the first element is the initial state you pass in, the second is a setter function to change its value.  The setter function, similar to .setState(), takes an argument representing the new value, or a callback that should return the new value.
  const [dealerReviews, setDealerReviews] = useState([])
  const [reviewId, setReviewId] = useState(0)

  // By default, the callback provided to useEffect is called on every re-render (any time state or props change).
  // We can alter this with a second argument, an array of variables to "pay attention to", in other words, if they change, invoke the callback again.  These can be state variables or props, or even properties of objects in state or props.
  // By passing an empty array, we're saying, "only call this on mount, then not for any further re-renders".
  useEffect(() => {
    getDealerReviews()
  }, [])

  const getDealerReviews = () => {
    return fetch("http://localhost:3001/api/v1/dealer_reviews")
      .then(resp => resp.json())
      .then(reviews => {
        setDealerReviews(reviews)
      })
  }

  const createReview = (reviewData) => {
    const body = {
      dealer_review: reviewData
    }
    return fetch("http://localhost:3001/api/v1/dealer_reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(r => r.json())
      .then(newReview => {
        if (newReview.error) {
          alert(newReview.error)
        } else {
          setDealerReviews([...dealerReviews, newReview])
          setReviewId(newReview.id)
        }
        return newReview
      })
  }

  return (
    <div className="ReviewsContainer">

       <button
        onClick={() => setReviewId(Math.floor(Math.random() * dealerReviews.length))}
       >
         Click To Show Random Review
       </button>

      {reviewId ? <Review review={dealerReviews.find(review => review.id === reviewId)} /> : ""}

      <h3>With Hooks</h3>
      <NewReviewWithHooks createReview={createReview}/>

    </div>
  );

}

export default ReviewsContainerWithHooks;
