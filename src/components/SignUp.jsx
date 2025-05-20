import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    // console.log(createUser)

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const newUser = Object.fromEntries(formData.entries());
        const { email, password, ...restFormData } = newUser;

        // console.log('all data with rest data-', email, password, userProfile)

        // const email = formData.get('email');
        // const password = formData.get('password')


        // console.log(email)
        // console.log('data is: ', formData.get('password'))
        // ---------------------------------------
        // const formObject = Object.fromEntries(formData.entries());
        // console.log(formData)

        // create user in the firebase
        createUser(email, password)
            .then(result => {
                console.log('usesr-', result.user)

                const userProfile = {
                    email,
                    ...restFormData,
                    creationTime: result.user?.metadata?.creationTime,
                    lastSignInTime: result.user?.metaData?.lastSignInTime,
                }

                // create user in the database
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'center',
                                icon: "success",
                                title: "Your account created successfully!",
                                timer: 2000,
                                showConfirmButton: false
                            })
                            //----------------
                            console.log('after profile save in db-', data)
                        }
                    })

            })
            .catch(error => {
                console.log(error.message);
                Swal.fire({
                    position: 'center',
                    icon: "error",
                    title: "Something Went wrong!",
                    timer: 2000,
                    showConfirmButton: false
                })
            })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 mx-auto  max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold my-5">Sign Up Now!</h1>
                        <form onSubmit={handleSignUp} className="fieldset">
                            <label className="label">Name</label>
                            <input type="name" name='name' className="input" placeholder="Name" />
                            <label className="label">Address</label>
                            <input type="text" name='address' className="input" placeholder="Address" />
                            <label className="label">Phone</label>
                            <input type="text" name='phone' className="input" placeholder="Phone Number" />
                            <label className="label">Photo</label>
                            <input type="text" name='photo' className="input" placeholder="Photo URL" />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;