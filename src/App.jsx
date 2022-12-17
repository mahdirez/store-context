import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./components/Content";
import { ContextProvider } from "./components/Context";
import Details from "./components/Details";
import Navbar from "./components/Navbar";

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
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
