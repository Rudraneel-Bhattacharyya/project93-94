
var firebaseConfig = {
      apiKey: "AIzaSyD96PH2HXKg24iK5z6kAPThkUnIMDmVoRo",
      authDomain: "kwitter-83177.firebaseapp.com",
      databaseURL: "https://kwitter-83177-default-rtdb.firebaseio.com",
      projectId: "kwitter-83177",
      storageBucket: "kwitter-83177.appspot.com",
      messagingSenderId: "1099173751949",
      appId: "1:1099173751949:web:3a6304e51f2b7bf8dec6c4"
    };
    
   
    firebase.initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
