/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBczlNDMaxROc_8S0s6n3Gc4WL6h4MMKlA",
    authDomain: "curso-vue-f2ffd.firebaseapp.com",
    projectId: "curso-vue-f2ffd",
    storageBucket: "curso-vue-f2ffd.appspot.com",
    messagingSenderId: "978143218416",
    appId: "1:978143218416:web:9a88cfb059a3ef7c421035",
    measurementId: "G-D1VWF8BJN1"
  };

initializeApp(firebaseConfig);


export function registerPlugins (app) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
}
