/** @format */

const toggleDescription = (card) => {
  card.classList.toggle("active");

  const button = card.querySelector(".button");
  const span = button.querySelector("span");

  if (card.classList.contains("active")) {
    span.textContent = "Hide Description";
  } else {
    span.textContent = "Show Description";
  }
};
