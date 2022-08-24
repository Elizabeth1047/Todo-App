let moon = document.getElementById("moon");
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
let alone = document.querySelector(".alone");
let general = document.getElementById("general");
let nam = document.getElementById("name");
let paragraph = document.getElementById("p");
let count = document.getElementById("no");
let com = document.getElementById("com");
let alls = document.getElementById("alls");
let actives = document.getElementById("actives");

let myprompt = () => {
  let myid = prompt("what is your name");
  nam.innerHTML = myid + "'s";
};

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
  alone.classList.toggle("alone2");
});
//   // creating list items
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newlist = document.createElement("li");
  newlist.className = "list";
  newlist.innerHTML = `
              <div class="listchild">
                  <div class="span" >
                   
                  </div>
                  <label>${input.value}</label>
              </div>
              <div class="img3" id="img3">
                <img src="images/icon-cross.svg" class="delete" id="delete">
              </div>
          </li> `;
  underlist.appendChild(newlist);
  counts();
  input.value = "";
});

// to remove individual list item
underlist.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    let remove = e.target.parentElement.parentElement;
    underlist.removeChild(remove);
  } 
  counts();
  // to add a checkmark to my checkbox
  if (e.target.classList.contains("span")) {
    e.target.classList.toggle("good");
    e.target.parentElement.parentElement.classList.toggle("goo");
    // let imgss = document.createElement("img");
    // imgss.src = "images/icon-check.svg";
    // e.target.appendChild(imgss);
  }
  // to remove list items with a checkmark
  paragraph.addEventListener("click", () => {
    for (const lis of underlist.children) {
      if (lis.classList.contains("goo")) {
        arr = underlist.removeChild(lis);
      }
      counts();
    }
  });
  com.addEventListener("click", () => {
    for (const lis of underlist.children) {
      if (!lis.classList.contains("goo")) {
        underlist.removeChild(lis);
      }
      counts();
    }
  });

 });
 
 myprompt();

// to show the number of list items left after adding,deleting and removing
let counts = () => {
  count.innerText = underlist.children.length;
};

