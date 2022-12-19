import { useEffect, useState } from "react";
import { products } from "../../productsMock";
import "./ItemListContainer.css"
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom"; 


const ItemListContainer = ({}) => {
  const { categoryName } = useParams()

const [ items, setItems ] = useState([])


useEffect(()=>{ 

  const productosFiltered = products.filter(productos => productos.category === categoryName  )

const task = new Promise( (resolve, reject)=>{
  setTimeout(() => {
 resolve(categoryName ? productosFiltered : products )},500)
})

task
  .then( (res)=>{ setItems( res ) } )
  .catch( (err)=>{ console.log("se rechazo") } )
  console.log("Se hizo la peticion")
}, [categoryName] )

console.log(items)

return (
  <div>
    <ItemList items={items}/>
  </div>
  )
}

export default ItemListContainer