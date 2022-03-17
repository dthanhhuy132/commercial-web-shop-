import { collection, doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import fireDB from "../fireConfig";
import { getProductByIdAsyns } from "../store/products/action";

function ProductInfo() {
  const dispatch = useDispatch();
  const location = useLocation();
  const productId = location.state.id;
  let initProduct = useSelector((state) => state.Products.product);

  useEffect(() => {
    dispatch(getProductByIdAsyns(productId));
  }, []);

  return (
    <Layout>
      <div>{initProduct?.name}</div>
    </Layout>
  );
}

export default ProductInfo;
