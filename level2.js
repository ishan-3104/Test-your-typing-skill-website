var result = "Both paragraph are not same try again";
var str2 = "If you learn from everything that happens to you, you will discover that there is no such thing as mistakes, only powerful lessons to be learned. Ans if you don't, chances are that your life will look at 40 the same way it did when you were 20. And at 60 the way it looked when you were 40..";
var c = 0;
var stop1 = false;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function myCounter() {
    document.getElementById("pra").innerHTML = str2;
    document.getElementById("btn").disabled = true;
  for(c=120;c>=0;c--){
    await sleep(1000)
      
    document.getElementById("counter").innerHTML=c;
    if(stop1 == true){    
      break;     
    }
    if(c==0){
      result = "Time is over please try again"
      document.getElementById("result").innerHTML=result;
    } 
  }
  
}
function stop(){
  if(c==-1){
    document.getElementById("btn1").disabled = true;
    
  }
  else{
    document.getElementById("counter").innerHTML=c;
    stop1 = true;
    var str1 = document.getElementById("t1").value;
    if(str1==str2){
      console.log("pass");
      result = "Congratulationn you have successfully pass tha Level-1"
      document.getElementById("result").innerHTML=result;
    }
    else{ 
      document.getElementById("result").innerHTML=result;
    }
  } 
  
}
  
