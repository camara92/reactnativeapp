import * as firebase from 'firebase'
import 'firebase/firestore'

// import de firebase depuis le dossier Firebase 
import { firebaseConfig } from "../Firebase/firebase-config";

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const Firebase = {
  todos: () => {
    return db.collection('todos')
  }
}

export default Firebase