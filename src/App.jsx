import { Routes, Route } from "react-router-dom";
import './App.css';
import Product from "./product";
import Index from "./index";
import Header from "../components/header";

function App() {
  return (
    <div className="App">
      <Header/>
      {/* Routes Definition */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
