import data from '../../data/data.js'
import ItemDetail from './ItemDetail/ItemDetail.js'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import db from '../../lib/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore';
import Cargando from '../Cargando/Cargando.js'


const ItemDetailContainer = ()=>{

    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)
    const {id} = useParams()


    useEffect(()=>{
        

        const myItem = doc(db, 'Productos', id);

        // aca usamos el paso intermedio de crear un objeto para agregarle el id de firebase, que viene por afuera de nuestro objeto
        getDoc(myItem)
          .then((res) => {
            const result = { id: res.id, ...res.data() };
            setProducto(result);
          })
          .finally(() => {
            setCargando(false);
          });
      }, []);

    return(
        <div className='detail-container'>
        {cargando ? <Cargando/> : 
            <ItemDetail {...producto}  />
        }
        </div>

    )
}
export default ItemDetailContainer