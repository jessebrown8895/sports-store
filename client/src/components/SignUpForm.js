import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
const SignUpForm = ({setUser}) => {
    const history = useHistory()
  const [signUp, setSignUp] = useState({
      first_name: "",
      last_name: "",
      address: "",
      age: "",
      email: "",
      password: "",
      username: ""
  })
  const handleChange = (e) => {
      setSignUp({...signUp, [e.target.name]: e.target.value });

  }
  const handleSubmit = (e) => {
      e.preventDefault()
      fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUp),
      })
      .then((r) => {
          if (r.ok){
              let obj = {
                username: signUp.username,
                password: signUp.password,
              };
              fetch("/api/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(obj),
              }).then((r) => {
                if (r.ok) {
                  console.log(r);
                  r.json().then((user) => {
                    setUser(user);
                    history.push("/products");
                  });
                } else {
                  r.json().then((error) => alert(error.error));
                }
              });
          }
          
      })
    }
      

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first_name">First name:</label>
        <input
          type="text"
          name="first_name"
            value={signUp.first_name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="last_name">Last name:</label>
        <input
          type="text"
          name="last_name"
            value={signUp.last_name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="price">Address:</label>
        <input
          type="text"
          name="address"
          value={signUp.address}
          onChange={handleChange}
        />
        <br />
        <label>Age: </label>
        <input
          type="number"
          name="age"
          step="1"
        value={signUp.age}
          onChange={handleChange}
        />
        <br />
        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={signUp.email}
          onChange={handleChange}
        />
        <br />
        <label>Password: </label>
        <input
          type="password"
          name="password"
            value={signUp.password}
          onChange={handleChange}
        />
        <br />
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={signUp.username}
            onChange={handleChange}
          />
          <br />
          <input type="submit" value="Create User" />
        
      </form>
    </div>
  );
}

export default SignUpForm