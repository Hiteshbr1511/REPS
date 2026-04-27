importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDCGdxMt7tvLz1SjijjRC3KmZPEa227raM",
  authDomain: "schoolerp-22610.firebaseapp.com",
  projectId: "schoolerp-22610",
  messagingSenderId: "133114462407",
  appId: "1:133114462407:web:c495d09c93567677a5bee2"
});

const messaging = firebase.messaging();