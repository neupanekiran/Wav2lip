// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVtJYd8BUWD-wQMDG6Ke6wvKHdH-eM1UA",
  authDomain: "campus-crew-390bc.firebaseapp.com",
  projectId: "campus-crew-390bc",
  storageBucket: "campus-crew-390bc.appspot.com",
  messagingSenderId: "117427710913",
  appId: "1:117427710913:web:220e0cd497ce1514705d40",
  measurementId: "G-0539R8P5MY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// Register User
async function registerUser() {
  const name = document.getElementById("name-register").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-pass").value;

  if (!name || !email || !password) {
    alert("All fields are required");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user data to Firestore
    await setDoc(doc(db, "users", user.uid), { name, email });

    alert("User registered successfully");
    window.location.href = "../index.html"; // Redirect after successful registration
  } catch (error) {
    alert("Registration failed: " + error.message);
  }
}

// Login User
async function loginUser() {
  const email = document.getElementById("sign-in-email").value;
  const password = document.getElementById("sign-in-pass").value;

  if (!email || !password) {
    alert("Both email and password are required");
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Check if user exists in Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
  
      window.location.href = "../index.html"; // Redirect after successful login
    } else {
      alert("No such user found in database.");
    }
  } catch (error) {
    alert("Login failed: " + error.message);
  }
}

// Google Sign-In (for both registration and login)
async function googleSignIn(isRegistering) {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    if (isRegistering) {
      // If registering, save to Firestore
      await setDoc(doc(db, "users", user.uid), { name: user.displayName, email: user.email });
    }


    window.location.href = "../index.html"; // Redirect after successful Google sign-in
  } catch (error) {
    alert("Error during Google sign-in: " + error.message);
  }
}

// Logout User
async function logoutUser() {
  try {
    await signOut(auth);
    alert("Logged out successfully");
    window.location.href = "../sigin.html"; // Redirect to login page
  } catch (error) {
    alert("Error logging out: " + error.message);
  }
}

// Event listeners for buttons
document.getElementById("registerUser").addEventListener("click", (e) => {
  e.preventDefault();
  registerUser();
});

document.getElementById("loginUser").addEventListener("click", (e) => {
  e.preventDefault();
  loginUser();
});

document.getElementById("google-register").addEventListener("click", (e) => {
  e.preventDefault();
  googleSignIn(true); // Register with Google
});

document.getElementById("google-login").addEventListener("click", (e) => {
  e.preventDefault();
  googleSignIn(false); // Log in with Google
});
