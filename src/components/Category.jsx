import React, { useState, useEffect } from "react";
import { getReviewsByCategory } from "../api/api";
import boardgame from "../images/boardgame.jpeg";
import boardgame2 from "../images/boardgame2.jpeg";
import boardgame3 from "../images/boardgame3.jpeg";
import boardgame4 from "../images/boardgame4.jpeg";
import boardgame5 from "../images/boardgame5.jpeg";
import boardgame6 from "../images/boardgame4.jpeg";
import boardgame7 from "../images/boardgame5.jpeg";

import { BsHandThumbsUp } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";

function Category() {
  const [category, setCategory] = useState("strategy");
  const [review, setReview] = useState([]);

  useEffect(() => {
    getReviewsByCategory(category).then((review) => {
      setReview(review);
    });
  }, [category]);

  return (
    <>
      <div className="Category_Button_Cotainer">
        <button
          className="Category_Button"
          onClick={() => setCategory("strategy")}
        >
          <img src={boardgame} className="Category_Button_img" alt="logo" />
          Strategy
        </button>
        <button
          className="Category_Button"
          onClick={() => setCategory("hidden-roles")}
        >
          <img src={boardgame2} className="Category_Button_img" alt="logo" />
          Hidden Roles
        </button>
        <button
          className="Category_Button"
          onClick={() => setCategory("dexterity")}
        >
          <img src={boardgame3} className="Category_Button_img" alt="logo" />
          Dexterity
        </button>
        <button
          className="Category_Button"
          onClick={() => setCategory("push-your-luck")}
        >
          <img src={boardgame4} className="Category_Button_img" alt="logo" />
          Push Your Luck
        </button>
        <button
          className="Category_Button"
          onClick={() => setCategory("roll-and-write")}
        >
          <img src={boardgame5} className="Category_Button_img" alt="logo" />
          Roll And Write
        </button>
        <button
          className="Category_Button"
          onClick={() => setCategory("deck-building")}
        >
          <img src={boardgame6} className="Category_Button_img" alt="logo" />
          Deck Building
        </button>
        <button
          className="Category_Button"
          onClick={() => setCategory("engine-building")}
        >
          <img src={boardgame7} className="Category_Button_img" alt="logo" />
          Engine Building
        </button>
      </div>

      <div className="Category_Container">
        <div className="Category_Container_Row">
          {category === "strategy" ? (
            <>
              {review.map((review) => {
                return (
                  <li className="Catergory__review_list" key={review.review_id}>
                    <img
                      className="Category_review_img"
                      src={review.review_img_url}
                      alt="review.title"
                    />
                    <div className="Catergory__review_list_text">
                      <h3>{review.title.slice(0, 35)}</h3>
                      <p>
                        <i>{review.category}</i>
                      </p>
                      <p className="Category_reviews__list_item_date">
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
            </>
          ) : null}

          {category === "hidden-roles" ? (
            <>
              {review.map((review) => {
                return (
                  <li className="Catergory__review_list" key={review.review_id}>
                    <img
                      className="Category_review_img"
                      src={review.review_img_url}
                      alt="review.title"
                    />
                    <div className="Catergory__review_list_text">
                      <h3>{review.title.slice(0, 35)}</h3>
                      <p>
                        <i>{review.category}</i>
                      </p>
                      <p className="Category_reviews__list_item_date">
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
            </>
          ) : null}

          {category === "dexterity" ? (
            <>
              {review.map((review) => {
                return (
                  <li className="Catergory__review_list" key={review.review_id}>
                    <img
                      className="Category_review_img"
                      src={review.review_img_url}
                      alt="review.title"
                    />
                    <div className="Catergory__review_list_text">
                      <h3>{review.title.slice(0, 35)}</h3>
                      <p>
                        <i>{review.category}</i>
                      </p>
                      <p className="Category_reviews__list_item_date">
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
            </>
          ) : null}

          {category === "push-your-luck" ? (
            <>
              {review.map((review) => {
                return (
                  <li className="Catergory__review_list" key={review.review_id}>
                    <img
                      className="Category_review_img"
                      src={review.review_img_url}
                      alt="review.title"
                    />
                    <div className="Catergory__review_list_text">
                      <h3>{review.title.slice(0, 35)}</h3>
                      <p>
                        <i>{review.category}</i>
                      </p>
                      <p className="Category_reviews__list_item_date">
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
            </>
          ) : null}

          {category === "roll-and-write" ? (
            <>
              {review.map((review) => {
                return (
                  <li className="Catergory__review_list" key={review.review_id}>
                    <img
                      className="Category_review_img"
                      src={review.review_img_url}
                      alt="review.title"
                    />
                    <div className="Catergory__review_list_text">
                      <h3>{review.title.slice(0, 35)}</h3>
                      <p>
                        <i>{review.category}</i>
                      </p>
                      <p className="Category_reviews__list_item_date">
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
            </>
          ) : null}

          {category === "deck-building" ? (
            <>
              {review.map((review) => {
                return (
                  <li className="Catergory__review_list" key={review.review_id}>
                    <img
                      className="Category_review_img"
                      src={review.review_img_url}
                      alt="review.title"
                    />
                    <div className="Catergory__review_list_text">
                      <h3>{review.title.slice(0, 35)}</h3>
                      <p>
                        <i>{review.category}</i>
                      </p>
                      <p className="Category_reviews__list_item_date">
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
            </>
          ) : null}

          {category === "engine-building" ? (
            <>
              {review.map((review) => {
                return (
                  <li className="Catergory__review_list" key={review.review_id}>
                    <img
                      className="Category_review_img"
                      src={review.review_img_url}
                      alt="review.title"
                    />
                    <div className="Catergory__review_list_text">
                      <h3>{review.title.slice(0, 35)}</h3>
                      <p>
                        <i>{review.category}</i>
                      </p>
                      <p className="Category_reviews__list_item_date">
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
            </>
          ) : null}
        </div>
      </div>
      </>
  );
}

export default Category;
