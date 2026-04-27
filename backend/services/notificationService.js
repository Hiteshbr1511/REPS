import admin from "../config/firebase.js";

export const sendNotification = async (token, message) => {
  try {
    const payload = {
      notification: {
        title: "Attendance Alert",
        body: message
      }
    };

    await admin.messaging().send({
      token: token,
      notification: payload.notification
    });

    console.log("📲 Push notification sent");
  } catch (error) {
    console.error("❌ Notification failed:", error.message);
  }
};