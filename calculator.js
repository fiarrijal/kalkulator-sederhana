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
  if (calculator.displayNumber === "0") {
    calculator.displayNumber = digit;
  } else {
    calculator.displayNumber += digit;
  }
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
    inputDigit(target.innerText);
    updateDisplayNumber();
  });
}
