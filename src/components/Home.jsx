import React, { useEffect, useState } from "react";
import { getReviewsBySort } from "../api/api.js";
import { FcGenericSortingDesc, FcComments } from "react-icons/fc";
import { BsCalendarDate } from "react-icons/bs";

const Home = () => {
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
            <li className="Home_reviews__list_item" key={review.review_id}>
              <img
                className="Home_reviews_img"
                src={review.review_img_url}
                alt="review.title"
              />
              <p>Title: {review.title.slice(0, 35)}</p>
              <p>Category: {review.category}</p>
              <p>Date: {review.created_at}</p>
              <p>Comment count: {review.comment_count}</p>
              <p>Votes: {review.votes}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
