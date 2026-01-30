  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC_qi1o8kHnoZ-bTtTZsjpM1hNHDKbURwo",
    authDomain: "vmadka-cmsc5272.firebaseapp.com",
    projectId: "vmadka-cmsc5272",
    storageBucket: "vmadka-cmsc5272.firebasestorage.app",
    messagingSenderId: "608779166080",
    appId: "1:608779166080:web:20f85f08b4f22e5f85a165",
    measurementId: "G-4NPVZJ3LSZ"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
