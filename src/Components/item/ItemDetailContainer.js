import ItemDetail from './ItemDetail';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getDb from '../../lib/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import Cargando from '../cargando/Cargando';


const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();


  useEffect(() => {
    const myItem = doc(getDb, 'Productos', id);
    getDoc(myItem)
      .then((res) => {
        const result = { id: res.id, ...res.data() };
        setProducto(result);
      })
      .finally(() => {
        setCargando(false);
      });
  }, [id]);

  return (
    <div className='detail-container'>
      {cargando ? <Cargando /> :
        <ItemDetail {...producto} key='producto.id' />
      }
    </div>
  )
}
export default ItemDetailContainer