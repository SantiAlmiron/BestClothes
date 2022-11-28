import "./NavBar.css"
import futbol from "../img/futbol.png"
import CartWidgets from "./cartWidgets/CartWidgets"

export const NavBar = ()=>{

    return(
        <div className="NavBar">
            <div >
               <img className="logo" src={futbol} alt="" />
            </div>
            <ul className="Menu">
                <li>Home</li>
                <li>Productos</li>
                <li>Nosotros</li>
            </ul>
            <div >
                <CartWidgets />
            </div>
        </div>
    )
}

export default NavBar;