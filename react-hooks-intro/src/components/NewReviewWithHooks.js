import React, { useState } from 'react';

const NewReviewWithHooks = ({ createReview }) => {

  const [rating, setRating] = useState("5")
  const [content, setContent] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    createReview({rating, content})
      .then(response => !response.error && resetForm())
  }

  const resetForm = () => {
    setRating("5")
    setContent("")
  }

  return (
    <div className="NewReview">
      <h4>New Review</h4>
      <form onSubmit={handleSubmit}>
        <select name="rating" onChange={(e) => setRating(e.target.value)} value={rating}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select><br/>
        <textarea
          onChange={(e) => setContent(e.target.value)}
          placeholder="Review Content"
          value={content}
          name="content"
        /><br/>
        <input type="submit" value="Add Review"/>
      </form>
    </div>
  );

}

export default NewReviewWithHooks;
