import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getCategories, getReviewsByCategory, fetchSortedCategoryReviews } from "../api/api";
import { FcGenericSortingDesc, FcComments } from "react-icons/fc";
import { BsCalendarDate } from "react-icons/bs";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [review, setReview] = useState([]);
  const [category, setCategory] = useState([]);
  const [sort, setSort] = useState("votes");

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  useEffect(() => {
    fetchSortedCategoryReviews(sort, category).then((sortedReviews) => {
      setReview(sortedReviews);
    });
  }, [sort]);

  const onSubmit = (e) => {
    e.preventDefault();
    getReviewsByCategory(category).then((review) => {
      setReview(review);
    });
  };

  return (<div>
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
    <div className="Categories">
      <form
        onSubmit={onSubmit}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        
        <p>Search Reviews By Category</p>
        <select className="Catergory_select">
          {categories.map(({ slug }) => {
            return <option key={slug} value={slug}>{slug}</option>;
          })}
        </select>
        <button type="submit">Submit</button>
      </form>
      {review.map((review) => {
          return <li className="Catergories__review_list" key={review.review_id}>
          <img className="Categories__review_img" src={review.review_img_url} alt={review.review_id} width="300px"/>
          <p>Owner: {review.owner}</p>
          <p>Review ID: {review.review_id}</p>
          <p>Review Body: {review.review_body}</p>
          <p>Designer: {review.designer}</p>
          <p>Category: {review.category}</p>
          <p>Date Created: {review.created_at}</p>
          </li>
      })}
     </div>
    </div>
  );
};

export default Categories;
