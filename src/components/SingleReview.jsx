import React, { useState } from "react";
import { useEffect } from "react";
import { getReviewsById, patchVotes, getCommentsByReviewId, postComments } from "../api/api";
import { BiUpvote } from "react-icons/bi";
import { FaCreativeCommonsSamplingPlus, FaRegCommentDots } from 'react-icons/fa'

const SingleReview = () => {
  const [reviewId, setReviewId] = useState(1);
  const [review, setReview] = useState("");
  const [comments, setComments] = useState("")
  const [newComment, setNewComment] = useState({})

  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [reviewId]);

  const onSubmit = (e) => {
    e.preventDefault();
    getReviewsById(reviewId).then((review) => {
      setReview(review);
      setIsLoading(false);
    });
  };

  const onClick = () => {
    patchVotes(reviewId).then((review) => {
      setReview(review)
    })
  }

const fetchComments = () => {
  getCommentsByReviewId(reviewId).then((comment) => {
  setComments(comment)
  })
}

const submitForm = () => {
  postComments(reviewId, newComment).then((comment) => {
    console.log(comment)
    setComments(comment)
  })
}

  if (loading) return <p>Loading...</p>;

  return (
    <div className="SingleReview">
      <div className="Single_Review_Search">
        <p>Search Reviews by ID</p>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            onChange={(e) => {
              setReviewId(e.target.value);
            }}
            placeholder="Search..."
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="SingleReview_review_container">
        <img
          className="SingleReview_review_img"
          src={review.review_img_url}
          alt={review.owner}
          width="300px"
        />
        {review.owner && <p>Owner: {review.owner}</p>}
        {review.review_id && <p>Review ID: {review.review_id}</p>}
        {review.review_body && <p>{review.review_body}</p>}
        {review.designer && <p>Designer: {review.designer}</p>}
        {review.category && <p>Category: {review.category}</p>}
        {review.created_at && <p>Date Created: {review.created_at}</p>}
        {review.votes && <p>Votes: {review.votes}</p>}
        {review.review_id && <button onClick={onClick} className="SingleReview_review_vote_button">
          <BiUpvote />Vote
        </button>}
        {review.review_id && <button onClick={fetchComments} className="SingleReview_review_comments_button">
          <FaRegCommentDots />Show comments
        </button>}        
      </div>
      
      <div className="SingleReview_comments_container">
      {comments && comments.map((comment) => {
          return <> 
          <p>Votes: {comment.votes}</p>
          <p>Username: {comment.author}</p>
          <p>{comment.body}</p>
          
          </>
        })}
      {comments && <form onSubmit={submitForm}>
        <h2 className="SingleReview_comments_add_title">Post your comments here</h2>
        <p>Username</p>
        <input type="text" placeholder="Enter username"/>
        <p>Enter comment</p>
        <input type="text" placeholder="Write your comment"/>
      </form>}
      </div>
    </div>
  );
};

export default SingleReview;
