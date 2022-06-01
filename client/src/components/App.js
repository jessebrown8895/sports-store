import {useState, useEffect} from 'react'
import {Route, Switch, useHistory} from "react-router-dom"
import NavBar from "./NavBar"
import Login from "./Login"
import Profile from './Profile'
import ProductsContainer from "../containers/ProductsContainer"
import ProductForm from "./ProductForm"
import SignUpForm from "./SignUpForm"
import EditForm from './EditForm'

function App() {
  const [user, setUser] = useState()
  const history = useHistory()
  useEffect(() => {
    fetch("/api/me")
    .then(r => {
      if(r.status === 200) {
        r.json()
        .then((data) => setUser(data))
      }
    })
  }, [])
  
  if (!user) history.push('/login')

  return (
    <div className="App">
      {user&& <NavBar user={user} setUser={setUser} />}
      <Switch>
        <Route path="/products/new">
          <ProductForm />
        </Route>
        <Route exact path="/products">
          <ProductsContainer user={user} />
        </Route>
        <Route path="/profile">
          <Profile user={user} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} user={user}/>
        </Route>
        <Route path="/signup">
          <SignUpForm setUser={setUser}/>
        </Route>
        <Route exact path="/products/:id">
          <EditForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
