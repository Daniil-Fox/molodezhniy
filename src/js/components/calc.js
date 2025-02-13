const loanAmountRange = document.getElementById("loanAmount");
const loanAmountInput = document.getElementById("loanAmountInput");

const annualInterestRange = document.getElementById("annualInterest");
const annualInterestInput = document.getElementById("annualInterestInput");
const annualInterestDisplay = document.querySelector(
  ".cta-form__inwrapper[data-after]"
);

const loanTermRange = document.getElementById("loanTerm");
const loanTermInput = document.getElementById("loanTermInput");

const validateInput = (input) => {
  const min = parseFloat(input.min);
  const max = parseFloat(input.max);
  const value = parseFloat(input.value);

  if (value < min) {
    input.value = min;
  } else if (value > max) {
    input.value = max;
  }
};
const validateRange = (input, range) => {
  const inputValue = input.value;
  if (inputValue < input.min) {
    console.log("less");
    input.value = input.min;
    range.value = range.min;
    annualInterestDisplay.dataset.after = range.min + "%";
  } else if (inputValue > input.max) {
    console.log("more");
    input.value = input.max;
    range.value = range.max;
    annualInterestDisplay.dataset.after = range.max + "%";
  }
};

loanAmountRange.oninput = function () {
  loanAmountInput.value = this.value;
  annualInterestInput.min =
    (annualInterestRange.min * loanAmountInput.value) / 100;
  annualInterestInput.max =
    (annualInterestRange.max * loanAmountInput.value) / 100;
  annualInterestInput.value =
    (annualInterestRange.value * loanAmountInput.value) / 100;
};
loanAmountInput.oninput = function () {
  loanAmountRange.value = this.value;
  annualInterestInput.min =
    (annualInterestRange.min * loanAmountInput.value) / 100;
  annualInterestInput.max =
    (annualInterestRange.max * loanAmountInput.value) / 100;
  annualInterestInput.value =
    (annualInterestRange.value * loanAmountInput.value) / 100;
};
annualInterestInput.min = (annualInterestRange.min * loanAmountInput.min) / 100;
annualInterestInput.max =
  (annualInterestRange.max * loanAmountInput.value) / 100;
annualInterestInput.value =
  (annualInterestRange.value * loanAmountInput.value) / 100;
loanAmountRange.onchange = function () {
  validateInput(loanAmountRange);
};
loanAmountInput.onchange = function () {
  validateInput(loanAmountInput);
};

annualInterestRange.oninput = function () {
  annualInterestInput.value = (this.value * loanAmountInput.value) / 100;
  annualInterestDisplay.dataset.after = this.value + "%";
};
annualInterestInput.oninput = function () {
  annualInterestRange.value = this.value;
};

annualInterestRange.onchange = function () {
  validateRange(annualInterestInput, annualInterestRange);
  annualInterestDisplay.dataset.after =
    Math.round((annualInterestInput.value / loanAmountInput.value) * 100) + "%";
};

annualInterestInput.onchange = function () {
  validateRange(annualInterestInput, annualInterestRange);
  annualInterestDisplay.dataset.after =
    Math.round((annualInterestInput.value / loanAmountInput.value) * 100) + "%";
};

loanTermRange.oninput = function () {
  loanTermInput.value = this.value;
};
loanTermInput.oninput = function () {
  loanTermRange.value = this.value;
};

loanTermRange.onchange = function () {
  validateInput(loanTermRange);
};
loanTermInput.onchange = function () {
  validateInput(loanTermInput);
};
