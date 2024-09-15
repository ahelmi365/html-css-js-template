document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("control-btn");
  const conatiner = document.querySelector(".container");

  console.log(conatiner);
  btn.addEventListener("click", function () {
    console.log("clined");
    conatiner.classList.toggle("expanded");
    conatiner.classList.toggle("collapsed");
    if (conatiner.classList.contains("collapsed")) {
      btn.textContent = ">>";
    } else {
      btn.textContent = "<<";
    }
  });
});
