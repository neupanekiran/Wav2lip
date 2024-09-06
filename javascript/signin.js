// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhMfWXPYXWtiYVMBm-2gp2RbqWfCe3GjU",
    authDomain: "wav2lip-ede0a.firebaseapp.com",
    projectId: "wav2lip-ede0a",
    storageBucket: "wav2lip-ede0a.appspot.com",
    messagingSenderId: "615545954246",
    appId: "1:615545954246:web:991ce484b2bded1c841cc7",
    measurementId: "G-XVKYP7JHTT"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  
  // Verify Firebase initialization (optional)
  console.log(app);
  
  // FirebaseUI configuration
  const uiConfig = {
    signInSuccessUrl: 'index.html',
    signInOptions: [
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // You need to add the clientId here
        clientId: 'YOUR_GOOGLE_CLIENT_ID'
      }
    ],
    tosUrl: '<your-tos-url>',
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };
  
  // Initialize FirebaseUI Auth
  const ui = new firebaseui.auth.AuthUI(firebase.auth());
  
  // Start FirebaseUI
  ui.start('#firebaseui-auth-container', uiConfig);