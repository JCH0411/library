const add = document.querySelector(".add-book");
const body = document.querySelector("body");
let fname;
let lname;
let year;
let submit;
let exit;
let form;


let books = [];

const bookInfo = function(title, author, year){
  this.title = title;
  this.author = author;
  this.year = year;
}

// body.addEventListener("click", (event)=>{
//
//   if(event.target.value === "Submit"){
//
//   }
//   else if(event.target.value === "Exit"){
//     console.log("exit")
//   }
//
//   event.stopPropagation();
// })
add.addEventListener("click",(event)=>{
  add.classList.add("hide-add-button")
  createform();
  event.stopPropagation();
})

function createform(){
  form = document.createElement("form");
  form.classList.add("book-card-form");

  const fname = document.createElement("input");
  fname.setAttribute("type", "text")
  fname.setAttribute("name", "title")
  fname.setAttribute("placeholder", "Book Title")
  fname.classList.add("form-input");
  fname.setAttribute("required"," ");

  const lname = document.createElement("input");
  lname.setAttribute("type", "text")
  lname.setAttribute("name", "Author")
  lname.setAttribute("placeholder", "Book Author")
  lname.classList.add("form-input");
  lname.setAttribute("required"," ");

  const year = document.createElement("input");
  year.setAttribute("type", "number")
  year.setAttribute("name", "Year")
  year.setAttribute("placeholder", "year Published")
  year.setAttribute('style','display:block');
  year.classList.add("form-input");
  year.setAttribute("required"," ");


  const submit = document.createElement("input");
  submit.setAttribute("type", "button")
  submit.setAttribute("value", "Submit")
  submit.classList.add("form-btn");

  const exit = document.createElement("input");
  exit.setAttribute("type", "button")
  exit.setAttribute("value", "Exit")
  exit.classList.add("form-btn");

  form.appendChild(fname);
  form.appendChild(lname);
  form.appendChild(year);
  form.appendChild(submit)
  form.appendChild(exit)

  body.append(form);

  form.addEventListener("click", (event)=>{

    if(event.target.value === "Submit"){
        // event.preventDefault()
        // console.log(fname.value, lname.value, year.value)
        // let item = new bookInfo(fname.value, lname.value, year.value)
        books.push(new bookInfo(fname.textContent, lname.textContent, year.textContent));
          console.log(books[0])



      }
      else if(event.target.value === "Exit"){
        console.log("exit")
      }
  })
}
console.log(books[0])
