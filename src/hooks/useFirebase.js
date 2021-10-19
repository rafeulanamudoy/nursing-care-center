import React, { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import firebaseInitialize from "../pages/authentication/Firebase/firebase.init";

firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [toggole, settoggole] = useState(false);
  const [name, setName] = useState("");
  const auth = getAuth();

  const signInUsingGoogle = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        // ...
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribed;
  }, []);
  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .finally(() => setLoading(false));
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRagistration = (e) => {
    console.log("registration will be added", password, email);
    e.preventDefault();
    if (password.length < 6) {
      setError("passsword length must be at least 6 characters");
      return;
    }

    if (toggole) {
      loginUser(email, password);
    } else {
      registerUser(email, password);
    }
  };
  const toggoleState = (e) => {
    settoggole(e.target.checked);
  };
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        setError("");

        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(error.message);
      });
  };

  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = result.user;

        setError("");
        setUserName();
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.message);
        // ..
      });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  const handleForgetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        setError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.message);
        // ..
      });
  };

  const handleLogin = (e) => {
    console.log("registration will be added", password, email);
    e.preventDefault();
    if (password.length < 6) {
      setError("passsword length must be at least 6 characters");
      return;
    }

    if (toggole) {
      registerUser(email, password);
    } else {
      loginUser(email, password);
    }
  };

  return {
    signInUsingGoogle,
    user,
    logOut,
    loading,
    handleRagistration,
    handleName,
    handleEmailChange,
    handlePassword,
    error,
    toggole,
    toggoleState,
    handleForgetPassword,
    handleLogin,
  };
};

export default useFirebase;
