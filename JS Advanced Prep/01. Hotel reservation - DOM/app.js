window.addEventListener("load", solve);

function solve() {
  const nextButton = document.getElementById("next-btn");
  const infoList = document.querySelector(".info-list");
  const confirmList = document.querySelector(".confirm-list");

  const inputValues = Array.from(
    document.querySelector(".container-text").querySelectorAll("input")
  );
  const reservationContent = document.createElement("li");
  reservationContent.setAttribute("class", "reservation-content");
  const editButton = document.createElement("button");
  editButton.setAttribute("class", "edit-btn");
  editButton.textContent = "Edit";
  const continueButton = document.createElement("button");
  continueButton.setAttribute("class", "continue-btn");
  continueButton.textContent = "Continue";
  const verification = document.getElementById("verification");

  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    const firstName = inputValues[0];
    const lastName = inputValues[1];
    const checkInDate = inputValues[2];
    const checkOutDate = inputValues[3];
    const numberOfGuests = inputValues[4];

    if (
      firstName.value == "" ||
      lastName.value == "" ||
      checkInDate.value == "" ||
      checkOutDate.value == "" ||
      numberOfGuests.value == "" ||
      new Date(checkInDate.value) >= new Date(checkOutDate.value)
    ) {
      return;
    }

    let article = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.textContent = `Name: ${firstName.value} ${lastName.value}`;

    const checkInP = document.createElement("p");
    checkInP.textContent = `From date: ${checkInDate.value}`;

    const checkOutP = document.createElement("p");
    checkOutP.textContent = `To date: ${checkOutDate.value}`;

    const numberOfGuestsP = document.createElement("p");
    numberOfGuestsP.textContent = `For ${numberOfGuests.value} people`;

    article.appendChild(h3);
    article.appendChild(checkInP);
    article.appendChild(checkOutP);
    article.appendChild(numberOfGuestsP);

    reservationContent.appendChild(article);
    reservationContent.appendChild(editButton);
    reservationContent.appendChild(continueButton);

    infoList.appendChild(reservationContent);

    let editFirstName = firstName.value;
    let editLastName = lastName.value;
    let editCheckInDate = checkInDate.value;
    let editCheckOutDate = checkOutDate.value;
    let editNumberOfGuests = numberOfGuests.value;

    for (let input of inputValues) {
      input.value = "";
    }

    nextButton.disabled = true;

    editButton.addEventListener("click", (e) => {
      firstName.value = editFirstName;
      lastName.value = editLastName;
      checkInDate.value = editCheckInDate;
      checkOutDate.value = editCheckOutDate;
      numberOfGuests.value = editNumberOfGuests;

      reservationContent.remove();
      article.remove();

      nextButton.disabled = false;
    });

    continueButton.addEventListener("click", (e) => {
      const reservationContent = document.createElement("li");
      reservationContent.setAttribute("class", "reservation-content");

      let finalArticle = document.createElement("article");
      finalArticle = article;

      const confirmButton = document.createElement("button");
      confirmButton.setAttribute("class", "confirm-btn");
      confirmButton.textContent = "Confirm";

      const cancelButton = document.createElement("button");
      cancelButton.setAttribute("class", "cancel-btn");
      cancelButton.textContent = "Cancel";

      reservationContent.appendChild(finalArticle);
      reservationContent.appendChild(confirmButton);
      reservationContent.appendChild(cancelButton);
      reservationContent.remove();
      editButton.remove();
      continueButton.remove();

      confirmList.appendChild(reservationContent);

      confirmButton.addEventListener("click", (e) => {
        reservationContent.remove();
        nextButton.disabled = false;

        verification.setAttribute("class", "reservation-confirmed");
        verification.textContent = "Confirmed.";
      });

      cancelButton.addEventListener("click", (e) => {
        reservationContent.remove();
        nextButton.disabled = false;

        verification.setAttribute("class", "reservation-cancelled");
        verification.textContent = "Cancelled.";
      });
    });
  });
}
