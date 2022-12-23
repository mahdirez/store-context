import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Content from "./components/Content";
import { ContextProvider } from "./components/Context";
import Details from "./components/Details";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <nav>
            <Navbar />
          </nav>
          <Routes>
            <Route path="/product" element={<Content />} />
            <Route path={`/product/:id`} element={<Details />} />
            <Route path={'/cart'} element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
