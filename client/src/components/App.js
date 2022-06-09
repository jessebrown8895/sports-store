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
  const [user, setUser] = useState()
  const [pradas, setPrada] = useState([]);
  
  const history = useHistory()
  
  const getCurrentUser = () => {
    fetch("/api/me").then((r) => {
      if (r.status === 200) {
        r.json().then((data) => setUser(data));
      }
    });
  }
  useEffect(() => {
    getCurrentUser();
  }, [])
  
  if (!user) history.push('/login')

  return (
    <div className="App">
      {user && <NavBar user={user} setUser={setUser} />}
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/products/new">
          <ProductForm />
        </Route>
        <Route exact path="/products">
          <ProductsContainer
            user={user}
            pradas={pradas}
            setPrada={setPrada}
            getCurrentUser={getCurrentUser}
          />
        </Route>
        <Route path="/profile">
          <Profile user={user} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} user={user} />
        </Route>
        <Route path="/signup">
          <SignUpForm setUser={setUser} />
        </Route>
        <Route exact path="/products/:id">
          <EditForm setPrada={setPrada} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
