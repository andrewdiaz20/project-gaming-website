

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        signup();
    }

    const signup = () => {
        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'ok') {
                    navigate('/login');
                } else {
                    alert(data.error);
                }
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

<<<<<<< HEAD
export default SignUp;
=======
export default Signup;
>>>>>>> 4cabcaa6778c9e4a84c1f4654fa4bbdf3b2cbe8b
