import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from "../lib/firebaseConfig";

const Context = createContext()

export const useAuth = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('No hay provider')
  };
  return context
};
const CartFuncion = ({ children }) => {
  const [carro, setCarro] = useState([]);
  const [unidades, setUnidades] = useState(0);
  const [total, setTotal] = useState(0);

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const singup = (email, password) => createUserWithEmailAndPassword(auth, email, password, setLoading(true));

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password, setLoading(true));
  const logout = () => signOut(auth, setLoading(false));

  const loginGoogleAuth = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider, setLoading(true));
  };
  const restPassword = (email) => {
    sendPasswordResetEmail(auth, email)
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading()
    })
    return () => unsubscribe();
  }, []);


  const onAdd = (producto, cantidad) => {  //Agregaa un item al carrito, 
    const itemExiste = carro.find(item => item.id === producto.id);
    if (!itemExiste) {
      setCarro([...carro, {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: cantidad,
        imagen: producto.imagen, stock: producto.stock, subtotal: (producto.precio * cantidad)
      }]);
      setTotal(total + (producto.precio * cantidad));
      setUnidades(unidades + cantidad);

    } else {
      const cartAux = carro.map((item) => {
        if (item.id === producto.id) {
          item.cantidad += cantidad
          item.subtotal += (producto.precio * cantidad);

        }
        return item
      });
      setCarro(cartAux);
      setUnidades(unidades + cantidad);
      setTotal(total + (producto.precio * cantidad));
    }
  }

  const removeItem = (itemId, subtotal, cantidad) => {
    const cartAux = carro
    const index = cartAux.findIndex((item) => item.id === itemId);
    const itemExiste = cartAux.find(item => item.id === itemId);
    cartAux.splice(index, 1);
    setCarro(cartAux);
    setUnidades(unidades - itemExiste.cantidad);

    setTotal(total - subtotal);
  }

  const clear = () => {
    setCarro([]);
    setTotal(0);
    setUnidades(0);
  };

  const isInCart = (itemId) => {
    let i = 0;
    const len = carro.length;
    let position = -1;
    while (i < len && position === 0) {
      if (carro[i].item.id === itemId) {
        position = i
      }
      i++
    };
    return position;
  };

  return <Context.Provider value={{ carro, unidades, total, onAdd, clear, removeItem, isInCart, user, loading, singup, login, logout, loginGoogleAuth, restPassword }}>
    {children}
  </Context.Provider>

};


export { CartFuncion, Context };