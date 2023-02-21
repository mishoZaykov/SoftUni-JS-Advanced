window.addEventListener("load", solve);

function solve() {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const numberOfPeople = document.getElementById("people-count");
  const fromDate = document.getElementById("from-date");
  const numberOfDays = document.getElementById("days-count");
  const nextButton = document.getElementById("next-btn");
  const ticketInfo = document.querySelector(".ticket-info-list");
  const confirmTicket = document.querySelector(".confirm-ticket");
  const mainDiv = document.getElementById("main");
  const body = document.getElementById("body");

  const ticketList = document.createElement("li");
  ticketList.setAttribute("class", "ticket");
  const editButton = document.createElement("button");
  editButton.setAttribute("class", "edit-btn");
  editButton.textContent = "Edit";
  const continueButton = document.createElement("button");
  continueButton.setAttribute("class", "continue-btn");
  continueButton.textContent = "Continue";

  nextButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      firstName.value == "" ||
      lastName.value == "" ||
      numberOfPeople.value == "" ||
      fromDate.value == "" ||
      numberOfDays.value == ""
    ) {
      return;
    }

    let article = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.textContent = `Name: ${firstName.value} ${lastName.value}`;

    const fromDateP = document.createElement("p");
    fromDateP.textContent = `From date: ${fromDate.value}`;

    const numberOfDaysP = document.createElement("p");
    numberOfDaysP.textContent = `For ${numberOfDays.value} days`;

    const numberOfPeopleP = document.createElement("p");
    numberOfPeopleP.textContent = `For ${numberOfPeople.value} people`;

    article.appendChild(h3);
    article.appendChild(fromDateP);
    article.appendChild(numberOfDaysP);
    article.appendChild(numberOfPeopleP);

    ticketList.appendChild(article);
    ticketList.appendChild(editButton);
    ticketList.appendChild(continueButton);

    ticketInfo.appendChild(ticketList);

    let editFirstName = firstName.value;
    let editLastName = lastName.value;
    let editNumberOfPeople = numberOfPeople.value;
    let editFromDate = fromDate.value;
    let editNumberOfDays = numberOfDays.value;

    firstName.value = "";
    lastName.value = "";
    numberOfPeople.value = "";
    fromDate.value = "";
    numberOfDays.value = "";

    nextButton.disabled = true;
    editButton.disabled = false;
    continueButton.disabled = false;

    editButton.addEventListener("click", (e) => {
      firstName.value = editFirstName;
      lastName.value = editLastName;
      numberOfPeople.value = editNumberOfPeople;
      fromDate.value = editFromDate;
      numberOfDays.value = editNumberOfDays;

      ticketList.remove();
      article.remove();
      nextButton.disabled = false;
    });

    continueButton.addEventListener("click", (e) => {
      const ticketContent = document.createElement("li");
      ticketContent.setAttribute("class", "ticket-content");

      let confirmArticle = document.createElement("article");
      confirmArticle = article;

      const confirmButton = document.createElement("button");
      confirmButton.setAttribute("class", "confirm-btn");
      confirmButton.textContent = "Confirm";

      const cancelButton = document.createElement("button");
      cancelButton.setAttribute("class", "cancel-btn");
      cancelButton.textContent = "Cancel";

      ticketContent.appendChild(confirmArticle);
      ticketContent.appendChild(confirmButton);
      ticketContent.appendChild(cancelButton);
      ticketList.remove()
      ticketContent.remove();
      editButton.remove();
      continueButton.remove();

      confirmTicket.appendChild(ticketContent);

      cancelButton.addEventListener("click", (e) => {
        ticketContent.remove();
        nextButton.disabled = false;
      });

      confirmButton.addEventListener("click", (e) => {
        mainDiv.remove();
        const h1 = document.createElement("h1");
        h1.setAttribute("id", "thank-you");
        h1.textContent = "Thank you, have a nice day!";
        const backButton = document.createElement("button");
        backButton.setAttribute("id", "back-btn");
        backButton.textContent = "Back";

        body.appendChild(h1);
        body.appendChild(backButton);

        backButton.addEventListener("click", () => {
          window.location.reload()
        });
      });
    });
  });
}
