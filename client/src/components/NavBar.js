import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Button from '../styles/Button';
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
      <Nav>
        <Button as={Link} to="/home">
          Home
        </Button>
        <Button as={Link} to="/products">
          Products
        </Button>
        <Button as={Link} to="/products/new">
          Create Product
        </Button>
        <Button as={Link} to="/profile">
          Profile
        </Button>
        <Button onClick={handleLogOut}>Sign Out</Button>
      </Nav>

      <>
        {!user ? (
          <>
    
              <Button as={Link} to="/signup">
                Sign Up
              </Button>
            
          </>
        ) : null}
      </>
    </div>
  );
}
const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;
export default NavBar