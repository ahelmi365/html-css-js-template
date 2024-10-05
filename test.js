document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("control-btn");
  const conatiner = document.querySelector(".container");

  btn.addEventListener("click", function () {
    conatiner.classList.toggle("expanded");
    conatiner.classList.toggle("collapsed");
    if (conatiner.classList.contains("collapsed")) {
      btn.textContent = ">>";
    } else {
      btn.textContent = "<<";
    }
  });

  const apiEndpoints = {
    studentIds: "https//www.host.com/ids",
  };
  const data = {
    studentIds: [1, 2, 3, 4, 5],
  };

  // function makeRequest(evt) {

  //   const btn = evt.target;
  //   const recordKind = btn.dataset.kind;

  //   console.log(apiEndpoints[recordKind]);
  //   console.log(data[recordKind]);
  // }
  // btn.addEventListener("click", makeRequest);
  function defineHandler(requetsURL, requestData) {
    return function (evt) {
      console.log(evt.target);
      console.log(requetsURL);
      console.log(requestData);
    };
  }
  const setupHandler = () => {
    const recordKind = btn.dataset.kind;
    const requetsURL = apiEndpoints[recordKind];
    const requestData = data[recordKind];

    const handler = defineHandler(requetsURL, requestData);

    btn.addEventListener("click", handler);
  };
  setupHandler();

  function adder(num1) {
    return function addTo(num2) {
      return num1 + num2;
    };
  }

  const addTo10 = adder(10);
  console.log(addTo10(5));
  console.log(addTo10(7));
  console.log(addTo10(9));

  const addTo15 = adder(15);
  console.log(addTo15(12));
  console.log(addTo15(14));
  console.log(addTo15(16));
});
