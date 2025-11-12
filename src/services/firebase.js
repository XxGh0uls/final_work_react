// Servicio para inicializar Firebase y crear orden en Firestore (v9 modular)
// Si NO configuras variables de entorno, las funciones usan fallback mock para que la app funcione.
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

let db = null
try{
  if(firebaseConfig.apiKey){
    const app = initializeApp(firebaseConfig)
    db = getFirestore(app)
  }
}catch(e){
  console.warn('Firebase no configurado en variables de entorno. Usando mock local.')
}

// obtiene productos (cuando db está null, fetchea /data.json)
export async function getProducts(){
  if(db){
    // aquí iría la consulta a Firestore
    throw new Error('Implementa consulta a Firestore si configuras Firebase.')
  }else{
    const res = await fetch('/data.json')
    return res.json()
  }
}

// crea una orden en Firestore; si no hay Firebase, devuelve un id mock
export async function createOrder(order){
  if(db){
    const ordersRef = collection(db, 'orders')
    const docRef = await addDoc(ordersRef, order)
    return docRef.id
  }else{
    // mock: resolver con id aleatoria
    return 'MOCK-' + Math.random().toString(36).substr(2,9).toUpperCase()
  }
}
