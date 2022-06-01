import { useHistory } from "react-router-dom";
const SignUpButton = () => {
    const history = useHistory()
    
    
  return (
    <div>
      <button onClick={() => history.push("/signup")}>Sign up</button>
    </div>
  );
}

export default SignUpButton