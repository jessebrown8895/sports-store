import {useState, useEffect} from 'react'
import {Route, Switch, useHistory} from "react-router-dom"
import NavBar from "./NavBar"
import Login from "./Login"
import Profile from './Profile'
import ProductsContainer from "../containers/ProductsContainer"
import ProductForm from "./ProductForm"
import SignUpForm from "./SignUpForm"
import EditForm from './EditForm'
import Home from './Home'
function App() {
  const history = useHistory()
  const [user, setUser] = useState()
  const [pradas, setPrada] = useState([]);
  
  useEffect(() => {
    getCurrentUser()
  }, [])

  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then((data) => setPrada(data))
      .catch((error) => alert(error));
  }, [user])
  

  
  const getCurrentUser = () => {
    fetch("/api/me").then((r) => {
      if (r.status === 200) {
        r.json().then((data) => setUser(data))
      }
    });
  }
  
  
  
  if (!user) history.push('/login')

  return (
    <div className="App">
      {user && <NavBar user={user} setUser={setUser} />}
     
      <Switch>
        <Route path="/products/new">
          <ProductForm setPrada={setPrada} user={user} />
        </Route>
        <Route exact path="/products">
          <ProductsContainer
            user={user}
            setUser={setUser}
            pradas={pradas}
            setPrada={setPrada}
            getCurrentUser={getCurrentUser}
          />
        </Route>
        <Route path="/profile">
          <Profile user={user}  />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} user={user} />
        </Route>
        <Route path="/signup">
          <SignUpForm setUser={setUser} />
        </Route>
        <Route exact path="/products/:id">
          <EditForm user={user} pradas={pradas} setPrada={setPrada}/>
        </Route>
        <Route path="">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
