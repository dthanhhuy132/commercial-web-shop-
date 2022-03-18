import {
  collection,
  addDoc,
  getDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import fireDB from "../../fireConfig";
import { createCartForALlUserAsync } from "../carts/action";

export const ADD_USER = "ADD_USER";
export const GET_USER = "GET_USER";
export const GET_ALL_USER = "GET_ALL_USER";
export const DISABLE_USER = "DISABLE_USER";
export const LOG_OUT = "LOGOUT";

export const USER = "USER";

export function addUserAsync(newUserData) {
  return async (dispatch) => {
    try {
      const newUser = await addDoc(collection(fireDB, "users"), newUserData);
      dispatch(getCurrentUserAsync(newUser.id));
      console.log("newUserData", newUserData.email);
      dispatch(createCartForALlUserAsync(newUserData.email, newUser.id));
    } catch (error) {
      // console.log(error.messagess);
    }
  };
}

export function getCurrentUser(currentUser) {
  localStorage.setItem(USER, JSON.stringify(currentUser));
  return {
    type: GET_USER,
    payload: currentUser,
  };
}

export function getCurrentUserAsync(userId) {
  return async (dispatch) => {
    try {
      const res = await getDoc(doc(fireDB, "users", userId));

      if (res.exists()) {
        const currentUser = {
          id: res.id,
          ...res.data(),
        };

        dispatch(getCurrentUser(currentUser));
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
}

function getAllUser(allUser) {
  return {
    type: GET_ALL_USER,
    payload: allUser,
  };
}

export function getAllUserAsyns() {
  return async (dispatch) => {
    try {
      const querySnapshot = await getDocs(collection(fireDB, "users"));

      let userArr = [];
      querySnapshot.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        userArr.push(obj);
      });

      dispatch(getAllUser(userArr));
    } catch (err) {
      console.log(err.message);
    }
  };
}

export function logOut() {
  localStorage.removeItem(USER);
  return {
    type: LOG_OUT,
  };
}
