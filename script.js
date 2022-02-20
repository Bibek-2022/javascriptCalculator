const buttons = document.querySelectorAll("button");
const displayElm = document.getElementById("result");
let textToDisplay = "";
const symbols = ["-", "+", "*", "/", "."];
console.log(buttons);

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    displayElm.style.background = "none";

    const val = btn.innerText;
    const lastChar = textToDisplay[textToDisplay.length - 1];

    // if (val === "." && textToDisplay.includes(".")) return;
    if (textToDisplay.length < 1 && symbols.includes(val)) return;

    if (symbols.includes(lastChar) && symbols.includes(val)) {
      textToDisplay = textToDisplay.slice(0, -1);
    }

    // if (val === "=") {
    //   return onTotal();
    // }
    // if (val === "AC") {
    //   return resetDisplay();
    // }
    // if (val === "=") {
    //   if (symbols.includes(lastChar)) {
    //     textToDisplay = textToDisplay.slice(0, -1);
    //   }
    // }
    // if (val === "C") {
    //   textToDisplay = textToDisplay.slice(0, -1);

    //   return display(textToDisplay);
    // }

    // Switch

    switch (val) {
      case "=":
        return onTotal();
        break;
      case "AC":
        return resetDisplay();
        break;
      case "=":
        break;
      case "=":
        if (symbols.includes(lastChar)) {
          textToDisplay = textToDisplay.slice(0, -1);
        }
        break;
      case "C":
        textToDisplay = textToDisplay.slice(0, -1);
        return display(textToDisplay);
        break;
    }

    textToDisplay += val;
    display(textToDisplay);
  });
});

const display = (toDisplay) => {
  displayElm.innerText = toDisplay || "0.00";
};

const onTotal = () => {
  const prankNum = randomNumber();
  if (prankNum > 0) {
    displayElm.style.background = "rgb(226, 131, 131)";

    displayElm.classList.add("prank");

    displayElm.addEventListener("animationend", () => {
      displayElm.classList.remove("prank");
    });
  }
  const total = eval(textToDisplay) + prankNum;
  //   const total = (textToDisplay);
  display(total);
  textToDisplay = "";
};
const resetDisplay = () => {
  //   displayElm.innerText = "0.00";
  display("0.00");
  textToDisplay = "";
};

const randomNumber = () => {
  const num = Math.round(Math.random() * 10);
  return num < 3 ? num : 0;
};
