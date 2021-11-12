import data from '../../data/data.js'
import ItemDetail from './ItemDetail/ItemDetail.js'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ()=>{

    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)

    const {id} = useParams()


    useEffect(()=>{
        const Producto=new Promise((res, rej)=>{
            setTimeout(()=>{
                res(data)
            },1000)
        })
        Producto.then((data)=>{
            setProducto(data.find((item)=>item.id===id))
            setCargando(false)
        })
    },[id])


    return(
        <div className='detail-container'>
        {cargando ? <h3>Cargando Productos...</h3> : 
            <ItemDetail {...producto}  />
        }
        </div>

    )
}

export default ItemDetailContainer
