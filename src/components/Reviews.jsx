import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getReviewsById,
  getCommentsByReviewId,
  postComments,
  patchVotes,
} from "../api/api";
import { BsHandThumbsUp } from "react-icons/bs";
const Reviews = () => {
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState("");
  const [body, setBody] = useState("");
  const [username, setUsername] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false)
  let { id } = useParams();

  console.log(review.comment_count);

  useEffect(() => {
    getReviewsById(id).then((review) => {
      setReview(review);
      setLoading(false);
      setIsSubmitted(false);
    });
    getCommentsByReviewId(id).then((comment) => {
      setComments(comment);
    });
  }, [id, isSubmitted]);

  const onClick = () => {
    patchVotes(id).then((review) => {
      setReview(review);
    });
  };

  const submitForm = (e) => {
    console.log(id, username, body);
    e.preventDefault();
    postComments(id, username, body).then(() => {
      setIsSubmitted(true)
    });
  };

  console.log(comments);

  if (loading) return <p>Loading...</p>;
  else
    return (
      <div className="Review">
        <div className="Review_Card">
          <img
            className="Review_Card_Image"
            src={review.review_img_url}
            alt="Review Logo"
          />
          <p className="Review_Card_Element">
            <b>{review.title}</b>
          </p>
          <p className="Review_Card_Element">{review.review_body}</p>
          <p className="Review_Card_Signature">
            By {review.designer} {review.created_at.slice(0, 10)} Category:{" "}
            {review.category}
          </p>

          <button className="Review_Card_Upvote_Btn" onClick={onClick}>
            <p>
              {review.votes} Likes <BsHandThumbsUp />{" "}
            </p>
          </button>
        </div>
        <div>
          <div className="Review_Comments_Card">
            {comments &&
              comments.map((comment) => {
                return (
                  <li key={comment.comment_id} className="Review_Comments_Card">
                    <p>{comment.body}</p>
                    <p>
                      {comment.author} {comment.created_at.slice(0, 10)}
                    </p>
                    <hr />
                  </li>
                );
              })}

            <form onSubmit={submitForm}>
              <h2>Post your comments here</h2>
              <h5>You Must Login First</h5>
              <textarea
                onChange={(e) => {
                  setUsername(localStorage.getItem("loggedInUser"));
                  setBody(e.target.value);
                }}
                className="Review_Comments_Textarea"
                type="text"
                placeholder="Enter your comment here..."
                required
              />
              <br></br>
              <button className="Review_PostComment_Submit_Btn">
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Reviews;
