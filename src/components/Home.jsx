import React, { useEffect, useState } from "react";
import { getReviewsBySort } from "../api/api.js";
import { FcGenericSortingDesc, FcComments } from "react-icons/fc";
import { BsCalendarDate } from "react-icons/bs";
import { BsHandThumbsUp } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { useHistory } from "react-router-dom";


const Home = () => {
  const history = useHistory()
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("votes");

  useEffect(() => {
    getReviewsBySort(sort).then((sortedReviews) => {
      setReviews(sortedReviews);
      setIsLoading(false);
    });
  }, [sort]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div id="Home_sortby_container">
        <button className="Home_sortby_button" onClick={() => setSort("votes")}>
          Votes
          <FcGenericSortingDesc />
        </button>

        <button
          className="Home_sortby_button2"
          onClick={() => setSort("created_at")}
        >
          Date
          <BsCalendarDate />
        </button>

        <button
          className="Home_sortby_button3"
          onClick={() => setSort("comment_count")}
        >
          Comments
          <FcComments />
        </button>
      </div>
      <ul className="Home">
        {reviews.map((review) => {
          return (
            <li onClick={() => history.push(`/reviews/${review.review_id}`)}className="Home_reviews__list_item" key={review.review_id}>
              <img
                className="Home_reviews_img"
                src={review.review_img_url}
                alt="review.title"
              />
              <div className="Home_reviews__list_item_text">
                <h3>{review.title.slice(0, 35)}</h3>
                <p>
                  <i>{review.category}</i>
                </p>
                <p className="Home_reviews__list_item_date">
                  {review.created_at.slice(0, 10)}
                </p>
                <p>
                  <span>
                    <FaRegCommentDots /> {"  "}
                  </span>
                  {review.comment_count}{" "}
                  <span>
                    <BsHandThumbsUp />{" "}
                  </span>
                  {review.votes}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
