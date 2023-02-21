window.addEventListener("load", solve);

//Задата е напълно решена самостоятелно

function solve() {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const age = document.getElementById("age");
  const storyTitle = document.getElementById("story-title");
  const genre = document.getElementById("genre");
  const storyText = document.getElementById("story");
  const publishButton = document.getElementById("form-btn");
  const previewList = document.getElementById("preview-list");
  const mainDiv = document.getElementById("main");

  const storyInfo = document.createElement("li");
  storyInfo.setAttribute("class", "story-info");
  const saveButton = document.createElement("button");
  saveButton.setAttribute("class", "save-btn");
  saveButton.textContent = "Save Story";
  const editButton = document.createElement("button");
  editButton.setAttribute("class", "edit-btn");
  editButton.textContent = "Edit Story";
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete-btn");
  deleteButton.textContent = "Delete Story";

  publishButton.addEventListener("click", (e) => {
    if (
      firstName.value == "" ||
      lastName.value == "" ||
      age.value == "" ||
      storyTitle.value == "" ||
      storyText.value == ""
    ) {
      return;
    }
    const article = document.createElement("article");
    const h4 = document.createElement("h4");
    h4.textContent = `Name: ${firstName.value} ${lastName.value}`;

    const ageP = document.createElement("p");
    ageP.textContent = `Age: ${age.value}`;

    const storyTitleP = document.createElement("p");
    storyTitleP.textContent = `Title: ${storyTitle.value}`;

    const genreP = document.createElement("p");
    genreP.textContent = `Genre: ${genre.value}`;

    const storyTextP = document.createElement("p");
    storyTextP.textContent = storyText.value;

    article.appendChild(h4);
    article.appendChild(ageP);
    article.appendChild(storyTitleP);
    article.appendChild(genreP);
    article.appendChild(storyTextP);

    storyInfo.appendChild(article);
    storyInfo.appendChild(saveButton);
    storyInfo.appendChild(editButton);
    storyInfo.appendChild(deleteButton);

    previewList.appendChild(storyInfo);

    let editFirstName = firstName.value;
    let editLastName = lastName.value;
    let editAge = age.value;
    let editStoryTitle = storyTitle.value;
    let editStoryText = storyText.value;

    firstName.value = "";
    lastName.value = "";
    age.value = "";
    storyTitle.value = "";
    storyText.value = "";

    publishButton.disabled = true;
    saveButton.disabled = false;
    editButton.disabled = false;
    deleteButton.disabled = false;

    editButton.addEventListener("click", (e) => {
      firstName.value = editFirstName;
      lastName.value = editLastName;
      age.value = editAge;
      storyTitle.value = editStoryTitle;
      storyText.value = editStoryText;

      storyInfo.remove();
      article.remove();
      publishButton.disabled = false;
    });

    saveButton.addEventListener("click", (e) => {
      mainDiv.innerHTML = "";
      const h1 = document.createElement("h1");
      h1.textContent = "Your scary story is saved!";
      mainDiv.appendChild(h1);
    });

    deleteButton.addEventListener("click", (e) => {
      storyInfo.remove();
      publishButton.disabled = false;
    });
  });
}
