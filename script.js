const btns = document.querySelectorAll(".rateBtn");
const submit = document.querySelector(".btn-submit");
const cardTy = document.querySelector(".card-ty");
const ratingCard = document.querySelector(".rating-card");
const outputSpan = document.querySelector(".output-span");

let rating = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((button) => button.classList.remove("active"));
    // no need to parse it into float
    rating = btn.textContent;
    btn.classList.add("active");
  });
});

submit.addEventListener("click", () => {
  outputSpan.textContent = `You selected ${rating} out of 5!`;
  ratingCard.classList.add("display-none");
  cardTy.classList.remove("display-none");
});
