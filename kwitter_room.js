
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCAZtu78fo_uXXlLjLDaJqX-QPqveyyp60",
      authDomain: "kwitter-7b0af.firebaseapp.com",
      projectId: "kwitter-7b0af",
      storageBucket: "kwitter-7b0af.appspot.com",
      messagingSenderId: "486413603582",
      appId: "1:486413603582:web:5c6689bc9aebb5cc148baf"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("User_Name");
    document.getElementById("user_name").innerHTML="Welcome  "+user_name+"!"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
