import styles from './Login.module.css';

/**
 * Page with button to allow users to login
 * @returns The login page
 */
function Login() {

    // redirects to server to login
    const login = () => {
        window.open("https://sbhssigma.herokuapp.com/login", "_self")
    }

    return (
        <button onClick={login} id="login_button">
            Login
        </button>
    );
}

export default Login;