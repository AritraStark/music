
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
    document.querySelector(".trig-on").src = "x-vec.png";


  }
  else{
    var b=document.querySelector(".chatcon");
    b.classList.remove("display");
    b.classList.add("hidden");
    var d=document.querySelector(".chatcon2");
    d.classList.remove("display");
    d.classList.add("hidden");

    document.querySelector(".trig-on").src = "Sparrow Bird.png";

  }
  j++;
});

//chatbot2
var startconv2= document.querySelector(".startcon");
startconv2.addEventListener("click",function(){

    var c=document.querySelector(".chatcon2");
    c.classList.add("display");
    c.classList.remove("hidden");
    var b=document.querySelector(".chatcon");
    b.classList.remove("display");
    b.classList.add("hidden");

  });


  var fsubm= document.querySelector(".fsub");
  fsubm.addEventListener("click",function(){
      var e = document.querySelector(".txtin").value;
      document.querySelector(".bubble1").innerText = e;
      var f=document.querySelector(".bubble1");
      f.classList.add("display");
      f.classList.remove("hidden");
      setTimeout(function(){
        var g=document.querySelector(".response");
        g.classList.add("display");
        g.classList.remove("hidden");
      }, 1000);


    });


    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(commits => document.querySelector(".bubble").innerText=commits.slip.advice);
