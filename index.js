
// responsive_toggler

var i=2;
var toggler= document.querySelector(".toggle");
toggler.addEventListener("click",function(){
  if(i%2==0)
  {
    var a=document.querySelector(".nav2");
    a.classList.add("display");
    a.classList.remove("hidden");

  }
  else{
    var a=document.querySelector(".nav2");
    a.classList.remove("display");
    a.classList.add("hidden");
  }
  i++;
});

//chatbot
var j=2;
var startconv= document.querySelector(".chaton");
startconv.addEventListener("click",function(){
  if(j%2==0)
  {
    var b=document.querySelector(".chatcon");
    b.classList.add("display");
    b.classList.remove("hidden");

  }
  else{
    var b=document.querySelector(".chatcon");
    b.classList.remove("display");
    b.classList.add("hidden");
  }
  j++;
});

//chatbot2
var fsubm= document.querySelector(".startcon");
fsubm.addEventListener("click",function(){

    var c=document.querySelector(".chatcon2");
    c.classList.add("display");
    c.classList.remove("hidden");
    var d=document.querySelector(".chatcon");
    d.classList.remove("display");
    d.classList.add("hidden");

  });
