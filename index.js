console.log("hello");
var i=1;
var toggler= document.querySelector(".toggle");
toggler.addEventListener("click",function(){
  if(i%2==0)
  {
    var a=document.querySelector(".nav2");
    a.classList.remove("hidden");
  }
  else{
    var a=document.querySelector(".nav2");
    a.classList.add("hidden");
  }
  i++;
});
