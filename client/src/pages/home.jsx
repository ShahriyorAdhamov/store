import React, { useEffect } from "react";
import Card from "../components/card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../slices/products";
//css
import '../scss/home/home.css'


function Home() {
  const dispatch = useDispatch();
  const {products, isLoading} = useSelector(state => state.products)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]) 
  return (
    <div className="cards-list">
      {isLoading? <h1>loading...</h1> : (products? products.map((card) => (
        <Card key={card.id} card={card} />
      )) : <h2>Нет продуктов</h2>)}
    </div>
  );
}

export default Home;
