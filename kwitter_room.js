
const firebaseConfig = {
      apiKey: "AIzaSyBL4kWz9WvwrwygnuwStRKKDPtfqt8Gp3E",
      authDomain: "project93-269a3.firebaseapp.com",
      databaseURL: "https://project93-269a3-default-rtdb.firebaseio.com",
      projectId: "project93-269a3",
      storageBucket: "project93-269a3.appspot.com",
      messagingSenderId: "1024895311945",
      appId: "1:1024895311945:web:4eeb7ef5e9567ca0401f98"
    };

    firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function addRoom() {
      room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child("room_name").update({purpose:"adding room"});


}