import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDCDGxMt7tvLz1S1jijRC3KmZPEa227raM",
  authDomain: "schoolerp-22610.firebaseapp.com",
  projectId: "schoolerp-22610",
  storageBucket: "schoolerp-22610.firebasestorage.app",
  messagingSenderId: "133114462407",
  appId: "1:133114462407:web:c495d09c93567677a5bee2",
  measurementId: "G-VGC6QTBMC5"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const generateToken = async () => {
  try {
    const permission = await Notification.requestPermission();

    if (permission !== "granted") {
      console.log("❌ Notification permission denied");
      return null;
    }

    const token = await getToken(messaging, {
      vapidKey: "BF2CYhvrCmUrB41ww1RdW7ZnZqQ_aoXh6JQgLSvcvv40MDZ3fKGnjhq9xIbGkNjPsyvwAuFHMMqJ2SQRCjaE-NI"
    });

    console.log("🔥 Device Token:", token);
    return token;
  } catch (err) {
    console.error("Token error:", err);
    return null;
  }
};