import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

const Login = () => {
    const {signInUser} = use(AuthContext);

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            const signInInfo = {
                email,
                lastSignInTime: result.user?.metadata?.lastSignInTime
            }

            // update last sign in to the database;
            fetch('http://localhost:3000/users', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(signInInfo)
            })
            .then(res => res.json())
            .then (data => {
                console.log('after update patch: ', data)
            })
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-5xl font-bold my-5">Login now!</h1>
                        <div className="card-body">
                            <form onSubmit={handleLogIn} className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </form>
                        </div>
                    </div>
                
            </div>
        </div>
    );
};

export default Login;