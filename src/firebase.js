// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyD-6F2-AdQcHK5MNd4PxqDDjXaHrn9y4o0',
  authDomain: 'project-1-89a85.firebaseapp.com',
  databaseURL: 'https://project-1-89a85.firebaseio.com',
  projectId: 'project-1-89a85',
  storageBucket: 'project-1-89a85.firebasestorage.app',
  messagingSenderId: '451596418428',
  appId: '1:451596418428:web:bf4f0cea46225d72a678f9',
  measurementId: 'G-N3NQ0GQ4B5',
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export { storage }
