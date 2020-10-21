import * as firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyAj_e59PDmutQalbMWIPqwTRY7M83tcnHo",
    authDomain: "creative-agency-48649.firebaseapp.com",
    databaseURL: "https://creative-agency-48649.firebaseio.com",
    projectId: "creative-agency-48649",
    storageBucket: "creative-agency-48649.appspot.com",
    messagingSenderId: "600782711791",
    appId: "1:600782711791:web:679cc4b05c6101dc92641a"
});

const fireApp = firebase.auth()


export default fireApp;