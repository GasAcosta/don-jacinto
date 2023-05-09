import ContainerList from "./Components/ContainerList/ContainerList";
import ItemDetail from "./Components/ItemDetail/ItemDetail";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContainerList />} />
        <Route path="/itemDetail/:title" element={<ItemDetail />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
