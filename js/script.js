const readMoreBtn = document.querySelector(".read");
const paragraph = document.querySelector(".para");

readMoreBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //
  if (paragraph.classList.contains("line-clamp-6")) {
    paragraph.classList.toggle("line-clamp-6");
    readMoreBtn.innerHTML = "See Less";
  } else {
    paragraph.classList.toggle("line-clamp-6");
    readMoreBtn.innerHTML = "Read More";
  }
});
