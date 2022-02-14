import React, { useState } from "react";
import { useEffect } from "react";
import {
  getReviewsById,
  patchVotes,
  getCommentsByReviewId,
  postComments,
} from "../api/api";
import { BsHandThumbsUp } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { GrPrevious, GrNext } from 'react-icons/gr';
import { useParams } from 'react-router-dom'

const SingleReview = () => {
  const [review, setReview] = useState({});
  const [comments, setComments] = useState("");
  const [body, setBody] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  const [loading, setIsLoading] = useState(false);
  let { id } = useParams();

  console.log("id set")
  
  useEffect(() => {
    setIsLoading(false);
    getReviewsById(id).then((review) => {
      setReview(review);
    })
    getCommentsByReviewId(id).then((comment) => {
      setComments(comment);
    });
  }, [id]);

  const onClick = () => {
    patchVotes(id)
      .then((review) => {
        setReview(review);
      })
      .catch(setError(true));
  };

  const fetchComments = () => {
    getCommentsByReviewId(id)
      .then((comment) => {
        setComments(comment);
      })
      .catch(setError(true));
  };

  const submitForm = (e) => {
    e.preventDefault();
    postComments(id, username, body)
      .then(() => {
        setComments("");
      })
      .catch(setError(true));
  };

  const changeReview = (num) => {
  console.log(id,"ID")
    id = parseInt(id) + num
  };

  if (loading) return <p>Loading...</p>;
  
  return (
    <div className="SingleReview">
      <div className="SingleReview_review_container">
        <img
          className="SingleReview_review_img"
          src={review.review_img_url}
          alt={review.owner}
        />
        <div className="SingleReview_changeReview_Buttons">
          <button
            className="SingleReview_previousReview_Button"
            disabled={id <= 1}
            onClick={() => changeReview(-1)}
          >
            {" "}
            <GrPrevious />
          </button>
          <div className="SingleReview_review_button_divider"><p></p></div>
          <button
            className="SingleReview_nextReview_Button"
            disabled={id >= 24}
            onClick={() => changeReview(1)}
          >
            <GrNext/>
          </button>
        </div>
        <div className="SingleReview_review_text">
          {review.review_body && <p>{review.review_body}</p>}
          {review.designer && (
            <p className="SingleReview_review_text_author">
              By {review.designer} {review.created_at.slice(0, 10)} Category:{" "}
              {review.category}
            </p>
          )}
          {review.owner && (
            <p className="SingleReview_review_text_author">
              Owner: {review.owner}
            </p>
          )}
          {review.review_id && (
            <p className="SingleReview_review_text_author">
              Review ID: {review.review_id}
            </p>
          )}
          {review.votes && (
            <p>
              {" "}
              {review.votes} Likes{" "}
              {review.review_id && (
                <button
                  onClick={onClick}
                  className="SingleReview_review_vote_button"
                >
                  <BsHandThumbsUp />
                </button>
              )}{" "}
            </p>
          )}
          <div className="SingleReview_buttons">
            {review.review_id && (
              <button
                onClick={fetchComments}
                className="SingleReview_review_showComments_button"
              >
                <FaRegCommentDots /> Show comments
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="SingleReview_comments">
        {comments &&
          comments.map((comment) => {
            return (
              <div className="SingleReview_comments_container">
                <div className="SingleReview_comments_text">
                  <p>
                    {comment.author}
                    <span className="SingleReview_comments_created_at">
                      Posted {comment.created_at.slice(0, 10)}
                    </span>
                    
                  </p>
                  <p>{comment.body}</p>
                  <p key={comment.comment_id}>Votes: {comment.votes}</p>
                </div>
              </div>
            );
          })}
        {comments && (
          <form onSubmit={submitForm} className="SingleReviews_postReview_form">
            <h2 className="SingleReview_comments_add_title">
              Post your comments here
            </h2>
            <textarea
              className="SingleReview_comments_inputbox"
              type="text"
              placeholder="Enter your comment here..."
              required
              onChange={(e) => {
                setBody(e.target.value);
                setUsername(localStorage.getItem("loggedInUser"));
              }}
            />
            <br></br>
            <button className="SingleReviews_postReview_form">
              Post Comment
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SingleReview;
