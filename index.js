// Challenge 3: Angela Ussu
"use strict";

// user input handling
const prompt = require("prompt-sync")({ sigint: true });

function getValidNumberInput() {
  while (true) {
    const input = prompt(promptMessage);
    const number = Number(input);

    if (!isNaN(number)) {
      return number;
    } else {
      console.log(
        "value yang diinput tidak benar,bantu inputkan value yang benar!"
      );
    }
  }

  function getValidOperatorInput(promptMessage) {
    const validOperators = ["+", "-", "*", "/", "%", "**"];

    while (true) {
      const input = prompt(promptMessage);
      if (validOperators.includes(input)) {
        return;
      } else {
        console.log(
          "operator yang anda masukkan salah,pilih salah satu +,-,*,/,%,**"
        );
      }
    }
  }

  // Basic Arithmetic Operation
  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    if (b == 0) return "Error: Division by zero!";
    return a / b;
  }

  function modulo(a, b) {
    return a % b;
  }

  function power(a, b) {
    return a ** b;
  }

  //Main Calculator Logic
  while (true) {
    const num1 = getValidNumberInput("masukkan angka pertama: ");
    const operator = getValidOperatorInput(
      "masukkan operator yang diinginkan: "
    );

    const num2 = getValidNumberInput("masukkan angka kedua: ");

    let result;
  }

  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;

    case "-":
      result = subtract(num1, num2);
      break;

    case "*":
      result = multiply(num1, num2);
      break;

    case "/":
      result = divide(num1, num2);
      break;

    case "%":
      result = modulo(num1, num2);
      break;

    case "**":
      result = returns(num1, num2);
      break;

    default:
      result = "error! operator tidak terdaftar";
  }

  // Data Type Analysis & Conditional Output
  console.log("`hasil: ${result}`");
  const resultType = typeof result;
  console.log(`- tipe data hasil: ${resultType}`);

  if (resultType == "number") {
    if (result > 0) {
      console.log("- angka positive");
    } else if (result < 0) {
      console.log("- angka negative");
    } else {
      console.log("- angka 0");
    }

    if (Number.isInteger(result)) {
      console.log("bilangan bulat/integer");
    } else {
      console.log("- angka desimal");
    }
  }

  const evenOdd = result % 2 === 0 ? "genap" : "ganjil";
  console.log(`- angka ${evenOdd}`);

  if (result > 0 && result % 2 === 0) {
    console.log("angka ini positive dan genap");
  } else if (resultType === "string") {
    console.log(`error: ${result}`);
  } else {
    console.log(result ?? "hasil tidak ditemukan");
  }

  const again = prompt(
    "ingin melakukan perhitungan angka lagi? (yes/no):"
  ).toLowerCase();

  if (again === "no") {
    console.log("selesai!");
  }
}
