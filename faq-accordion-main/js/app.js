const qWrapper = document.querySelectorAll(".q-wrapper");
const main = document.querySelector("main");

qWrapper.forEach((question) => {
  let flag = true;
  question.addEventListener("click", () => {
    const answer = document.querySelector(
      `.${question.parentNode.getAttribute("class")} .answer`
    );
    const icon = document.querySelector(
      `.${question.parentNode.getAttribute("class")} img`
    );

    if (flag) {
      main.style.height = main.offsetHeight + 90 + "px";
      icon.src = "./assets/images/icon-minus.svg";
      flag = false;
      setTimeout(() => {
        answer.style.display = "block";
      }, 200);
    } else {
      main.style.height = main.offsetHeight - 90 + "px";
      answer.style.display = "none";
      icon.src = "./assets/images/icon-plus.svg";
      flag = true;
    }
  });
});
