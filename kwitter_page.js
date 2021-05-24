//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDXyJih_QJamc7KFfU6bVYiz633dlsnD1Q",
    authDomain: "kwitter-app-96c6a.firebaseapp.com",
    databaseURL: "https://kwitter-app-96c6a-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-96c6a",
    storageBucket: "kwitter-app-96c6a.appspot.com",
    messagingSenderId: "644020362086",
    appId: "1:644020362086:web:92cec17759fa73504006a7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");


  function send()
  {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });

      document.getElementById("msg").value = "";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
