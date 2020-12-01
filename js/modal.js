// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
// var btn1 = document.getElementById("myBtn1");
// var btn2 = document.getElementById("myBtn2");
// var btn3 = document.getElementById("myBtn3");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// btn1.onclick = function() {
//     modal.style.display = "block";
//   }
// btn2.onclick = function() {
//     modal.style.display = "block";
//   }
// btn3.onclick = function() {
//     modal.style.display = "block";
//   }
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

function showw(){

var test = document.getElementById('T').value
    if(test=="TC"){
      console.log("tat ca")
      document.getElementById('t1').style.display='block';
      document.getElementById('t1').style.display='flex'
      document.getElementById('t2').style.display='block';
      document.getElementById('t2').style.display='flex'
      document.getElementById('t3').style.display='block';
      document.getElementById('t3').style.display='flex'
      document.getElementById('t4').style.display='block';
      document.getElementById('t4').style.display='flex'
      document.getElementById('t5').style.display='block';
      document.getElementById('t5').style.display='flex'


    }
    if(test=="T1"){
      console.log("tang 1")
      document.getElementById('t1').style.display='block';
      document.getElementById('t1').style.display='flex'
      document.getElementById('t2').style.display='none';
      document.getElementById('t3').style.display='none';
      document.getElementById('t4').style.display='none';
      document.getElementById('t5').style.display='none';

      // document.getElementById('t2').style.display='none';
      // document.getElementById('t3').style.display='none';
      // document.getElementById('t4').style.display='none';
      // document.getElementById('t5').style.display='none';
    }
    if(test=="T2"){
      console.log("tang 2")
      document.getElementById('t2').style.display='block';
      document.getElementById('t2').style.display='flex'
      document.getElementById('t1').style.display='none';
      document.getElementById('t3').style.display='none';
      document.getElementById('t4').style.display='none';
      document.getElementById('t5').style.display='none';
    }
    if(test=="T3"){
      console.log("tang 3")
      document.getElementById('t3').style.display='block';
      document.getElementById('t3').style.display='flex'
      document.getElementById('t2').style.display='none';
      document.getElementById('t1').style.display='none';
      document.getElementById('t4').style.display='none';
      document.getElementById('t5').style.display='none';
    }
    if(test=="T4"){
      console.log("tang 4")
      document.getElementById('t4').style.display='block';
      document.getElementById('t4').style.display='flex'
      document.getElementById('t2').style.display='none';
      document.getElementById('t3').style.display='none';
      document.getElementById('t1').style.display='none';
      document.getElementById('t5').style.display='none';
    }
    if(test=="T5"){
      console.log("tang 5")
      document.getElementById('t5').style.display='block';
      document.getElementById('t5').style.display='flex'
      document.getElementById('t2').style.display='none';
      document.getElementById('t3').style.display='none';
      document.getElementById('t4').style.display='none';
      document.getElementById('t1').style.display='none';
    }
  }