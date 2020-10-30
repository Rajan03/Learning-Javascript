const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

//   aftter submission

function submitEvent() {
  // select values
  const book = document.getElementById("formGroupExampleInput").value,
    author = document.getElementById("formGroupExampleInput2").value,
    Info = [book, author];
  // if inputs empty
  if (book === "" || author === "") {
    showAlert("Couldn't Add", "danger");
    clearInputs();
  } else {
    addBook(Info);
  }
}

// On Adding a book

function addBook(Info) {
  const row = document.getElementById("book-data"),
    list = document.createElement("tr");
  list.className = "Book";
  list.innerHTML = `
      <td>${Info[0]}</td>
      <td>${Info[1]}</td>
      <td scope='row'>
      <a href='#'><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
      </svg></a>
      </td>
    
    `;
  row.appendChild(list);
  clearInputs();
  showAlert("Successfully Added", "success");
}

// Clearing Input feilds

function clearInputs() {
  document.getElementById("formGroupExampleInput").value = "";
  document.getElementById("formGroupExampleInput2").value = "";
}

// Alert function

function showAlert(message, className) {
  const container = document.querySelector(".card-body");
  const form = document.getElementById("form");
  const div = document.createElement("div");
  div.className = "alert";
  div.classList.add("alert-" + className);
  div.setAttribute("role", "alert");
  div.setAttribute("aria-live", "assertive");
  div.appendChild(document.createTextNode(message));
  container.insertBefore(div, form);
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 2000);
}

// Delete Book
// const deleteItem = document
//   .querySelector(".delete")
//   .addEventListener("click", () => {
//     console.log("done");
//   });
