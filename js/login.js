
var firebaseConfig = {
    apiKey: "AIzaSyAe0_zKfODvMK8Otz8hz5LGKNayCECpiZw",
    authDomain: "its-k59.firebaseapp.com",
    databaseURL: "https://its-k59.firebaseio.com",
    projectId: "its-k59",
    storageBucket: "its-k59.appspot.com",
    messagingSenderId: "552163072398",
    appId: "1:552163072398:web:0deb2fc384dd6300a6ecdf",
    measurementId: "G-YF04DFHNBT"
  
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