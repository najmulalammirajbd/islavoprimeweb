import React, { useEffect, useState } from 'react';
import './Login.css'
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLock, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';
import Swal from 'sweetalert2'
import Navbar from '../Navbar/Navbar'
import Step from '../Step/Step'


function Login() {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });

    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [paid, setPaid] = useState("unpaid")
    const [userPaymentDatas, setUserpaymentData] = useState([])
    //user payment check data

    useEffect(() => {
        fetch('http://localhost:5000/allmusic')
            .then(res => res.json())
            .then(userPaymentData => {
                if (userPaymentData.length > 0) {
                    setUserpaymentData(userPaymentData)
                }
            })
    }, [])

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    const resetpassbtn = () => {
        history.push("/resetpassword")
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 5;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                    if (userPaymentDatas.length == 0) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'সফলভাবে অ্যাকাউন্ট তৈরি হয়েছে',
                            showConfirmButton: false,
                            timer: 2000
                        })
                        history.replace(from);

                    }

                    userPaymentDatas.filter(data => {
                        if (data?.Email === user.email) {
                            const payments = data?.payment

                            if (payments === "paid") {
                                history.push(from)

                            }
                        }
                        else {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'সফলভাবে অ্যাকাউন্ট তৈরি হয়েছে',
                                showConfirmButton: false,
                                timer: 2000
                            })
                            history.push(from)
                        }

                    })


                })
        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                    if (userPaymentDatas.length == 0) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'সফলভাবে লগইন হয়েছে',
                            showConfirmButton: false,
                            timer: 2000
                        })
                        history.push(from)
                    }
                    userPaymentDatas.filter(data => {
                        if (data?.Email === user.email) {
                            const payments = data?.payment

                            if (payments === "paid") {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'সফলভাবে লগইন হয়েছে',
                                    showConfirmButton: false,
                                    timer: 2000
                                })

                                history.push(from)
                            }
                        }
                        else {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'সফলভাবে লগইন হয়েছে',
                                showConfirmButton: false,
                                timer: 2000
                            })
                            history.push(from)
                        }

                    })

                })
        }
        e.preventDefault();
    }



    return (
        <div>
            <Navbar></Navbar>
            <div className="body">
                <Step></Step>
                <div className="container">
                    <div className="title">সাইন-আপ অথবা সাইন-ইন করুন</div>

                    <form onSubmit={handleSubmit}>

                        <div class="user-details">


                            <div className="input-box">

                                <input type="text" name="email" onBlur={handleBlur} placeholder=" আপনার ইমেইল" />
                            </div>

                            <div className="input-box">

                                <input type="password" name="password" onBlur={handleBlur} placeholder=" ছয় সংখ্যার পাসওয়ার্ড" />
                            </div>


                            {newUser &&
                                <div className="input-box">

                                    <input name="name" type="text" onBlur={handleBlur} placeholder=" আপনার নাম" />
                                </div>

                            }


                        </div>

                        <div className="button">
                            {/* <input type="submit" value={newUser ? 'সাইন আপ' : 'সাইন ইন'} /> */}
                            <button className="btn" type="submit"><FontAwesomeIcon icon={faSignInAlt} /> {newUser ? 'সাইন আপ' : 'সাইন ইন'}</button>
                        </div>
                        <button className="btn" htmlFor="newUser" onClick={() => setNewUser(!newUser)} name="newUser" > <FontAwesomeIcon icon={faUser} /> নতুন অ্যাকাউন্ট</button><br />
                        <button className="btn" onClick={resetpassbtn} > <FontAwesomeIcon icon={faLock} /> পাসওয়ার্ড রিসেট করুন</button>


                    </form>
                </div>

            </div>
        </div>
    );
}

export default Login;
