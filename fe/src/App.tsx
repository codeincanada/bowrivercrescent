import React, {useEffect} from 'react';
import './App.css';
import * as firebaseui from "firebaseui";
import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCUHHOJvZPZrwW76HyRlmIOoN5jSbAE-3U",
    authDomain: "bowrivercrescent.firebaseapp.com",
    databaseURL: "https://bowrivercrescent.firebaseio.com",
    projectId: "bowrivercrescent",
    storageBucket: "bowrivercrescent.appspot.com",
    messagingSenderId: "730073303897",
    appId: "1:730073303897:web:ae45c2665f7fe8708b1a48",
    measurementId: "G-1G7HCB5C68"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
    signInOptions: [
        // List of OAuth providers supported.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
});

const uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult: any, redirectUrl: any) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            const loader = document.getElementById('loader');
            if (loader) {
                loader.style.display = 'none'
            }
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '/term-of-service',
    // Privacy policy url.
    privacyPolicyUrl: '/privacy-policy'
};

function App() {

    useEffect(() => {
        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to the <br/><span className="street-name-font"><span role="img"
                                                                                 aria-label="map icon">🗺️</span>Bow River Crescent</span> community!
                </h1>
                <p>We would like to help our micro-society.
                    <br/>Get in the loop by signing in here.
                    <br/><small className="ps-font">PS: And you don't need a new set of username or password in your
                        life, right?!</small>
                </p>
            </header>
            <main id="firebaseui-auth-container" className="App-main">
                <div id="loader">Loading...</div>
            </main>
        </div>
    );
}

export default App;
