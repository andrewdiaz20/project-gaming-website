

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = { username, email, password };
        console.log(user);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }

    const renderSignup = () => {
        return (
            <div>
                <h1>Signup</h1>
            </div>
        );
    }

    const renderLogin = () => {
        return (
            <div>
                <h1>Login</h1>
            </div>
        );
    }

    const renderProfile = () => {
        return (
            <div>
                <h1>Profile</h1>
            </div>
        );
    }
    
    const renderError = () => {
        return (
            <div>
                <h1>Error</h1>
            </div>
        );
    }

    const renderPage = () => {
        if (page === 'signup') {
            return renderSignup();
        } else if (page === 'login') {
            return renderLogin();
        } else if (page === 'profile') {
            return renderProfile();
        } else if (page === 'error') {
            return renderError();
        }
    }

    const page = 'signup';

    renderPage();


    return (
        <div>
            <h1>Signup</h1>
        </div>
    );
}

export default Signup;