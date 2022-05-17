import {Route, Switch} from "react-router-dom"
import NavBar from "./NavBar"
import Header from "./Header"
import {useEffect} from 'react'
import ProductsContainer from "../containers/ProductsContainer"
import ProductForm from "./ProductForm"
function App() {

  useEffect(() => {
    fetch('/api/me')
    .then(r => {
      if (r.ok) {
        r.json()
        .then(user => console.log(user))
      }else {
        r.json()
        .then(obj => console.log(obj.error))
      }
    })
  }, [])
  

  return (
    <div className="App">
     
        <NavBar />
        <Header slogan="Start typing away!"storename="The best athletic store"/>
        <Switch>
          <Route path="/products">
            <ProductsContainer />
          </Route>
        </Switch>
    
    </div>
  );
}

export default App;
