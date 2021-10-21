import React, { useEffect,useState} from "react";
import ItemList from "../ItemList/ItemList.js";
import data from'./../../data/data.js'
import './ItemListContainer.css'

const ItemListContainer =()=>{
    const [productos, setProdcutos] = useState([])
    const[cargando,setCargando]= useState(true)

    useEffect(()=>{
        const listaDeProductos= new Promise ((res,rej)=>{
            setTimeout(()=>{
                res(data)
            }, 2000)
        })
        listaDeProductos.then((data) =>{
            setCargando(false)
            setProdcutos(data);    
        })

      
    },[productos])

    
    return(
        cargando ?  <h4 variant='secondary' style={{ textAlign:"center" }}>Se esta cargando los productos</h4> : <div id='item'><ItemList productos={productos}/></div>
    )
    
        
}

export default ItemListContainer;