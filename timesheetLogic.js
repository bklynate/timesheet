/* global firebase moment */
// Steps to complete:

// 1. Initialize Firebase
// 2. Create button for adding new employees - then update the html + update the database
// 3. Create a way to retrieve employees from the employee database.
// 4. Create a way to calculate the months worked. Using difference between start and current time.
//    Then use moment.js formatting to set difference in months.
// 5. Calculate Total billed

// 1. Initialize Firebase
$(document).ready(function() {
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


     initApp = function() {


        // Initialize the FirebaseUI Widget using Firebase.
        //var ui = new firebaseui.auth.AuthUI(firebase.auth());
        // The start method will wait until the DOM is loaded.
        //ui.start('#firebaseui-auth-container', uiConfig);

        firebase.auth().onAuthStateChanged(function(user) {
          console.log('user', user);
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var providerData = user.providerData;
            user.getToken().then(function(accessToken) {
              document.getElementById('sign-in-status').textContent = 'Signed in';
              document.getElementById('sign-in').textContent = 'Sign out';
              document.getElementById('account-details').textContent = JSON.stringify({
                displayName: displayName,
                email: email,
                emailVerified: emailVerified,
                photoURL: photoURL,
                uid: uid,
                accessToken: accessToken,
                providerData: providerData
              }, null, '  ');
            });


            $('#signout').on('click', function(event) {
                firebase.auth().signOut().then(function() {
                  window.location.href = 'login.html';
                }, function(error) {
                  // An error happened.
                });              
            })   
          } else {
            // User is signed out.
            // document.getElementById('sign-in-status').textContent = 'Signed out';
            // document.getElementById('sign-in').textContent = 'Sign in';
            // document.getElementById('account-details').textContent = 'null';
            window.location.href = 'login.html';
          }
        }, function(error) {
          console.log(error);
        });
      };

      initApp();
});


// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use mets this test case
