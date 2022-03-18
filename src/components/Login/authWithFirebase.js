import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

const auth = getAuth();

export default function socialLogin(provider, setUser) {
  let userData = null;
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = { ...result.user };

      userData = {
        name: user.displayName,
        email: user.email,
        phone: user.phoneNumber,
        image: user.photoURL,
        password: null,
        loginVia: provider.providerId,
      };

      if (userData) setUser(userData);
    })
    .catch((error) => {
      console.log("err login", error);
    });
}
