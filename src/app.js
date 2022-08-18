 
let moon=document.getElementById("moon");
let sun = document.getElementById("sun");
let toggleimage = document.getElementById("toggleimage");
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
let delet = document.getElementById("delete");

let paragraph = document.getElementById("p");




toggleimage.addEventListener("click", () => {
  background.classList.toggle("bglight");
  moon.classList.toggle("hide");
  sun.classList.toggle("show");
  button.classList.toggle("submit2");
  input.classList.toggle("put2");
  form.classList.toggle("form2");
  general.classList.toggle("general2");
  changebgg.classList.toggle("bggwidth2");
  completed.classList.toggle("completed2");
  all.classList.toggle("all2");
 
});

form.addEventListener("submit", (e) => {
   e.preventDefault();
   let newlist = document.createElement("li");
   newlist.className = "list";
   newlist.innerHTML = `
              <div class="listchild">
                  <div class="span"></div>
                  <label>${input.value}</label>
              </div>
              <div class="img3">
                <img src="images/icon-cross.svg" class="delete">
              </div>
          </li> `;
    underlist.appendChild(newlist);
    input.value="";
});

underlist.addEventListener("click", (e) => {
if( e.target.classList.contains("delete")){
  let remove=e.target.parentElement.parentElement;
  underlist.removeChild(remove);
}
 });
 

underlist.addEventListener("click", (e) => {
   if (e.target.classList.contains("span")) {
     e.target.classList.toggle("good");
     e.target.parentElement.parentElement.classList.add("goo");
     let imgss = document.createElement("img");
     imgss.src = "images/icon-check.svg";
     e.target.appendChild(imgss);
   }
   paragraph.addEventListener("click", () => {
     for (const lis of underlist.children) {
       if (lis.classList.contains("goo")) {
         underlist.removeChild(lis);
       }
     }
   });
 
});



  

 /*underlist.addEventListener("click", (e) => {
   if (e.target.classList.contains("span")) {
     e.target.classList.toggle("good");
    let imgss = document.createElement("img");
     imgss.src = "images/icon-check.svg";
     e.target.appendChild(imgss);
     console.log(e.target);
   }
 });

delet.addEventListener("click", (e) => {
  let chil=delet.parentElement.parentElement;
   underlist.removeChild(chil);
    
});

 

 underlist.addEventListener("click", (e) => {
   if ( e.target.classList.contains("span")) {
     e.target.classList.toggle("good");
     
    let imgss=document.createElement("img")
    imgss.src = "images/icon-check.svg";
    e.target.appendChild(imgss);
    console.log(e.target);
   }
 });
 changebgg.addEventListener("click", (e) => {
   
    console.log("lists");
 });*/
 

 
 
     

    

  