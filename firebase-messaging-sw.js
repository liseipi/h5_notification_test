importScripts("https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.7.0/firebase-messaging.js");

var firebaseConfig = {
    apiKey: "AIzaSyC4K3c96UVpJdDo9omp-j8-oNKyEguUfGs",
    authDomain: "auth-3b4d4.firebaseapp.com",
    projectId: "auth-3b4d4",
    storageBucket: "auth-3b4d4.appspot.com",
    messagingSenderId: "129957339703",
    appId: "1:129957339703:web:791f7f21eab53545df55b2",
    measurementId: "G-7JGR67YPS8"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});