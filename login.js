
console.log('in here');

     initApp = function() {



console.log('login.js');

// 1. Initialize Firebase
  var config = {
    apiKey: "AIzaSyB1S7t_o1f5F3LBSa-68fc9g0qLPpOsTvA",
    authDomain: "timesheet-93a27.firebaseapp.com",
    databaseURL: "https://timesheet-93a27.firebaseio.com",
    storageBucket: "timesheet-93a27.appspot.com",
    messagingSenderId: "887981362643"
  };
  firebase.initializeApp(config);

var database = firebase.database();

// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: 'https://iamakimmer.github.io/timesheet/index.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: 'https://iamakimmer.github.io/timesheet/tos.html'
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
      
        firebase.auth().onAuthStateChanged(function(user) {
          console.log('user', user);
          if (user) {
            window.location.href = 'index.html';
          } else {

            // // User is signed out.
            // document.getElementById('sign-in-status').textContent = 'Signed out';
            // document.getElementById('sign-in').textContent = 'Sign in';
            // document.getElementById('account-details').textContent = 'null';
          }
        }, function(error) {
          console.log(error);
        });
      };

      window.addEventListener('load', function() {
        initApp();
        console.log('in init app');
      });

// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use mets this test case
