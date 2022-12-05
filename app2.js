// function show_next(id,nextid,bar)
// {
//   var ele=document.getElementById(id).getElementsByTagName("input");
//   var error=0;
//   for(var i=0;i<ele.length;i++)
//   {
//     if(ele[i].type=="text" && ele[i].value=="")
//   {
//     error++;
//   }
//   }

//   if(error==0)
//   {
//     document.getElementById("account_details").style.display="none";
//     document.getElementById("user_details").style.display="none";
//     document.getElementById("qualification").style.display="none";
//     $("#"+nextid).fadeIn();
//     document.getElementById(bar).style.backgroundColor="#38610B";
//   }
//   else
//   {
//     alert("Fill All The details");
//   }
// }

// function show_prev(previd,bar)
// {
//   document.getElementById("account_details").style.display="none";
//   document.getElementById("user_details").style.display="none";
//   document.getElementById("qualification").style.display="none";
//   $("#"+previd).fadeIn();
//   document.getElementById(bar).style.backgroundColor="#D8D8D8";
// }




function info() {
  var name = document.getElementById('name').value;
  document.getElementById('nameShow').innerText = name;

  var genderMale = document.getElementById('gender1').checked;
  var genderFeMale = document.getElementById('gender2').checked;

  if (genderMale) {
    document.getElementById('genderuser').innerText = "Male";
  }
  else if (genderFeMale) {
    document.getElementById('genderuser').innerText = "Female";

  }


  var age = document.getElementById('age').value;
  document.getElementById('ageuser').innerText = age;



  var med1 = document.getElementById('medic1').value;
  document.getElementById('med1').innerText = med1;

  var med2 = document.getElementById('medic2').value;
  document.getElementById('med2').innerText = med2;
}

function ageVideo(){

  if(age>30){

    alert("Greater than 30")
    // var video = document.getElementById('video');

    // video.innerHTML = '<iframe width="727" height="409" src="https://www.youtube.com/embed/dB0AFSUl2Vk?list=RDdB0AFSUl2Vk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

  }
}
function info2() {
  var name = document.getElementById('name').value;
  document.getElementById('nameShow1').innerText = name;

  var genderMale = document.getElementById('gender1').checked;
  var genderFeMale = document.getElementById('gender2').checked;

  if (genderMale) {
    document.getElementById('genderuser1').innerText = "Male";
  }
  else if (genderFeMale) {
    document.getElementById('genderuser1').innerText = "Female";

  }


  var age = document.getElementById('age').value;
  document.getElementById('ageuser1').innerText = age;

  var med1 = document.getElementById('medic1').value;
  document.getElementById('med11').innerText = med1;

  var med2 = document.getElementById('medic2').value;
  document.getElementById('med21').innerText = med2;
}

// document.getElementById('nameShow1').innerText = name;
// function symtoms() {

//   var s1 = document.getElementById('c1').value;
//   document.getElementById("sy1").innerHTML = s1;

//   var s2 = document.getElementById('c2').value;
//   document.getElementById('sy2').innerText = s2;

//   // var s3 = document.getElementById('c3').value;
//   // document.getElementById('sy3').innerText = s3;

//   // var s4 = document.getElementById('c4').value;
//   // document.getElementById('sy4').innerText = s4;

//   // var s5 = document.getElementById('c5').value;
//   // document.getElementById('sy5').innerText = s5;

//   // var s6 = document.getElementById('c6').value;
//   // document.getElementById('sy6').innerText = s6;

//   // var s7 = document.getElementById('c7').value;
//   // document.getElementById('sy7').innerText = s7;

//   // var s8 = document.getElementById('c8').value;
//   // document.getElementById('sy8').innerText = s8;

// }
