//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCS8RrQm9zMivxN1POPdA6HXs8fYvOa1hA",
    authDomain: "kwitter-79730.firebaseapp.com",
    databaseURL: "https://kwitter-79730-default-rtdb.firebaseio.com",
    projectId: "kwitter-79730",
    storageBucket: "kwitter-79730.appspot.com",
    messagingSenderId: "394802012426",
    appId: "1:394802012426:web:6961ebbeddb1798131daf3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function send()
{
    msg=document.getElementById("msg").value
    firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0
    });
    document.getElementById("msg").value="";
}