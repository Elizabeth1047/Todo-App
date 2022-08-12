let moon=document.getElementById("moon");
let sun = document.getElementById("sun");
let background = document.getElementById("bgdark");
let button = document.getElementById("submit");
let input = document.getElementById("input");
let form = document.getElementById("form");
let underlist = document.getElementById("unde");
let lists = document.querySelectorAll(".list");
let changebg = document.getElementById("bggcolor");
let changebgg = document.getElementById("bggwidth");
let completed = document.getElementById("completed");
let all = document.getElementById("all");
let general = document.getElementById("general");





moon.addEventListener("click", () => {
  background.classList.toggle("bglight");
  moon.style.display = "none";
  sun.style.display = "block";
  form.style.backgroundColor = "white";
   changebg.style.backgroundColor = "hsl(234, 39%, 85%)";
  changebgg.style.backgroundColor = "white";
 all.style.backgroundColor = "white";
 all.style.color = "black";
  input.style.backgroundColor = "white";
  input.style.color = "black";
  button.style.backgroundColor = "white";
  changebgg.style.color = "black";
   completed.style.color = "black";

  
  
});

sun.addEventListener("click", () => {
   background.classList.toggle("bglight");
  sun.style.display = "none";
  moon.style.display = "block";
  form.style.backgroundColor = "hsl(235, 24%, 19%)";
   changebg.style.backgroundColor = "rgb(4, 1, 17";
  changebgg.style.backgroundColor = "hsl(235, 24%, 19%)";
  all.style.backgroundColor = "hsl(235, 24%, 19%)";
  all.style.color = "hsl(240, 2%, 67%)";
  input.style.backgroundColor = "hsl(235, 24%, 19%)";
  
  button.style.backgroundColor = "hsl(235, 24%, 19%)";
  changebgg.style.color = "hsl(234, 39%, 85%)";
  completed.style.color = "hsl(240, 2%, 67%)";

});



form.addEventListener("submit", (e) => {
   e.preventDefault();
   let newlist = document.createElement("li");
   newlist.className = "list";
   let first = document.createElement("div");
   first.className = "listchild";
   let one = document.createElement("div");
   one.className = "span";
   let two = document.createElement("label");
   two.textContent = input.value;
    let three = document.createElement("div");
    three.className = "img3";
    let x = document.createElement("img");
    x.src = "images/icon-cross.svg";
    x.className = "delete";
    first.appendChild(one)
    first.appendChild(two);
    three.appendChild(x)
    newlist.appendChild(first);
    newlist.appendChild(three);
    underlist.appendChild(newlist);
    
});

underlist.addEventListener("click", (e) => {
if( e.target.classList.contains("delete")){
  let remove=e.target.parentElement.parentElement;
  underlist.removeChild(remove);
}
 });

 underlist.addEventListener("click", (e) => {
   if ( e.target.classList.contains("span")) {
     e.target.classList.toggle("good");
   let imgss=document.createElement("img")
   imgss.src = "images/icon-check.svg";
   imgss.style.textAlign="center"
   e.target.appendChild(imgss)
   console.log(e.target)
   }
 });
 changebgg.addEventListener("click", (e) => {
   if (e.target.classList.contains("p")) {
    
    
    
   }
 });

 
 
     

    

  