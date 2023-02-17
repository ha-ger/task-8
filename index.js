let resultBox = document.querySelector("input");
let resultValue = resultBox.value;
let allButtons = document.querySelectorAll(".buttons button");

//for show value in calc screen
function showNumber(num) {
  resultBox.value === "0" ? (resultBox.value = num) : (resultBox.value += num);
}


//cases for buttons
allButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    switch (e.target.textContent) {
      case "Ac":
        resultBox.value = "0";
        break;

      case "De":
        if (resultBox.value !== "") {
          resultBox.value = resultBox.value.slice(0, -1);
        }

        if (resultBox.value.length === 0) {
          resultBox.value = "0";
        }
        break;

      case "=":
        try {
          resultBox.value = eval(resultBox.value);
        } catch {
          resultBox.value = "Error!";
          if ((resultBox.value = "Error!")) {
            setTimeout(() => (resultBox.value = "0"), 1000);
          }
        }
        break;

      default:
        showNumber(e.target.textContent);
        break;
    }
  });
});
