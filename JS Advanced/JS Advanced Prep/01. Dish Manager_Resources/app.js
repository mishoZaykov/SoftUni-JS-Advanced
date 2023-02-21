window.addEventListener("load", solve);

function solve() {
  const firstName = document.getElementById("first-name");
  const lastaName = document.getElementById("last-name");
  const age = document.getElementById("age");
  const genre = document.getElementById("genderSelect");
  const dishDescription = document.getElementById("task");
  const submitButton = document.getElementById("form-btn");
  const progressList = document.getElementById("in-progress");
  const counter = document.getElementById("progress-count");
  const finish = document.getElementById("finished");
  const cleatButton = document.getElementById("clear-btn");

  const info = document.createElement("li");
  info.setAttribute("class", "each-line");
  const editButton = document.createElement("button");
  editButton.setAttribute("class", "edit-btn");
  editButton.textContent = "Edit";
  const completeButton = document.createElement("button");
  completeButton.setAttribute("class", "complete-btn");
  completeButton.textContent = "Mark as complete";

  submitButton.addEventListener("click", (e) => {
    if (
      firstName.value == "" ||
      lastaName.value == "" ||
      age.value == "" ||
      dishDescription.value == ""
    ) {
      return;
    }
    const article = document.createElement("article");
    const h4 = document.createElement("h4");
    h4.textContent = `${firstName.value} ${lastaName.value}`;

    const personInfoP = document.createElement("p");
    personInfoP.textContent = `${genre.value}, ${age.value}`;

    const dishDescriptionP = document.createElement("p");
    dishDescriptionP.textContent = `Dish description: ${dishDescription.value}`;

    article.appendChild(h4);
    article.appendChild(personInfoP);
    article.appendChild(dishDescriptionP);

    info.appendChild(article);
    info.appendChild(editButton);
    info.appendChild(completeButton);

    progressList.appendChild(info);

    counter.textContent = Number.parseInt(counter.textContent) + 1; // увеличаване на брояча

    const editFirstName = firstName.value;
    const editLastName = lastaName.value;
    const editAge = age.value;
    const editDishDescription = dishDescription.value;

    firstName.value = "";
    lastaName.value = "";
    age.value = "";
    dishDescription.value = "";

    editButton.addEventListener("click", (e) => {
      firstName.value = editFirstName;
      lastaName.value = editLastName;
      age.value = editAge;
      dishDescription.value = editDishDescription;

      info.remove();
      article.remove();
      counter.textContent = Number.parseInt(counter.textContent) - 1;
      if (counter.textContent < 0) {
        counter.textContent = 0;
      }
    });

    completeButton.addEventListener("click", (e) => {
      editButton.remove();
      completeButton.remove();
      finish.append(info);

      counter.textContent = Number.parseInt(counter.textContent) - 1;
      if (counter.textContent < 0) {
        counter.textContent = 0;
      }
    });

    cleatButton.addEventListener("click", (e) => {
      finish.innerHTML = "";
    });
  });
}
