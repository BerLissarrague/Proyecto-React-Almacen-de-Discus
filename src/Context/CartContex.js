import React, { useState } from "react";

const Context = React.createContext()

const CartFuncion = ({ children }) => {
  const [carro, setCarro] = useState([]);
  const [unidades, setUnidades] = useState(0);
  const [total, setTotal] = useState(0);
  const [producto, setProducto] = useState({})
  
  const onAdd = (producto, cantidad) => {
    const itemExiste = carro.find(item => item.id === producto.id)
    if (!itemExiste) {
      setCarro([...carro, { id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: cantidad, imagen: producto.imagen, stock: producto.stock, subtotal: (producto.precio * cantidad) }])
      setTotal(total + (producto.precio * cantidad))
      setUnidades(unidades + cantidad)
    } else {
      const cartAux = carro.map((item) => {
        if (item.id === producto.id) {
          item.cantidad += cantidad
          item.subtotal += (producto.precio * cantidad)
        }
        return item
      })
      setCarro(cartAux)
      setUnidades(unidades + cantidad)
      setTotal(total + (producto.precio * cantidad))
    }
  }

  const removeItem = (itemId, subtotal, cantidad) => {
    const cartAux = carro
    const index = cartAux.findIndex((item) => item.id === itemId)
    const itemExiste = cartAux.find(item => item.id === itemId)
    cartAux.splice(index, 1)
    setCarro(cartAux)
    setUnidades(unidades - itemExiste.cantidad)
    setTotal(total - subtotal)
  }

  const clear = () => {
    setCarro([])
    setTotal(0)
    setUnidades(0)
  }

  const isInCart = (itemId) => {
    let i = 0
    const len = carro.length
    let position = -1
    while (i < len && position === 0) {
      if (carro[i].item.id === itemId) {
        position = i
      }
      i++
    }
    return position
  }

  return <Context.Provider value={{ carro, unidades, total, onAdd, clear, removeItem, isInCart }}>
    {children}
  </Context.Provider>

}


export { CartFuncion, Context };