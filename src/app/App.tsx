import "./styles/index.css";
import { Header } from "@/widgets/header";
import { Route, Routes } from "react-router-dom";
import { NewProducts } from "@/pages/NewProducts";
import { Snowboard } from "@/pages/Snowboard";
import { Ski } from "@/pages/Ski";
import { Skateboard } from "@/pages/Skateboard";
import { Longboard } from "@/pages/Longboard";
import { Wakeboard } from "@/pages/Wakeboard";
import { Surf } from "@/pages/Surf";
import { Sup } from "@/pages/Sup";
import { Clothes } from "@/pages/Clothes";
import { Footwear } from "@/pages/Footwear";
import { Accessories } from "@/pages/Accessories";
import { Brands } from "@/pages/Brands";
import { Sale } from "@/pages/Sale";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/new" element={<NewProducts />} />
        <Route path="/snowboard" element={<Snowboard />} />
        <Route path="/ski" element={<Ski />} />
        <Route path="/skateboard" element={<Skateboard />} />
        <Route path="/longboard" element={<Longboard />} />
        <Route path="/wakeboard" element={<Wakeboard />} />
        <Route path="/surf" element={<Surf />} />
        <Route path="/sup" element={<Sup />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/footwear" element={<Footwear />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/sale" element={<Sale />} />
      </Routes>
    </>
  );
}

export default App;
