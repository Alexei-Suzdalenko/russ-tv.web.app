const config = {
    apiKey: "AIzaSyBqTikgr5Ds7_rZRiRD3-8CoDsnhFRxwX0",
    authDomain: "russ-tv.firebaseapp.com",
    databaseURL: "https://russ-tv-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "russ-tv",
    storageBucket: "russ-tv.appspot.com",
    messagingSenderId: "189446997826",
    appId: "1:189446997826:web:cf24149f2474b771b56adb",
    measurementId: "G-60E0WPZWNZ"
}

const app = firebase.initializeApp(config)
const db = firebase.firestore(app)
