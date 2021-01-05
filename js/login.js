var firebaseConfig = {
  apiKey: "AIzaSyBqZ817fOLwFxG7B9DipM0HqUznx1AulCQ",
  authDomain: "pcccc-iot.firebaseapp.com",
  databaseURL: "https://pcccc-iot.firebaseio.com",
  projectId: "pcccc-iot",
  storageBucket: "pcccc-iot.appspot.com",
  messagingSenderId: "297582591282",
  appId: "1:297582591282:web:4d1a646b0f2af8d300ab2b",
  measurementId: "G-H33NTR7BPC"
};
// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 var rootRef = firebase.database().ref();
  const auth = firebase.auth();
  
  function  signIn(){
    var gmail= document.getElementById("user");
    var pass = document.getElementById("pass");
    const login =auth.signInWithEmailAndPassword(gmail.value, pass.value);
     
    // login.catch(e => alert(e.message))
    login.catch(e=> document.getElementById('qmk').innerHTML = e.message)
    
   login.then(function (_result) {
     window.location.replace('home.html');
   })
 
  }


  