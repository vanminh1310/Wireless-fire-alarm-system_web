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
  // var tb_modal = firebase.database().ref().child("Floors1/G");
  //     tb_modal.on('value',function(tb_modal){
  //       var tb= tb_modal.val();
  //       if(tb<1){
  //         modal.style.display='block';
  //       }
  
  //     })

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
    
  
  var bnt1 = document.getElementById("btn1")
  var canhbao2 = document.getElementById("canhbao2")
  var nd = document.getElementById('nd')
  
  var modal1 = document.getElementById('modal_ecall1');
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
          modal1.style.display="block"
          document.getElementById("canhbao").style.display="none"
          document.getElementById("name_p").style.display="none"
          document.getElementById("st").style.display="none"
          document.getElementById("nd").innerHTML="Dường như bạn chưa đăng nhập! Hãy đăng nhập để tiếp tục"
          
      
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
  function read123(){
  var h = document.getElementById('h')
  var t = document.getElementById('t')
  var g = document.getElementById('g')
  var f = document.getElementById('f')
  var h202 =document.getElementById('h202')
  var t202 = document.getElementById('t202')
  var g202 = document.getElementById('g202')
  var f202 = document.getElementById('f202')

  var h303 =document.getElementById('h303')
  var t303 = document.getElementById('t303')
  var g303 = document.getElementById('g303')
  var f303 = document.getElementById('f303')

  var h404 =document.getElementById('h404')
  var t404 = document.getElementById('t404')
  var g404 = document.getElementById('g404')
  var f404 = document.getElementById('f404')

  var readh = firebase.database().ref().child("Floors1/H")
  var readt = firebase.database().ref().child("Floors1/T")
  var readg = firebase.database().ref().child("Floors1/G")
  var readf = firebase.database().ref().child("Floors1/F")

  var readh202 = firebase.database().ref().child("Floors2/H")
  var readt202 = firebase.database().ref().child("Floors2/T")
  var readg202 = firebase.database().ref().child("Floors2/G")
  var readf202 = firebase.database().ref().child("Floors2/F")

  var readh303 = firebase.database().ref().child("Floors3/H")
  var readt303 = firebase.database().ref().child("Floors3/T")
  var readg303 = firebase.database().ref().child("Floors3/G")
  var readf303 = firebase.database().ref().child("Floors3/F")

  var readh404 = firebase.database().ref().child("Floors4/H")
  var readt404 = firebase.database().ref().child("Floors4/T")
  var readg404 = firebase.database().ref().child("Floors4/G")
  var readf404 = firebase.database().ref().child("Floors4/F")
 
  var name_p = document.getElementById('name_p')
  var st = document.getElementById('st')
  // 101
  readh.on('value',function(readh){
    h.innerHTML=readh.val();
    console.log(readh);
    });
    readt.on('value',function(readt){
      t.innerHTML=Math.ceil( readt.val(),1);
      console.log(readt);
      });
      readg.on('value',function(readg){
        if (readg.val()==1){
       g.innerHTML="OK";
      }
      else{
        //f.innerHTML="<span style='color: red;'>Wr</span>"
        g.innerHTML="<span style='color: red;'>Wr</span>"
        name_p.innerHTML="<span style='color: red;'>101<span>"
        st.innerHTML="<span style='color:#0093E9;'> phát hiện khí gas<span>"
        canhbao2.style.display="none"
        nd.style.display="none"
        btn2.style.display="block"
      
  
        modal.style.display='block';
  
      }
      console.log(readg);
        });
  
  
       readf.on('value',function(readf){
        if (readf.val()==1){
       f.innerHTML="OK";
      }
      else{
        f.innerHTML="<span style='color: red;'>Wr</span>"
        
        name_p.innerHTML="<span style='color: red;'>101<span>"
        st.innerHTML="<span style='color:#0093E9;'> phát hiện lửa<span>"
  
        modal.style.display='block';

        canhbao2.style.display="none"
        nd.style.display="none"
        btn2.style.display="block"
     

      }
      console.log(readf);
        });


    // 202
    readh202.on('value',function(readh202){
      h202.innerHTML=readh202.val();
      console.log(readh202);
      });
      readt202.on('value',function(readt202){
        t202.innerHTML=Math.ceil(readt202.val());
        console.log(readt202);
        });
        readg202.on('value',function(readg202){
          if (readg202.val()==1){
         g202.innerHTML="OK";
        }
        else{
          g202.innerHTML="<span style='color: red;'>Wr</span>"
          
          name_p.innerHTML="<span style='color: red;'>202<span>"
          st.innerHTML="<span style='color:#0093E9;'> phát hiện khí gas<span>"
    
          modal.style.display='block';

          canhbao2.style.display="none"
          nd.style.display="none"
          btn2.style.display="block"
       
          
    
        }
        console.log(readg202);
          });
    
    
         readf202.on('value',function(readf202){
          if (readf202.val()==1){
         f202.innerHTML="OK";
        }
        else{
          f202.innerHTML="<span style='color: red;'>Wr</span>"
          
          name_p.innerHTML="<span style='color: red;'>202<span>"
          st.innerHTML="<span style='color:#0093E9;'> phát hiện lửa<span>"
    
          modal.style.display='block';
          canhbao2.style.display="none"
          nd.style.display="none"
          btn2.style.display="block"
          
    
        }
        console.log(readf202);
          });
// 303
readh303.on('value',function(readh303){
  h303.innerHTML=Math.ceil( readh303.val());
  console.log(readh303);
  });
  readt303.on('value',function(readt303){
    t303.innerHTML=Math.ceil(readt303.val());
    console.log(readt303);
    });
    readg303.on('value',function(readg303){
      if (readg303.val()==1){
     g303.innerHTML="OK";
    }
    else{
      g303.innerHTML="<span style='color: red;'>Wr</span>"
     
      name_p.innerHTML="<span style='color: red;'>303<span>"
      st.innerHTML="<span style='color:#0093E9;'> phát hiện khí gas<span>"

      modal.style.display='block';

      canhbao2.style.display="none"
      nd.style.display="none"
      btn2.style.display="block"
     


    }
    console.log(readg);
      });


     readf303.on('value',function(readf303){
      if (readf303.val()==1){
     f303.innerHTML="OK";
    }
    else{
      f303.innerHTML="<span style='color: red;'>Wr</span>"
      
      name_p.innerHTML="<span style='color: red;'>303<span>"
      st.innerHTML="<span style='color:#0093E9;'> phát hiện lửa<span>"

      modal.style.display='block';
      canhbao2.style.display="none"
      nd.style.display="none"
      btn2.style.display="block"
     
      
    }
    console.log(readf303);
      });
    // 404
     readh404.on('value',function(readh404){
  h404.innerHTML=readh404.val();
  console.log(readh404);
  });
  readt404.on('value',function(readt404){
    t404.innerHTML=Math.ceil( readt404.val());
    console.log(readt404);
    });
    readg404.on('value',function(readg404){
      if (readg404.val()==1){
     g404.innerHTML="OK";
    }
    else{
      g404.innerHTML="<span style='color: red;'>Wr</span>"
      
      name_p.innerHTML="<span style='color: red;'>404<span>"
      st.innerHTML="<span style='color:#0093E9;'> phát hiện khí gas<span>"

      modal.style.display='block';

      canhbao2.style.display="none"
      nd.style.display="none"
      btn2.style.display="block"
     

    }
    console.log(readg404);
      });


     readf404.on('value',function(readf404){
      if (readf404.val()==1){
     f404.innerHTML="OK";
    }
    else{
      f404.innerHTML="<span style='color: red;'>Wr</span>"
      
      name_p.innerHTML="<span style='color: red;'>404<span>"
      st.innerHTML="<span style='color:#0093E9;'> phát hiện lửa<span>"

      modal.style.display='block';

      canhbao2.style.display="none"
      nd.style.display="none"
      btn2.style.display="block"
      


    }
    console.log(readf404);
      });
    
  
    }
   
    read123();
