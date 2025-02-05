import Button from "../components/Button";
import '../styles/global.css';
import { Link } from "react-router-dom";

const Login = () => {
    return <>
        <div className="authContainer">
            <h1>Login</h1>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password"/>
            <Button>Login</Button>
            <p>
                Don't have an account? <Link to="/Signup">Sign Up</Link>
            </p>
        </div>
    </>
}

export default Login;