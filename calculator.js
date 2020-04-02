// Algoritma kalkulator :
// 1. Deklararasiin tipe data untuk setiap variabel yang dibutuhkan (angka layar, tombol operator, angka pertama, dan waktu tunggu angka ke2)
// 2. Buat fungsi update angka layar Ambil innerHTML dari angka layar
// 3. buat fungsi clear kalkulator
// 4. Buat fungsi input angka
// 5. Buat event input angka yang nanti muncul di layar

const calculator = {
  displayNumber: "0",
  operator: null,
  firstNumber: null,
  waitingSecondNumber: false
};

function updateDisplayNumber() {
  document.querySelector("#displayNumber").innerHTML = calculator.displayNumber;
}

function clearCalculator() {
  calculator.displayNumber = "0";
  calculator.operator = 0;
  calculator.firstNumber = null;
  calculator.waitingSecondNumber = false;
}

function inputDigit(digit) {
  if (
    calculator.waitingSecondNumber &&
    calculator.firstNumber === calculator.displayNumber
  ) {
    calculator.displayNumber = digit;
  } else {
    if (calculator.displayNumber === "0") {
      calculator.displayNumber = digit;
    } else {
      calculator.displayNumber += digit;
    }
  }
}

function inverseNumber() {
  if (calculator.displayNumber === "0") {
    return;
  }
  calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator) {
  if (!calculator.waitingSecondNumber) {
    calculator.operator = operator;
    calculator.waitingSecondNumber = true;
    calculator.firstNumber = calculator.displayNumber;
  } else {
    alert("Operator sudah ditetapkan");
  }
}

function performCalculation() {
  if (calculator.firstNumber == null || calculator.operator == null) {
    alert("Anda belum menetapkan operator");
    return;
  }

  let result = 0;
  if (calculator.operator === "+") {
    result =
      parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
  } else if (calculator.operator === "-") {
    result =
      parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
  } else if (calculator.operator === "*") {
    result =
      parseInt(calculator.firstNumber) * parseInt(calculator.displayNumber);
  } else if (calculator.operator === "/") {
    result =
      parseInt(calculator.firstNumber) / parseInt(calculator.displayNumber);
  }

  calculator.displayNumber = result;
}
const buttons = document.querySelectorAll(".btn");
for (let btn of buttons) {
  btn.addEventListener("click", function(e) {
    // ambil objek yang diklik
    const target = e.target;
    if (target.classList.contains("clear")) {
      clearCalculator();
      updateDisplayNumber();
      return;
    }

    if (target.classList.contains("negative")) {
      inverseNumber();
      updateDisplayNumber();
      return;
    }

    if (target.classList.contains("equal")) {
      performCalculation();
      updateDisplayNumber();
      return;
    }

    if (target.classList.contains("operator")) {
      handleOperator(target.innerText);
      updateDisplayNumber();
      return;
    }

    inputDigit(target.innerText);
    updateDisplayNumber();
  });
}
