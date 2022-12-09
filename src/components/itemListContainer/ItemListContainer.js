import { useEffect, useState } from "react";
import { products } from "../../productsMock";
import "./ItemListContainer.css"
import ItemList from "../itemList/ItemList";


const ItemListContainer = ({}) => {
  

const [ items, setItems ] = useState([])


useEffect(()=>{ 
const task = new Promise( (resolve, reject)=>{
  setTimeout(() => {
 resolve(products)},3000)
})

task
  .then( (res)=>{ setItems( res ) } )
  .catch( (err)=>{ console.log("se rechazo") } )
  console.log("Se hizo la peticion")
}, [] )

console.log(items)

return (
  <div>
  <ItemList items={items}/>
</div>
  )
}

export default ItemListContainer