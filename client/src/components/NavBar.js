import {NavLink} from 'react-router-dom'

const NavBar = ({user, setUser}) => {

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
    const handleLogOut = () => {
      fetch("/api/logout", {
        method: "DELETE"
      })
      .then((r) => {
        if (r.ok) {
          setUser(null)
        }
      })
    }
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
        onClick={handleLogOut}
      >
        Sign Out
      </NavLink>
      <>
        {!user ? (
          <>
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
        ) : null}
      </>
    </div>
  );
}

export default NavBar