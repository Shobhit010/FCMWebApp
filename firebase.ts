import { getApp, getApps, initializeApp } from "firebase/app";
import { getMessaging, getToken, isSupported } from "firebase/messaging";

// Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4sLvvglxVcaWGRiZikNgclBYmWNft4Tk",
  authDomain: "fcm-demo-20419.firebaseapp.com",
  projectId: "fcm-demo-20419",
  storageBucket: "fcm-demo-20419.firebasestorage.app",
  messagingSenderId: "342420583387",
  appId: "1:342420583387:web:db27dfc515990c6a906dfe",
  measurementId: "G-VGK547KEZW"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const messaging = async () => {
  const supported = await isSupported();
  return supported ? getMessaging(app) : null;
};

export const fetchToken = async () => {
  try {
    const fcmMessaging = await messaging();
    if (fcmMessaging) {
      const token = await getToken(fcmMessaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_FCM_VAPID_KEY,
      });
      return token;
    }
    return null;
  } catch (err) {
    console.error("An error occurred while fetching the token:", err);
    return null;
  }
};

export { app, messaging };
