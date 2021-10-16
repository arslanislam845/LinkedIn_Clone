import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCwll7Bv64foFuU48gDqutY44UIV1kvbbc",
  authDomain: "linkedin-clone-3-d0217.firebaseapp.com",
  projectId: "linkedin-clone-3-d0217",
  storageBucket: "linkedin-clone-3-d0217.appspot.com",
  messagingSenderId: "755722201076",
  appId: "1:755722201076:web:b5c66ad18aab811f543ba1"
};
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebase.firestore();
const auth=firebaseApp.auth()
export {db,auth}

