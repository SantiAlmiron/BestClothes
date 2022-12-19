import {GiShoppingCart} from "react-icons/gi"
import "./CartWidgets.css"
import { Link } from "react-router-dom"


const CartWidgets = () => {
  return (
    <Link to="/cart">
      <div>
        <GiShoppingCart className="carrito"/>
      </div>
    </Link>
  )
}

export default CartWidgets