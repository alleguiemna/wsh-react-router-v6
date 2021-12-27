import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductDetail from './components/productDetail/ProductDetail'
import Product from './components/Product/Product';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Contact from './components/Contact/Contact'



function App() {
  const products=[{
    id:Math.random(),
    imgSrc:
      "https://th.bing.com/th/id/R.b38f3ea1f155faaef14f344bf74b8b15?rik=ctrnYHfKX3k6zw&pid=ImgRaw&r=0",
    name: "AirPods",
    price: "6,99 $",
  },
  {
    id:Math.random(),
    imgSrc: "https://th.bing.com/th/id/R.62443f7dda859823cf5b5772396bbf09?rik=HzaWElpDeJ22fg&pid=ImgRaw&r=0",
    name: "Smart watch",
    price: "8,64 $",
  },
  {
    id:Math.random(),
    imgSrc:
      "https://saligon.com/wp-content/uploads/2020/09/Iphone-11-pro-max-grey-2.jpg",
    name: "Iphone 11 ",
    price: "150 $",
  }
  ]
  return (
    <div className="App">
     <Router>
     <Header />
     <Routes>
     <Route path="/"  element={<Home />}/>
     <Route path="/product"  element={<Product products={products}/>} />
     <Route path="/contact"  element={<Contact />}/>
     <Route path="/product/:id" element={<ProductDetail products={products}/>}/>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
