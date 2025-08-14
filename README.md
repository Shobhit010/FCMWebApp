# 💬 FCM Push Notification Integration for Chat (Web)

This project is a Next.js application built with TypeScript to demonstrate Firebase Cloud Messaging (FCM) integration for push notifications. It simulates a chat application where users can receive real-time notifications, even when the application is not in the foreground.

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

* Node.js (v18 or higher)
* npm or yarn
* A Firebase project with Cloud Messaging enabled

### 1. Firebase Setup

1.  **Create a Firebase Project**: If you haven't already, go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2.  **Add a Web App**: In your Firebase project, click the "Add app" button and select the web platform (`</>`). Follow the steps to register your app.
3.  **Get Firebase Configuration**: After registering, you will receive a Firebase SDK configuration object. Copy this object. It should look something like this:

    ```javascript
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };
    ```

4.  **Enable Cloud Messaging**: In the Firebase Console, navigate to **Project settings** > **Cloud Messaging**. Make a note of the **Server key** under the "Cloud Messaging API (Legacy)" tab. You will use this to send test notifications later.

### 2. Project Configuration

1.  Clone this repository:
    ```
    git clone <YOUR_REPO_URL>
    cd <YOUR_PROJECT_NAME>
    ```
2.  Install the dependencies:
    ```
    npm install
    # or
    yarn install
    ```
3.  Create a `.env.local` file in the root of the project.
4.  Add your Firebase configuration variables to the `.env.local` file:
    ```
    NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
    NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID
    ```
    Replace the placeholders with the values from your Firebase Console.

5.  Place the `firebase-messaging-sw.js` file in the `public` directory of your Next.js project. This is the Firebase service worker file required for handling background notifications.

### 3. Running the Application

1.  Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
2.  Open your browser and navigate to `http://localhost:3000`.

## 🧪 How to Test Notifications

1.  **Grant Permission**: When you first visit the application, the browser will prompt you to allow push notifications. Grant permission.
2.  **Get FCM Token**: The application will log the device's FCM token to the browser's console. Copy this token.
3.  **Send a Test Message**:
    * Go to the [Firebase Console](https://console.firebase.google.com/).
    * Navigate to **Engage** > **Cloud Messaging**.
    * Click "Send your first message" or "New notification".
    * Enter a title and text for your notification.
    * In the "Target" section, select "Send to a specific token".
    * Paste the FCM token you copied from the console into the text field.
    * Click "Review" and then "Publish" to send the notification.

### Notification Scenarios

* **Foreground**: If the application is open and active, you will see an in-app banner or toast notification displaying the message payload.
* **Background/Closed**: If you minimize the browser window or close the tab, the notification will appear as a native push notification from your operating system.

## 🛠️ Key Features

* **FCM Token Retrieval**: The application automatically requests notification permission and retrieves a unique FCM token for the device.
* **Foreground Handling**: When a message arrives while the app is in the foreground, it's displayed within the UI.
* **Background Handling**: A Firebase service worker (`firebase-messaging-sw.js`) handles messages when the app is in the background or closed, displaying a native system notification.
* **UI for Testing**: A simple chat-like interface allows you to simulate sending a message and triggers the notification flow.

## 📸 Screenshots
![image alt](https://github.com/Shobhit010/FCMWebApp/blob/main/s1.png)
![image alt](https://github.com/Shobhit010/FCMWebApp/blob/main/s2.png)
![image alt](https://github.com/Shobhit010/FCMWebApp/blob/main/s3.png)
