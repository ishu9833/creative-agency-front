import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { FcGoogle } from 'react-icons/fc';
import logo from "../../Resources/images/logos/logo.png";
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../../App';




firebase.initializeApp(firebaseConfig);

export const getCurrentUser = () => {
    return new Promise((resolve) => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const { displayName, email, photoURL, emailVerified } = user;
                const currentUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    emailVerified
                }
                resolve(currentUser)
                // ...
            } else {
                resolve(user)
            }
        });
    });
}




const Login = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    console.log(loggedInUser);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/orders" } };



    const handleGoogleSignIn = () => {

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            storeAuthToken();
            history.replace(from)

        }).catch(function (error) {
            // var errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // var email = error.email;
            // var credential = error.credential;
        });

    }
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {

            });
    }
    return (
        <div className="container col-md-4" style={{ paddingTop: "10%" }}>
            <div className="text-center">
                <img className="" style={{ width: "150px" }} src={logo} alt="" />
            </div>
            <div className="card text-center mt-5 p-5">

                <div className="card-body">
                    <h5><strong> Login User</strong></h5>
                    <button style={{ border: "none", backgroundColor: "white", borderRadius: "20px", padding: "10px", margin: "5px" }} onClick={handleGoogleSignIn}>
                        <FcGoogle />  <span className="ml-3"><b> login with google</b></span>
                    </button>
                    <br />
                    <p><small><b>Don't have an account? <Link to="/signUpUser">Create a new account</Link> </b></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;