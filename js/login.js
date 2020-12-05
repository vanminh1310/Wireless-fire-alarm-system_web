var firebaseConfig = {
  apiKey: "AIzaSyALyfBlOsvmKDwNQLTKurC5hf_BmFKYnr4",
  authDomain: "vann-53570.firebaseapp.com",
  databaseURL: "https://vann-53570.firebaseio.com",
  projectId: "vann-53570",
  storageBucket: "vann-53570.appspot.com",
  messagingSenderId: "476713717043",
  appId: "1:476713717043:web:93e1c456a05aa8b8130246",
  measurementId: "G-8PRCPKPS2K"
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


  