//acccessing elements
const header = document.getElementById("header");

document.addEventListener("scroll", function () {
  if (scrollY > 90) {
    header.style.backgroundColor = "aquamarine";
    console.log("working");
  } else {
    header.style.backgroundColor = "transparent";
    console.log("not working");
  }
});
