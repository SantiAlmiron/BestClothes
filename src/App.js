
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/NavBar";

import{ BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>

        <Route path="/" element={< ItemListContainer/>} />
        <Route path="/category" element={< ItemListContainer/> } />
        <Route path="/category/:id" element={< ItemListContainer/> } />
        <Route path="/itemDetail/:id" element={< ItemDetailContainer/> } />
        <Route path="/cart" element={<h3> Carrito </h3>} />
        <Route path="*" element={<h2> Lo sentimos, esta página no existe </h2>} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
