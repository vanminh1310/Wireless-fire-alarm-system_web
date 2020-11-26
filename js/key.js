       // Initialize Firebase
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


function logout(){
    firebase.auth().signOut();
    window.open('index.html','_self')
  }
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.


    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      
      document.getElementById("user_para").innerHTML = email_id;
      // window.open('home.html','_self')
    }

  } else {
    // No user is signed in.

 

  }
});