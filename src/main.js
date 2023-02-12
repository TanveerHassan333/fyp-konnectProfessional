import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import firebase from "firebase";
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBCyrpXOPAQCjnalLGcfTNV1C46zjAF_L0",
    authDomain: "konnect-professional-fyp.firebaseapp.com",
    projectId: "konnect-professional-fyp",
    storageBucket: "konnect-professional-fyp.appspot.com",
    messagingSenderId: "757083254660",
    appId: "1:757083254660:web:e8abc2d53e86d66663f7d1"
  };
   firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(db)


app.mount('#app')
