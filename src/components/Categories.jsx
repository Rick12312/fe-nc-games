import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getCategories, getReviewsByCategory } from "../api/api";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [review, setReview] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    getReviewsByCategory(category).then((review) => {
      setReview(review);
    });
  };

  return (
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
          return <li className="Catergories__review_list" key={review.review_id}><img src={review.review_img_url} alt={review.review_id} width="300px"/>
          <p>Owner: {review.owner}</p>
          <p>Review ID: {review.review_id}</p>
          <p>Review Body: {review.review_body}</p>
          <p>Designer: {review.designer}</p>
          <p>Category: {review.category}</p>
          <p>Date Created: {review.created_at}</p>
          </li>
      })}
      {categories.map(({ slug, description }) => {
        return (
          <>
            <h2>{slug}</h2>
            <p>{description}</p>
          </>
        );
      })}
    </div>
  );
};

export default Categories;
