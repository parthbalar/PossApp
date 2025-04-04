import { Routes, Route } from "react-router-dom";
import Product from "./product";
import Index from "./index";
import Header from "../components/header";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* Routes Definition */}
      <Routes>
        <Route path="/products" element={<Product />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
