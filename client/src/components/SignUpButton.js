import { useHistory } from "react-router-dom";
import Button from "../styles/Button";
const SignUpButton = () => {
    const history = useHistory()
    
    
  return (
    <div>
      <Button onClick={() => history.push("/signup")}>Sign up</Button>
    </div>
  );
}

export default SignUpButton