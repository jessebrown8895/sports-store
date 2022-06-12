import { useHistory } from "react-router-dom";
import { useState } from "react";
import SignUpButton from "./SignUpButton";
import Button from "../styles/Button";
const Login = ({setUser, user}) => {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
          console.log(r)
        r.json().then(user => {
            setUser(user);
            history.push("/home");
        });
        
      } else {
          r.json().then(error => alert(error.error))
      }
      
    });
  }

  return (
    <div>
      
      {
      !user ? (
        <> 
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">password:</label>
        <input
          type="password"
          name="passwrod"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button onClick={handleSubmit}>Login</Button>
      </form>
      <SignUpButton />
        </>) : history.push("/")}
    </div>
  );
};

export default Login;
