import { useState } from "react";
import './Login.css';
import mylogo from './assets/my-logo.svg';
import image from './assets/Illustration.svg'

import Dashboard from './Dashboard';

const Login = () => {
    const [showDashboard, setShowDashboard] = useState(false);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [result, setResult] = useState('');


    const onChange = (evt) => {
        const value = evt.target.value;
        const name = evt.target.name;
        //
        setUser({
            ...user, // spread operator
            [name]: value  //object deconstructing
        });
    };

    const sendLogin = async (user) => {
        console.log(user);

        const url = 'https://reqres.in/api/login';
        const params = {
            "email": user.email,
            "password": user.password
        }

        // javascript fetch
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params), //standard
        })
            .then((response) => response.json())
            .then((data) => {
                if (data && data.token) {
                    setResult(data.token);
                    setShowDashboard(true);
                } else {
                    setResult('Error login. Please verify.')
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleUserLogin = () => {
        sendLogin(user);
    };

    const handleLogout = () => {
        setShowDashboard(false);
        setResult('');
        setUser({
            email: '',
            password: ''
        });
    };

    return !showDashboard ? (
        <>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap" rel="stylesheet"></link>
         <div class="flex-parent-element"><div class="flex-child-element-left">

         <div className="mylogo"> <img src={mylogo} className="App-logo"/></div>
            <h2>Welcome back! Please enter your details.</h2>
            
            <input
            className="input"
            placeholder="Email"
            type="text"
            onChange={onChange}
            data-testid="email"
            name="email"
        /><br />
            <input
                 className="input"
                placeholder="Password"
                type="password"
                onChange={onChange}
                data-testid="password"
                name="password"
            />
            <br />
            <button
                className="btn"
                onClick={handleUserLogin}
                data-testid="send-user-login"
            >
                Login
            </button>
            <br />
            {/* <h2 data-testid="result-gross-pay">Server Reply: {result}</h2> */}
            </div>
            <div class="flex-child-element-left"><div className="image"> <img src={image}/></div></div>

        </div>

        </>
    ) : (

        //  passing of data props
        //	component: Dashboard
        //	properties: 
        //		1. result (string) - the token
        //		2. handleLogout (function/method) - This will allow Dashboard component 
        //			to trigger handleLogout in onLogout method.
        //

        <Dashboard token={result} logout={handleLogout} />
    )
};

export default Login;