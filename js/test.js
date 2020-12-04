var config = {
  apiKey: "AIzaSyCQDOTIYf6_8FHSbxsckL80gtI8DQfCe6g",
  authDomain: "vvvvv-dc879.firebaseapp.com",
  databaseURL: "https://vvvvv-dc879.firebaseio.com",
  projectId: "vvvvv-dc879",
  storageBucket: "vvvvv-dc879.appspot.com",
  messagingSenderId: "740270975513",
  appId: "1:740270975513:web:f3ad584a819ce129f99888",

};
firebase.initializeApp(config);


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
  var tb_modal = firebase.database().ref().child("tb");
      tb_modal.on('value',function(tb_modal){
        var tb= tb_modal.val();
        if(tb<30){
          modal.style.display='block';
        }
  
      })
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
