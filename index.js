
// var randomNumber = Math.floor(Math.random() * 6) + 1;
// var randomImage = "assets/bg" + randomNumber + ".png";
document.body.style.backgroundImage = "url(https://picsum.photos/1920/1080)";


var dt = new Date();
document.getElementById("time").innerHTML=dt.toLocaleString('en-US',{
   hour: 'numeric',
   minute: 'numeric',
   hour12: true 
});

function greeting(){
//    //  if (dt> "12:00 PM"){
//    //     return document.getElementById("greeting").innerHTML = "GOOD AFTERNOON";
//    //  }else if(dt> "5:00 PM"){
//    //     return document.getElementById("greeting").innerHTML = "GOOD EVENING";
//    //  }else {
//    //     return document.getElementById("greeting").innerHTML = "GOOD MORNING";
//    //  }
//     if (dt >= 0 && dt < 12) {
//       return document.getElementById("greeting").innerHTML = "GOOD MORNING";
//   } else if (dt >= 12 && dt <= 17) {
//    return document.getElementById("greeting").innerHTML = "GOOD AFTERNOON";
//   } else {
//    return document.getElementById("greeting").innerHTML = "GOOD EVENING";
//   }
  var hours = dt.getHours();
  console.log(hours);
  return( hours < 12 ? document.getElementById("greeting").innerHTML ='Good Morning' : 
  hours < 17 ? document.getElementById("greeting").innerHTML ='Good Afternoon' : 
  document.getElementById("greeting").innerHTML ='Good Evening');
}
greeting()

const url = "https://api.quotable.io/random";
function generateQuote(){
   fetch(url)
  .then(function(data) {
         return data.json();
    })
    .then(function(data){    
    document.getElementById("quote").innerHTML = data.content; 
   })
 .catch(function(err) {
    console.log(err); 
    });
 }
 
generateQuote();

