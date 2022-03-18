import { async } from "@firebase/util";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import fireDB from "../../fireConfig";

export const ADD_TO_CART_LOCAL = "ADD_TO_CART_LOCAL";
export const UPDATE_USER_CART = "UPDATE_USER_CART";
export const CREATE_CART_FOR_ALL_USER = "CREATE_CART_FOR_ALL_USER";
export const GET_USER_CART = "GET_USER_CART";
export const GET_ALL_CART = "GET_ALL_CART";

export function addToCartLocal(product) {
  return {
    type: ADD_TO_CART_LOCAL,
    payload: product,
  };
}

export function createCartForALlUserAsync(userEmail, userId) {
  console.log(userEmail, userId);
  return async (dispatch) => {
    try {
      await setDoc(doc(fireDB, "cart", userId), {
        email: userEmail,
        productCart: [],
      });
    } catch (error) {
      console.log("loi createCartForALlUserAsync");
    }
  };
}

function getUserCart(userCart) {
  return {
    type: GET_USER_CART,
    payload: userCart,
  };
}

export function getUserCartAsync(userId) {
  return async (dispatch) => {
    try {
      const res = await getDoc(doc(fireDB, "cart", userId));

      if (res.exists()) {
        const userCart = res.data();

        dispatch(getUserCart(userCart));
      } else {
        console.log("No such document!");
      }
    } catch (error) {}
  };
}

function getAllCart(carts) {
  return {
    type: GET_ALL_CART,
    payload: carts,
  };
}

export function getALlCartAsync() {
  return async (dispatch) => {
    try {
      const querySnapshot = await getDocs(collection(fireDB, "cart"));
      const allCart = [];
      querySnapshot.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        allCart.push(obj);
      });
      dispatch(getAllCart(allCart));
    } catch (error) {
      console.log("fault in getALlCartAsync");
    }
  };
}

export function updateUserCartAsync(currentUserId, newProduct) {
  return async (dispatch) => {
    try {
      const res = await updateDoc(doc(fireDB, "cart", currentUserId), {
        productCart: arrayUnion(newProduct),
      });
      dispatch(getUserCartAsync(currentUserId));
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateUserCartAsyncByRemove(currentUserId, newProduct) {
  return async (dispatch) => {
    try {
      const res = await updateDoc(doc(fireDB, "cart", currentUserId), {
        productCart: arrayRemove(newProduct),
      });
      dispatch(getUserCartAsync(currentUserId));
    } catch (error) {
      console.log(error);
    }
  };
}
