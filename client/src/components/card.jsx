import React from "react";
import Rating from "./rating";
import '../scss/card/card.css'
import { useNavigate } from "react-router-dom";

function Card({ card }) {
  const navigate = useNavigate();
  const { title, description, price,img, rating, id, numReviews } = card;
  return (
    <div className="card">
      <div className="card-img" onClick={() => navigate(`/products/${id}`)}>
        <img className="img" src={img} alt="card-img" />
      </div>

      <div className="card-body">
        <div className="card-body__description"  onClick={() => navigate(`/products/:${id}`)}>
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{description}</p>
        </div>
        <div className="card-body__bottom">
          <Rating numReviews= {numReviews} rating = {rating}/>
          <p className="card__price">{price}$</p>
          <button
            className="card-body__button"
          >
            + add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
