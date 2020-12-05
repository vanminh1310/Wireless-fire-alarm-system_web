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
firebase.initializeApp(firebaseConfig);


  // var database = firebase.database();
  // var test = document.getElementById('thongbao')
  // var red = firebase.database().ref().child("name");
  // red.on('value', function (red) //đọc dữ liệu tu firebase
  // {
  
  //     test.innerText = red.val();
  //     console.log(red.val())
  //     ;})
  var modal = document.getElementById('modal_ecall');
  // thong bao su co 
  var tb_modal = firebase.database().ref().child("Floors1/G");
      tb_modal.on('value',function(tb_modal){
        var tb= tb_modal.val();
        if(tb<1){
          modal.style.display='block';
        }
  
      })

// time 
      setInterval(displayclock,500);
  function displayclock(){
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    if (hrs>12){
      hrs = hrs -12;

    }
    if(hrs == 12){
      hrs = 12;
    }
    if(hrs<10){
      hrs ='0'+hrs;
    }
    if(min<10){
      min = '0' +min;

    }
    if(sec<10){
      sec= '0'+sec;
    }
    document.getElementById('clock').innerHTML=hrs + ':' + min +':' + sec;
  }
    
  
  
  
  var modal = document.getElementById('modal_ecall');
    var btn2= document.getElementById('bnt2');
    btn2.onclick = function() {
          modal.style.display = "none";
        }

// logout
        function logout(){
          firebase.auth().signOut();
          window.open('index.html','_self')
        }
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed 
          var user = firebase.auth().currentUser;
      
          if(user != null){
      
            var email_id = user.email;
            console.log(email_id)
            
            document.getElementById("user_para").innerHTML = email_id;
            // window.open('home.html','_self')
          }
      
        } else {
          // No user is signed in.
      
       
      
        }
      });


        // var database = firebase.database();
  // var test = document.getElementById('thongbao')
  // var red = firebase.database().ref().child("name");
  // red.on('value', function (red) //đọc dữ liệu tu firebase
  // {
  
  //     test.innerText = red.val();
  //     console.log(red.val())
  //     ;})
  //  đọc nhiệt độ đọ ẩm 
  var h = document.getElementById('h')
  var t = document.getElementById('t')
  var g = document.getElementById('g')
  var f = document.getElementById('f')
  var readh = firebase.database().ref().child("Floors1/H")
  var readt = firebase.database().ref().child("Floors1/T")
  var readg = firebase.database().ref().child("Floors1/G")
  var readf = firebase.database().ref().child("Floors1/F")
  readh.on('value',function(readh){
  h.innerHTML=readh.val();
  console.log(readh);
  });
  readt.on('value',function(readt){
    t.innerHTML=readt.val();
    console.log(readt);
    });
    readg.on('value',function(readg){
      if (readg.val()==1){
     g.innerHTML="OK";
    }
    else{
      g.innerHTML="<span style='color: red;'>Wr</span>"
    }
    console.log(readg);
      });


     readf.on('value',function(readf){
      if (readf.val()==1){
     f.innerHTML="OK";
    }
    else{
      f.innerHTML="<span style='color: red;'>Wr</span>"
    }
    console.log(readf);
      });
    
  

