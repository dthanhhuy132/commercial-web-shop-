import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import fireDB from "../fireConfig";
import { getAllProductAsyns } from "../store/products/action";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductAsyns());
  }, []);

  const products = useSelector((state) => state.Products.products);

  return (
    <Layout>
      <div className="container">
        <div className="row">
          {products?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
