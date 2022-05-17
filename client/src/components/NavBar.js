import {NavLink} from 'react-router-dom'

const NavBar = () => {

    const style = {
      width: "60%",
      margin: "5% 0 1%",
      padding: "1em",
      textDecoration: "none",
      color: "black",
      backgroundColor: "rgb(2555, 120, 44)",
      fontWeight: "bold",
      verticalAlign: "center",
    };

  return (
    <div>
      <NavLink
        activeStyle={{
          fontWeight: "bolder",
          color: "red",
        }}
        exact
        style={style}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bolder",
          color: "red",
        }}
        exact
        style={style}
        to="/products"
      >
        Products
      </NavLink>

      <NavLink
        activeStyle={{
          fontWeight: "bolder",
          color: "red",
        }}
        exact
        style={style}
        to="/products/new"
      >
        Create Product
      </NavLink>
      
      <NavLink
        activeStyle={{
          fontWeight: "bolder",
          color: "red",
        }}
        exact
        style={style}
        to="/profile"
      >
        Profile
      </NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bolder",
          color: "red",
        }}
        exact
        style={style}
        to="/signout"
      >
        Sign Out
      </NavLink>
        <>
          <NavLink
            activeStyle={{
              fontWeight: "bolder",
              color: "red",
            }}
            exact
            style={style}
            to="/signin"
          >
            Sign In
          </NavLink>
          <NavLink
            activeStyle={{
              fontWeight: "bolder",
              color: "red",
            }}
            exact
            style={style}
            to="/signup"
          >
            Sign Up
          </NavLink>
          
        </>
    </div>
  );
}

export default NavBar