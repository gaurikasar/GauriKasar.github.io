/** @format */

var project_description1 = document.querySelector("#project-id1");
var displayDesc1 = function (e) {
  let desc_display = project_description1.style.display;
  if (desc_display == "block") {
    project_description1.style.display = "none";
  } else {
    project_description1.style.display = "block";
  }
};

var project_description2 = document.querySelector("#project-id2");
var displayDesc2 = function (e) {
  let desc_display = project_description2.style.display;
  if (desc_display == "block") {
    project_description2.style.display = "none";
  } else {
    project_description2.style.display = "block";
  }
};

var project_description3 = document.querySelector("#project-id3");
var displayDesc3 = function (e) {
  let desc_display = project_description3.style.display;
  if (desc_display == "block") {
    project_description3.style.display = "none";
  } else {
    project_description3.style.display = "block";
  }
};
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
