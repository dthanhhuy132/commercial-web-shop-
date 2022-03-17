import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import fireDB from "../../fireConfig";

export const ADD_PRODUCT = "add_product";
export const GET_PRODUCT = "get_product";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const DELETE_PRODUCT = "delete_product";

function addProduct(products) {
  return {
    type: ADD_PRODUCT,
    payload: { products },
  };
}

// export async function addProductAsyns(products) {
//   try {
//     async (product) => {
//       await addDoc(collection(fireDB, "products"), {
//         ...product,
//       });
//     };
//   } catch (err) {
//     console.log(err.message);
//   }
// }

function getAllProduct(products) {
  return {
    type: GET_PRODUCT,
    payload: products,
  };
}

function getProductById(product) {
  return {
    type: GET_PRODUCT_BY_ID,
    payload: product,
  };
}

export function getAllProductAsyns() {
  return async (dispatch) => {
    try {
      const querySnapshot = await getDocs(collection(fireDB, "products"));

      let productArr = [];
      querySnapshot.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        productArr.push(obj);
      });

      dispatch(getAllProduct(productArr));
    } catch (err) {
      console.log(err.message);
    }
  };
}

export function getProductByIdAsyns(productID) {
  return async (dispatch) => {
    try {
      const data = await getDoc(doc(fireDB, "products", productID));
      const productItem = data.data();

      dispatch(getProductById(productItem));
    } catch (err) {
      console.log(err.message);
    }
  };
}

function deleteProduct(products) {
  return {
    type: DELETE_PRODUCT,
    payload: products,
  };
}

async function deleteProductAsyns(data) {
  console.log(data);
}
