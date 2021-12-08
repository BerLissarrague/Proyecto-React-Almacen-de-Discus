import { initializeApp } from 'firebase/app';
import { getFirestore} from '@firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAZzRcPek69hfIwev1OVsyef5tai6eyLX0",
  authDomain: "e-commerce-almacen-de-discus.firebaseapp.com",
  projectId: "e-commerce-almacen-de-discus",
  storageBucket: "e-commerce-almacen-de-discus.appspot.com",
  messagingSenderId: "704239229351",
  appId: "1:704239229351:web:8b7a0613f08d79dd393e82"
};
const app = initializeApp(firebaseConfig);
const getDb = getFirestore(app);


export default getDb;
