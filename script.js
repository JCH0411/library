const add = document.querySelector(".add-book");
add.addEventListener("click",(event)=>{
  console.log(event)
  add.classList.add("hide-add-button")
  createform();
})
function createform(){
  const form = document.createElement("form");
  form.classList.add("book-card-form");

  const fname = document.createElement("input");
  fname.setAttribute("type", "text")
  fname.setAttribute("name", "title")
  fname.setAttribute("placeholder", "Book Title")

  const lname = document.createElement("input");
  lname.setAttribute("type", "text")
  lname.setAttribute("name", "Author")
  lname.setAttribute("placeholder", "Book Author")

  const year = document.createElement("input");
  year.setAttribute("type", "number")
  year.setAttribute("name", "Year")
  year.setAttribute("placeholder", "year Published")
  year.setAttribute('style','display:block');
  console.log(year)


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

  document.querySelector("body").append(form);

}

