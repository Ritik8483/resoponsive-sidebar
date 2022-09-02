import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Routes,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Comment from "./pages/Comment";
import Analytics from "./pages/Analytics";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import RoutesComponent from "./components/RoutesComponent";
import { Suspense } from "react";
import { Audio } from  'react-loader-spinner'
function App() {
  return (
    <div>
      <Suspense fallback={<Audio
    height = "80"
    width = "80"
    radius = "9"
    color = 'green'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
  />}>
      <Router>
        <SideBar>
          <RoutesComponent/>
          {/* <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productList" element={<ProductList />} />
          </Routes> */}
        </SideBar>
      </Router>
      </Suspense>
    </div>
  );
}

export default App;
