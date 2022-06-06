// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG0D9IayVbhrJzoFFd0zka3ulE1Bklj1o",
  authDomain: "fir-test-192cd.firebaseapp.com",
  projectId: "fir-test-192cd",
  storageBucket: "fir-test-192cd.appspot.com",
  messagingSenderId: "6408065443",
  appId: "1:6408065443:web:0c57d734f707ebfba24a16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const fetchToken = (setTokenFound) => {
  return getToken(messaging, {
    vapidKey:
      "BOm28vg52SBsTB7UVBFEVswTGh_VIaWODVEzIn2pIBVuYKGihyHk6bNj7RIvtGBCopgMySKBg3l8eNW1KQDrT7k",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};
