const email = document.getElementById("email");
const subscribeBtn = document.querySelector(".subscribe-btn");
const cardContainer = document.querySelector(".card-container");
const cardNextStage = document.querySelector(".card-next-stage");
const errorSpan = document.querySelector(".error-span");

const checkMail = () => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(email.value)) {
    showInfo();
  } else {
    showError();
  }
};

showInfo = () => {
  cardContainer.classList.add("lg:hidden");
  cardContainer.classList.add("hidden");
  cardNextStage.classList.remove("hidden");
};

showError = () => {
  email.classList.add("border-tomato", "bg-red-200", "text-tomato");
  errorSpan.classList.remove("hidden");
};

subscribeBtn.addEventListener("click", checkMail);
