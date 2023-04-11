const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName('choice'));
const imageContainer = document.getElementById('img');
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

let img;
let currQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let genre = "";
let difficulty = "";

// questions
let easyMath = [
  {
    question: "What is 2 + 2?",
    image: null,
    choice1: "2",
    choice2: "4",
    choice3: "6",
    choice4: "8",
    answer: 2
  },
  {
    question: "What is 3 * 5?",
    image: null,
    choice1: "15",
    choice2: "10",
    choice3: "5",
    choice4: "20",
    answer: 1
  },
  {
    question: "What is 10 - 7?",
    image: null,
    choice1: "3",
    choice2: "2",
    choice3: "1",
    choice4: "4",
    answer: 1
  },
  {
    question: "What is 6 / 2?",
    image: null,
    choice1: "2",
    choice2: "3",
    choice3: "4",
    choice4: "6",
    answer: 2
  },
  {
    question: "What is 8 + 5?",
    image: null,
    choice1: "10",
    choice2: "12",
    choice3: "15",
    choice4: "13",
    answer: 4
  },
  {
    question: "What is 4 * 4?",
    image: null,
    choice1: "8",
    choice2: "12",
    choice3: "16",
    choice4: "20",
    answer: 3
  },
  {
    question: "What is 9 - 3?",
    image: null,
    choice1: "3",
    choice2: "4",
    choice3: "6",
    choice4: "9",
    answer: 3
  },
  {
    question: "What is 7 / 2?",
    image: null,
    choice1: "2.5",
    choice2: "3",
    choice3: "3.5",
    choice4: "4",
    answer: 3
  },
  {
    question: "What is 12 + 6?",
    image: null,
    choice1: "16",
    choice2: "18",
    choice3: "20",
    choice4: "22",
    answer: 2
  },
  {
    question: "What is 5 * 8?",
    image: null,
    choice1: "30",
    choice2: "35",
    choice3: "40",
    choice4: "45",
    answer: 3
  },
  {
    question: "What is 20 - 9?",
    image: null,
    choice1: "9",
    choice2: "10",
    choice3: "11",
    choice4: "12",
    answer: 3
  },
  {
    question: "What is 12 / 3?",
    image: null,
    choice1: "2",
    choice2: "3",
    choice3: "4",
    choice4: "6",
    answer: 3
  },
  {
    question: "What is 15 + 8?",
    image: null,
    choice1: "21",
    choice2: "22",
    choice3: "24",
    choice4: "23",
    answer: 4
  },
  {
    question: "What is 4 + 5?",
    image: null,
    choice1: "7",
    choice2: "8",
    choice3: "10",
    choice4: "9",
    answer: 4
  },
  {
    question: "What is 6 - 3?",
    image: null,
    choice1: "3",
    choice2: "2",
    choice3: "1",
    choice4: "0",
    answer: 1
  },
  {
    question: "What is 2 * 3?",
    image: null,
    choice1: "4",
    choice2: "6",
    choice3: "8",
    choice4: "9",
    answer: 2
  },
  {
    question: "What is 10 / 2?",
    image: null,
    choice1: "2",
    choice2: "4",
    choice3: "5",
    choice4: "6",
    answer: 3
  },
  {
    question: "What is the square root of 16?",
    image: null,
    choice1: "2",
    choice2: "4",
    choice3: "6",
    choice4: "8",
    answer: 2
  },
  {
    question: "What is 3 squared?",
    image: null,
    choice1: "9",
    choice2: "6",
    choice3: "3",
    choice4: "12",
    answer: 1
  },
  {
    question: "What is 7 cubed?",
    image: null,
    choice1: "49",
    choice2: "21",
    choice3: "2401",
    choice4: "343",
    answer: 4
  },
  {
    question: "What is 2 to the power of 4?",
    image: null,
    choice1: "4",
    choice2: "8",
    choice3: "16",
    choice4: "32",
    answer: 3
  },
  {
    question: "What is 10 mod 3?",
    image: null,
    choice1: "0",
    choice2: "1",
    choice3: "2",
    choice4: "3",
    answer: 2
  },
  {
    question: "What is the absolute value of -5?",
    image: null,
    choice1: "5",
    choice2: "-5",
    choice3: "0",
    choice4: "1",
    answer: 1
  },
  {
    question: "What is the result of 2 + 2 * 3?",
    image: null,
    choice1: "6",
    choice2: "8",
    choice3: "10",
    choice4: "12",
    answer: 2
  },
  {
    question: "What is the result of (4 + 3) * 2?",
    image: null,
    choice1: "10",
    choice2: "14",
    choice3: "16",
    choice4: "20",
    answer: 2
  },
  {
    question: "What is the value of x in the equation 3x + 5 = 14?",
    image: null,
    choice1: "3",
    choice2: "4",
    choice3: "5",
    choice4: "6",
    answer: 1
  }
]

let mediumMath = [
  {
    question: "What is the value of x in the equation 2x + 5 = 11?",
    image: null,
    choice1: "2",
    choice2: "3",
    choice3: "4",
    choice4: "5",
    answer: 2
  },
  {
    question: "What is the result of 5 - 3 * 2?",
    image: null,
    choice1: "-1",
    choice2: "2",
    choice3: "1",
    choice4: "4",
    answer: 1
  },
  {
    question: "What is the value of x in the equation 4x - 3 = 9?",
    image: null,
    choice1: "2",
    choice2: "3",
    choice3: "4",
    choice4: "5",
    answer: 2
  },
  {
    question: "What is the result of (4 + 3) * (6 - 2)?",
    image: null,
    choice1: "14",
    choice2: "16",
    choice3: "24",
    choice4: "28",
    answer: 4
  },
  {
    question: "What is the value of y in the equation 2x + 2y = 12 and x = 2?",
    image: null,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    answer: 4
  },
  {
    question: "What is the value of x in the equation 5x + 2 = 17?",
    image: null,
    choice1: "3",
    choice2: "5",
    choice3: "7",
    choice4: "9",
    answer: 1
  },
  {
    question: "What is the result of 3 * ((2 + 5) / 3)?",
    image: null,
    choice1: "2",
    choice2: "3",
    choice3: "4",
    choice4: "7",
    answer: 4
  },
  {
    question: "What is the value of y in the equation 4x + y = 19 and x = 3?",
    image: null,
    choice1: "3",
    choice2: "4",
    choice3: "5",
    choice4: "7",
    answer: 4
  },
  {
    question: "What is the result of 2 + 3 * (5 - 1)?",
    image: null,
    choice1: "12",
    choice2: "14",
    choice3: "16",
    choice4: "18",
    answer: 2
  },
  {
    question: "What is the value of x in the equation 2(x + 4) = 18?",
    image: null,
    choice1: "4",
    choice2: "5",
    choice3: "6",
    choice4: "7",
    answer: 2
  },
  {
    question: "What is the result of 4 - 2 + 3 * 5?",
    image: null,
    choice1: "17",
    choice2: "18",
    choice3: "19",
    choice4: "20",
    answer: 1
  },
  {
    question: "What is the value of x in the equation 3x - 2 = 13?",
    image: null,
    choice1: "3",
    choice2: "5",
    choice3: "7",
    choice4: "9",
    answer: 2
  },
  {
    question: "What is the result of 2 * (3 + 4) - 5?",
    image: null,
    choice1: "5",
    choice2: "6",
    choice3: "7",
    choice4: "9",
    answer: 4
  },
  {
    question: "What is the value of y in the equation 2x + y = 7 and x = 1?",
    image: null,
    choice1: "3",
    choice2: "4",
    choice3: "5",
    choice4: "6",
    answer: 3
  },
  {
    question: "What is the result of (6 - 2) * (4 + 3)?",
    image: null,
    choice1: "14",
    choice2: "20",
    choice3: "24",
    choice4: "28",
    answer: 4
  },
  {
    question: "What is the value of x in the equation 5x + 2 = 27?",
    image: null,
    choice1: "3",
    choice2: "5",
    choice3: "7",
    choice4: "9",
    answer: 2
  },
  {
    question: "What is the result of 2 + 3 * (6 - 2)?",
    image: null,
    choice1: "14",
    choice2: "16",
    choice3: "18",
    choice4: "20",
    answer: 1
  },
  {
    question: "What is the value of y in the equation 3x + y = 15 and x = 4?",
    image: null,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    answer: 3
  },
  {
    question: "What is the result of 4 + 3 * (8 - 5)?",
    image: null,
    choice1: "13",
    choice2: "16",
    choice3: "19",
    choice4: "22",
    answer: 1
  },
  {
    question: "What is the value of x in the equation 4(x + 3) = 40?",
    image: null,
    choice1: "7",
    choice2: "8",
    choice3: "9",
    choice4: "10",
    answer: 1
  },
  {
    question: "What is the result of 5 - 2 * (6 - 3)?",
    image: null,
    choice1: "-1",
    choice2: "0",
    choice3: "1",
    choice4: "2",
    answer: 1
  }
]


let hardMath = [
  {
    question: "What is the value of x in the equation x^2 - 7x + 10 = 0?",
    image: null,
    choice1: "2 and 5",
    choice2: "3 and 4",
    choice3: "1 and 6",
    choice4: "4 and 7",
    answer: 2
  },
  {
    question: "What is the result of 2^(3x-4) = 4^(x+1)?",
    image: null,
    choice1: "4",
    choice2: "3",
    choice3: "2",
    choice4: "1",
    answer: 2
  },
  {
    question: "What is the value of x in the equation 3^(x+1) - 9*3^x = 2?",
    image: null,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    answer: 2
  },
  {
    question: "What is the result of (x + 2)(x^2 - 5x + 6) = 0?",
    image: null,
    choice1: "-2, 3, and 2",
    choice2: "-2, 3, and -1",
    choice3: "2, -3, and -2",
    choice4: "2, 3, and -1",
    answer: 2
  },
  {
    question: "What is the value of x in the equation log3(x - 1) - log3(x + 1) = 1?",
    image: null,
    choice1: "0",
    choice2: "1",
    choice3: "2",
    choice4: "3",
    answer: 2
  },
  {
    question: "What is the result of (x^2 - 3x + 2)/(x - 2) = 0?",
    image: null,
    choice1: "2",
    choice2: "1",
    choice3: "0",
    choice4: "-1",
    answer: 1
  },
  {
    question: "What is the value of x in the equation (x + 2)^2 - 3(x + 2) = 0?",
    image: null,
    choice1: "-1",
    choice2: "1",
    choice3: "-2",
    choice4: "2",
    answer: 1
  },
  {
    question: "What is the result of (x + 4)(x + 2) - (x - 1)(x + 3)?",
    image: null,
    choice1: "2x + 14",
    choice2: "2x + 8",
    choice3: "2x + 2",
    choice4: "2x - 2",
    answer: 2
  },
  {
    question: "What is the value of x in the equation 3^(x - 2) + 3^(x - 3) = 28?",
    image: null,
    choice1: "4",
    choice2: "5",
    choice3: "6",
    choice4: "7",
    answer: 4
  },
  {
    question: "What is the value of x in the equation 3x - 2 = 2^(x+1)?",
    image: null,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    answer: 2
  },
  {
    question: "What is the result of (2x - 3)^2 = 25?",
    image: null,
    choice1: "x = -1, 4",
    choice2: "x = -2, 5",
    choice3: "x = -1, 5",
    choice4: "x = -2, 4",
    answer: 2
  },
  {
    question: "What is the value of x in the equation log5(4x - 1) - log5(x - 1) = 1?",
    image: null,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    answer: 3
  },
  {
    question: "What is the result of (x^2 - 5x + 4)/(x^2 - 4) = 0?",
    image: null,
    choice1: "x = -2, 1, 2",
    choice2: "x = -2, 1, -2",
    choice3: "x = -1, 1, 2",
    choice4: "x = -1, 1, -2",
    answer: 3
  },
  {
    question: "What is the value of x in the equation (x^2 - 3x + 2)/(x^2 + x - 6) = 0?",
    image: null,
    choice1: "x = -2, 1",
    choice2: "x = -1, 2",
    choice3: "x = -2, -1",
    choice4: "x = 1, 2",
    answer: 2
  },
  {
    question: "What is the result of (x^2 - 6x + 9)^(1/3) - (x - 3)^(1/3)?",
    image: null,
    choice1: "3",
    choice2: "2",
    choice3: "1",
    choice4: "0",
    answer: 4
  },
  {
    question: "What is the value of x in the equation 4^(x - 1) + 4^(2x - 1) = 20?",
    image: null,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    answer: 3
  },
  {
    question: "What is the result of (x - 1)/(x^2 - 4x + 4) + 1/(x - 2)?",
    image: null,
    choice1: "1/(x - 2)",
    choice2: "(2 - x)/(x - 2)",
    choice3: "x/(x - 2)",
    choice4: "2/(x - 2)",
    answer: 1
  }
]


let easyPhysics = [
  {
    question: "What is the SI unit of distance?",
    image: null,
    choice1: "Meter",
    choice2: "Second",
    choice3: "Kilogram",
    choice4: "Celsius",
    answer: 1
  },
  {
    question: "What is the formula for force?",
    image: null,
    choice1: "F = mc²",
    choice2: "F = ma",
    choice3: "F = mv²",
    choice4: "F = mgh",
    answer: 2
  },
  {
    question: "What is the formula for velocity?",
    image: null,
    choice1: "v = d/t",
    choice2: "v = a/t",
    choice3: "v = m/t",
    choice4: "v = f/t",
    answer: 1
  },
  {
    question: "What is the SI unit of mass?",
    image: null,
    choice1: "Celsius",
    choice2: "Meter",
    choice3: "Second",
    choice4: "Kilogram",
    answer: 4
  },
  {
    question: "What is the formula for work?",
    image: null,
    choice1: "W = ma",
    choice2: "W = Fv",
    choice3: "W = Fd",
    choice4: "W = mgh",
    answer: 3
  },
  {
    question: "What is the formula for power?",
    image: null,
    choice1: "P = Fd",
    choice2: "P = W/t",
    choice3: "P = Fv",
    choice4: "P = ma",
    answer: 2
  },
  {
    question: "What is the formula for kinetic energy?",
    image: null,
    choice1: "K = (1/2)mv²",
    choice2: "K = mgh",
    choice3: "K = Fd",
    choice4: "K = Pt",
    answer: 1
  },
  {
    question: "What is the formula for potential energy?",
    image: null,
    choice1: "U = mgh",
    choice2: "U = (1/2)mv²",
    choice3: "U = Fd",
    choice4: "U = Pt",
    answer: 1
  },
  {
    question: "What is the formula for pressure?",
    image: null,
    choice1: "P = mgh",
    choice2: "P = ma",
    choice3: "P = F/A",
    choice4: "P = Pt",
    answer: 3
  },
  {
    question: "What is the SI unit of time?",
    image: null,
    choice1: "Meter",
    choice2: "Second",
    choice3: "Kilogram",
    choice4: "Celsius",
    answer: 2
  },
  {
    question: "What is the formula for density?",
    image: null,
    choice1: "ρ = mgh",
    choice2: "ρ = F/A",
    choice3: "ρ = ma",
    choice4: "ρ = m/V",
    answer: 4
  },
  {
    question: "What is the speed of light in a vacuum?",
    image: null,
    choice1: "299,792 km/s",
    choice2: "186,282 mi/s",
    choice3: "299,792,458 m/s",
    choice4: "299,792,458 km/h",
    answer: 3
  },
  {
    question: "What is the formula for acceleration?",
    image: null,
    choice1: "a = F/m",
    choice2: "a = v/t",
    choice3: "a = s/t",
    choice4: "a = d/v",
    answer: 2
  },
  {
    question: "What is the force of gravity between two objects proportional to?",
    image: null,
    choice1: "The product of their masses and the distance between them",
    choice2: "The product of their masses",
    choice3: "The distance between them",
    choice4: "The square of their masses",
    answer: 1
  },
  {
    question: "What is the SI unit of energy?",
    image: null,
    choice1: "Joule",
    choice2: "Watt",
    choice3: "Volt",
    choice4: "Ampere",
    answer: 1
  },
  {
    question: "What is the principle of conservation of energy?",
    image: null,
    choice1: "Energy is always conserved in a closed system",
    choice2: "Energy always flows from hot to cold",
    choice3: "Energy cannot be created or destroyed, only converted from one form to another",
    choice4: "Energy is proportional to mass and the square of the speed of light",
    answer: 3
  }
]


let mediumPhysics = [
  {
    question: "What is the formula for electric current?",
    image: null,
    choice1: "I = V/R",
    choice2: "I = P/V",
    choice3: "I = Q/t",
    choice4: "I = E/t",
    answer: 3
  },
  {
    question: "What is the SI unit of electric charge?",
    image: null,
    choice1: "Volt",
    choice2: "Ampere",
    choice3: "Ohm",
    choice4: "Coulomb",
    answer: 4
  },
  {
    question: "What is the formula for electric power?",
    image: null,
    choice1: "P = IV",
    choice2: "P = I²R",
    choice3: "P = V²/R",
    choice4: "P = W/t",
    answer: 1
  },
  {
    question: "What is the SI unit of electric potential difference?",
    image: null,
    choice1: "Volt",
    choice2: "Ampere",
    choice3: "Ohm",
    choice4: "Coulomb",
    answer: 1
  },
  {
    question: "What is the formula for capacitance?",
    image: null,
    choice1: "C = Q/V",
    choice2: "C = IR",
    choice3: "C = V/I",
    choice4: "C = P/t",
    answer: 1
  },
  {
    question: "What is the SI unit of magnetic field strength?",
    image: null,
    choice1: "Tesla",
    choice2: "Ohm",
    choice3: "Ampere",
    choice4: "Henry",
    answer: 1
  },
  {
    question: "What is the formula for magnetic force?",
    image: null,
    choice1: "F = BIL",
    choice2: "F = ma",
    choice3: "F = P/t",
    choice4: "F = mgh",
    answer: 1
  },
  {
    question: "What is the SI unit of electric resistance?",
    image: null,
    choice1: "Volt",
    choice2: "Ampere",
    choice3: "Ohm",
    choice4: "Coulomb",
    answer: 3
  },
  {
    question: "What is the formula for electric resistance?",
    image: null,
    choice1: "R = V/I",
    choice2: "R = P/t",
    choice3: "R = Q/t",
    choice4: "R = C/V",
    answer: 1
  },
  {
    question: "What is the principle of superposition?",
    image: null,
    choice1: "The net force on an object is equal to its mass times acceleration",
    choice2: "The total energy of a system is always conserved",
    choice3: "When two waves meet, the displacement of the resulting wave is the sum of the individual wave displacements",
    choice4: "The frequency of a wave is equal to the product of its wavelength and velocity",
    answer: 3
  },
  {
    question: "What is the SI unit of angular velocity?",
    image: null,
    choice1: "Meter per second",
    choice2: "Meter per second squared",
    choice3: "Radians per second",
    choice4: "Radians per second squared",
    answer: 3
  },
  {
    question: "What is the formula for torque?",
    image: null,
    choice1: "T = Fd",
    choice2: "T = F/m",
    choice3: "T = Iα",
    choice4: "T = W/t",
    answer: 3
  },
  {
    question: "What is the formula for power?",
    image: null,
    choice1: "P = Fd",
    choice2: "P = Fv",
    choice3: "P = W/t",
    choice4: "P = I²R",
    answer: 3
  },
  {
    question: "What is the formula for kinetic energy?",
    image: null,
    choice1: "KE = mv²",
    choice2: "KE = ½mv²",
    choice3: "KE = mgh",
    choice4: "KE = W/t",
    answer: 2
  },
  {
    question: "What is the formula for potential energy?",
    image: null,
    choice1: "PE = mv²",
    choice2: "PE = ½mv²",
    choice3: "PE = mgh",
    choice4: "PE = W/t",
    answer: 3
  },
  {
    question: "What is the SI unit of power?",
    image: null,
    choice1: "Watt",
    choice2: "Joule",
    choice3: "Volt",
    choice4: "Ohm",
    answer: 1
  },
  {
    question: "What is the formula for work done?",
    image: null,
    choice1: "W = Fd",
    choice2: "W = F/m",
    choice3: "W = I²R",
    choice4: "W = P/t",
    answer: 1
  },
  {
    question: "What is the SI unit of work done?",
    image: null,
    choice1: "Joule",
    choice2: "Watt",
    choice3: "Newton",
    choice4: "Meter",
    answer: 1
  },
  {
    question: "What is the formula for pressure?",
    image: null,
    choice1: "P = F/A",
    choice2: "P = Fd",
    choice3: "P = W/t",
    choice4: "P = I²R",
    answer: 1
  },
  {
    question: "What is the SI unit of pressure?",
    image: null,
    choice1: "Pascal",
    choice2: "Joule",
    choice3: "Newton",
    choice4: "Watt",
    answer: 1
  }
]


let hardPhysics = [
  {
    question: "What is the formula for calculating the period of a simple pendulum?",
    image: null,
    choice1: "T = 2π(L/g)^½",
    choice2: "T = 2π(g/L)^½",
    choice3: "T = 2π(L/g)",
    choice4: "T = 2π(g/L)",
    answer: 1
  },
  {
    question: "What is the formula for calculating the velocity of a fluid flowing through a pipe?",
    image: null,
    choice1: "v = Q/A",
    choice2: "v = √(2gh)",
    choice3: "v = √(2gH)",
    choice4: "v = Q/Aρ",
    answer: 1
  },
  {
    question: "What is the formula for calculating the capacitance of a parallel plate capacitor?",
    image: null,
    choice1: "C = εA/d",
    choice2: "C = ε₀A/d",
    choice3: "C = ε₀Ad",
    choice4: "C = εA/ε₀d",
    answer: 4
  },
  {
    question: "What is the formula for calculating the force between two point charges?",
    image: null,
    choice1: "F = (kq₁q₂)/r²",
    choice2: "F = (kq₁q₂)/r",
    choice3: "F = (q₁q₂)/r²",
    choice4: "F = (q₁q₂)/r",
    answer: 1
  },
  {
    question: "What is the formula for calculating the de Broglie wavelength of a particle?",
    image: null,
    choice1: "λ = h/mv",
    choice2: "λ = h/p",
    choice3: "λ = mv/h",
    choice4: "λ = p/h",
    answer: 2
  },
  {
    question: "What is the formula for calculating the work done in a thermodynamic process?",
    image: null,
    choice1: "W = PV",
    choice2: "W = ∆U",
    choice3: "W = Q",
    choice4: "W = PV/nRT",
    answer: 2
  },
  {
    question: "What is the formula for calculating the efficiency of a heat engine?",
    image: null,
    choice1: "η = W/Qh",
    choice2: "η = Qh/W",
    choice3: "η = W/Qc",
    choice4: "η = Qc/W",
    answer: 1
  },
  {
    question: "What is the formula for calculating the wavelength of a photon?",
    image: null,
    choice1: "λ = h/mv",
    choice2: "λ = h/p",
    choice3: "λ = c/f",
    choice4: "λ = hc/E",
    answer: 4
  },
  {
    question: "What is the formula for calculating the magnetic field inside a solenoid?",
    image: null,
    choice1: "B = μ₀NI/L",
    choice2: "B = μ₀N/LI",
    choice3: "B = μ₀LI/N",
    choice4: "B = μ₀NLI",
    answer: 1
  },
  {
    question: "What is the formula for calculating the total energy of a particle moving in a circular path of radius r with speed v?",
    image: null,
    choice1: "E = (1/2)mv² + kqQ/r",
    choice2: "E = (1/2)mv² - kqQ/r",
    choice3: "E = (1/2)mv² + GMm/r",
    choice4: "E = (1/2)mv² - GMm/r",
    answer: 2
  },
  {
    question: "What is the formula for calculating the pressure exerted by an ideal gas in terms of its molecular velocity?",
    image: null,
    choice1: "P = (1/3)ρc²",
    choice2: "P = (2/3)ρc²",
    choice3: "P = (1/2)ρc²",
    choice4: "P = ρc²",
    answer: 2
  },
  {
    question: "What is the formula for calculating the magnetic field due to a current-carrying wire at a distance r from the wire?",
    image: null,
    choice1: "B = (μ₀/4π)(2I/r)",
    choice2: "B = (μ₀/4π)(I/r²)",
    choice3: "B = (μ₀/4π)(I/r)",
    choice4: "B = (μ₀/4π)(I/r³)",
    answer: 2
  },
  {
    question: "What is the formula for calculating the magnetic field due to a long straight wire at a distance r from the wire?",
    image: null,
    choice1: "B = (μ₀/4π)(2I/r)",
    choice2: "B = (μ₀/4π)(I/r²)",
    choice3: "B = (μ₀/4π)(I/r)",
    choice4: "B = (μ₀/4π)(I/r³)",
    answer: 3
  },
  {
    question: "What is the formula for calculating the velocity of an object undergoing simple harmonic motion?",
    image: null,
    choice1: "v = -ωx",
    choice2: "v = ωx",
    choice3: "v = √(k/m)A",
    choice4: "v = √(k/m)(A² - x²)",
    answer: 4
  },
  {
    question: "What is the formula for calculating the velocity of a wave in a string under tension T and mass per unit length μ?",
    image: null,
    choice1: "v = √(T/μ)",
    choice2: "v = √(μ/T)",
    choice3: "v = √(Tμ)",
    choice4: "v = √(T/2μ)",
    answer: 1
  },
  {
    question: "What is the formula for calculating the acceleration of a charged particle moving in a magnetic field with velocity v?",
    image: null,
    choice1: "a = (qvB)/m",
    choice2: "a = (qB)/mv",
    choice3: "a = (vB)/mq",
    choice4: "a = (mvB)/q",
    answer: 1
  }
]


let easyChemistry = [
  {
    question: "What is the chemical symbol for hydrogen?",
    image: null,
    choice1: "He",
    choice2: "Hg",
    choice3: "H",
    choice4: "Ag",
    answer: 3
  },
  {
    question: "What is the atomic number of carbon?",
    image: null,
    choice1: "12",
    choice2: "6",
    choice3: "8",
    choice4: "4",
    answer: 2
  },
  {
    question: "Which gas makes up the majority of Earth's atmosphere?",
    image: null,
    choice1: "Nitrogen",
    choice2: "Oxygen",
    choice3: "Carbon dioxide",
    choice4: "Helium",
    answer: 1
  },
  {
    question: "What is the formula for water?",
    image: null,
    choice1: "H2O2",
    choice2: "H2O",
    choice3: "HO",
    choice4: "O2H",
    answer: 2
  },
  {
    question: "Which element has the symbol Fe?",
    image: null,
    choice1: "Iron",
    choice2: "Gold",
    choice3: "Silver",
    choice4: "Fluorine",
    answer: 1
  },
  {
    question: "What is the pH value of a neutral solution?",
    image: null,
    choice1: "0",
    choice2: "7",
    choice3: "14",
    choice4: "5",
    answer: 2
  },
  {
    question: "Which gas is produced when acids react with metals?",
    image: null,
    choice1: "Hydrogen",
    choice2: "Oxygen",
    choice3: "Carbon dioxide",
    choice4: "Helium",
    answer: 1
  },
  {
    question: "What is the common name for sodium chloride?",
    image: null,
    choice1: "Baking soda",
    choice2: "Table salt",
    choice3: "Vinegar",
    choice4: "Ammonia",
    answer: 2
  },
  {
    question: "What is the process of converting a solid directly into a gas called?",
    image: null,
    choice1: "Sublimation",
    choice2: "Evaporation",
    choice3: "Condensation",
    choice4: "Melting",
    answer: 1
  },
  {
    question: "What is the chemical formula for methane?",
    image: null,
    choice1: "CH4",
    choice2: "H2O",
    choice3: "CO2",
    choice4: "NaCl",
    answer: 1
  },
  {
    question: "Which element is a non-metal?",
    image: null,
    choice1: "Calcium",
    choice2: "Chlorine",
    choice3: "Copper",
    choice4: "Magnesium",
    answer: 2
  },
  {
    question: "What is the chemical formula for glucose?",
    image: null,
    choice1: "C6H12O6",
    choice2: "H2O",
    choice3: "CO2",
    choice4: "NaCl",
    answer: 1
  },
  {
    question: "What is the process by which a liquid changes into a solid called?",
    image: null,
    choice1: "Sublimation",
    choice2: "Evaporation",
    choice3: "Condensation",
    choice4: "Freezing",
    answer: 4
  },
  {
    question: "What is the chemical formula for sulfuric acid?",
    image: null,
    choice1: "HCl",
    choice2: "H2SO4",
    choice3: "HNO3",
    choice4: "NaOH",
    answer: 2
  },
  {
    question: "What is the atomic symbol for gold?",
    image: null,
    choice1: "Au",
    choice2: "Ag",
    choice3: "Cu",
    choice4: "Al",
    answer: 1
  },
  {
    question: "Which type of reaction releases energy in the form of light or heat?",
    image: null,
    choice1: "Endothermic",
    choice2: "Exothermic",
    choice3: "Neutralization",
    choice4: "Redox",
    answer: 2
  },
  {
    question: "What is the chemical symbol for potassium?",
    image: null,
    choice1: "P",
    choice2: "K",
    choice3: "Kr",
    choice4: "Pt",
    answer: 2
  },
  {
    question: "What is the pH value of an acidic solution?",
    image: null,
    choice1: "0",
    choice2: "7",
    choice3: "14",
    choice4: "9",
    answer: 1
  },
  {
    question: "What is the chemical formula for table sugar?",
    image: null,
    choice1: "NaCl",
    choice2: "H2O",
    choice3: "C12H22O11",
    choice4: "CO2",
    answer: 3
  },
  {
    question: "What is the process of combining two or more substances to form a new substance called?",
    image: null,
    choice1: "Fusion",
    choice2: "Fission",
    choice3: "Combustion",
    choice4: "Chemical reaction",
    answer: 4
  },
  {
    question: "What is the chemical formula for ammonia?",
    image: null,
    choice1: "NH4",
    choice2: "NH3",
    choice3: "NO2",
    choice4: "H2O",
    answer: 2
  }
]


let mediumChemistry = [
  {
    question: "Which gas is the most abundant in Earth's atmosphere?",
    image: null,
    choice1: "Oxygen",
    choice2: "Carbon dioxide",
    choice3: "Nitrogen",
    choice4: "Methane",
    answer: 3
  },
  {
    question: "What is the term for a substance that speeds up a chemical reaction without being consumed in the process?",
    image: null,
    choice1: "Catalyst",
    choice2: "Reactant",
    choice3: "Product",
    choice4: "Inhibitor",
    answer: 1
  },
  {
    question: "What is the process by which a solid changes directly into a gas without passing through the liquid state called?",
    image: null,
    choice1: "Condensation",
    choice2: "Sublimation",
    choice3: "Evaporation",
    choice4: "Deposition",
    answer: 2
  },
  {
    question: "What is the process by which a liquid changes into a solid called?",
    image: null,
    choice1: "Melting",
    choice2: "Vaporization",
    choice3: "Freezing",
    choice4: "Boiling",
    answer: 3
  },
  {
    question: "Which element is the most abundant in the Earth's crust?",
    image: null,
    choice1: "Oxygen",
    choice2: "Silicon",
    choice3: "Aluminum",
    choice4: "Carbon",
    answer: 1
  },
  {
    question: "What is the term for a substance that can act as an acid or a base depending on the conditions?",
    image: null,
    choice1: "Salt",
    choice2: "Buffer",
    choice3: "Indicator",
    choice4: "Amphiprotic",
    answer: 4
  },
  {
    question: "What is the chemical formula for water?",
    image: null,
    choice1: "H2O2",
    choice2: "H2SO4",
    choice3: "H2O",
    choice4: "HCl",
    answer: 3
  },
  {
    question: "What is the term for a substance that can dissolve in a solvent to form a homogeneous mixture?",
    image: null,
    choice1: "Solute",
    choice2: "Solvent",
    choice3: "Solution",
    choice4: "Suspension",
    answer: 3
  },
  {
    question: "What is the process of converting a liquid into its vapor called?",
    image: null,
    choice1: "Melting",
    choice2: "Condensation",
    choice3: "Sublimation",
    choice4: "Evaporation",
    answer: 4
  },
  {
    question: "Which type of bond involves the sharing of electrons between atoms?",
    image: null,
    choice1: "Ionic",
    choice2: "Covalent",
    choice3: "Metallic",
    choice4: "Hydrogen",
    answer: 2
  },
  {
    question: "What is the term for the smallest unit of an element that retains the chemical properties of that element?",
    image: null,
    choice1: "Molecule",
    choice2: "Atom",
    choice3: "Ion",
    choice4: "Compound",
    answer: 2
  },
  {
    question: "What is the process of a substance changing from a solid directly to a gas without passing through the liquid phase called?",
    image: null,
    choice1: "Condensation",
    choice2: "Vaporization",
    choice3: "Sublimation",
    choice4: "Deposition",
    answer: 3
  },
  {
    question: "What is the term for a substance that can donate protons (H+ ions) in a solution?",
    image: null,
    choice1: "Acid",
    choice2: "Base",
    choice3: "Neutral",
    choice4: "Salt",
    answer: 1
  },
  {
    question: "What is the process by which a gas changes into a liquid called?",
    image: null,
    choice1: "Condensation",
    choice2: "Vaporization",
    choice3: "Sublimation",
    choice4: "Deposition",
    answer: 1
  },
  {
    question: "Which element is used as the standard for atomic mass units (amu)?",
    image: null,
    choice1: "Carbon",
    choice2: "Hydrogen",
    choice3: "Oxygen",
    choice4: "Nitrogen",
    answer: 1
  },
  {
    question: "What is the term for a reaction in which heat is absorbed from the surroundings?",
    image: null,
    choice1: "Exothermic",
    choice2: "Endothermic",
    choice3: "Thermodynamic",
    choice4: "Spontaneous",
    answer: 2
  },
  {
    question: "Which type of reaction involves the combination of two or more substances to form a new substance?",
    image: null,
    choice1: "Decomposition",
    choice2: "Combustion",
    choice3: "Synthesis",
    choice4: "Redox",
    answer: 3
  },
  {
    question: "What is the term for a substance that cannot be broken down into simpler substances by chemical means?",
    image: null,
    choice1: "Mixture",
    choice2: "Element",
    choice3: "Compound",
    choice4: "Solution",
    answer: 2
  },
  {
    question: "Which type of reaction involves the breakdown of a single substance into two or more simpler substances?",
    image: null,
    choice1: "Decomposition",
    choice2: "Combustion",
    choice3: "Synthesis",
    choice4: "Redox",
    answer: 1
  },
  {
    question: "What is the term for the amount of solute that dissolves in a given amount of solvent at a specific temperature and pressure?",
    image: null,
    choice1: "Molarity",
    choice2: "Concentration",
    choice3: "Dilution",
    choice4: "Saturation",
    answer: 4
  },
  {
    question: "Which type of bond is formed between a metal and a non-metal?",
    image: null,
    choice1: "Ionic",
    choice2: "Covalent",
    choice3: "Metallic",
    choice4: "Hydrogen",
    answer: 1
  },
  {
    question: "What is the term for a reaction in which there is a transfer of electrons from one substance to another?",
    image: null,
    choice1: "Decomposition",
    choice2: "Combustion",
    choice3: "Synthesis",
    choice4: "Redox",
    answer: 4
  }
]


let hardChemistry = [
  {
    question: "What is the term for the study of the effect of electric fields on chemical reactions?",
    image: null,
    choice1: "Electrochemistry",
    choice2: "Photochemistry",
    choice3: "Inorganic chemistry",
    choice4: "Organometallic chemistry",
    answer: 1
  },
  {
    question: "What is the term for the process by which a substance gains electrons?",
    image: null,
    choice1: "Oxidation",
    choice2: "Reduction",
    choice3: "Ionization",
    choice4: "Hydrolysis",
    answer: 2
  },
  {
    question: "Which type of reaction involves the transfer of a phosphate group from ATP to another molecule?",
    image: null,
    choice1: "Dehydration synthesis",
    choice2: "Hydrolysis",
    choice3: "Phosphorylation",
    choice4: "Decarboxylation",
    answer: 3
  },
  {
    question: "What is the term for the study of the rates of chemical reactions and the factors that affect them?",
    image: null,
    choice1: "Thermochemistry",
    choice2: "Kinetics",
    choice3: "Quantum chemistry",
    choice4: "Solid-state chemistry",
    answer: 2
  },
  {
    question: "Which type of reaction involves the addition of oxygen or the removal of hydrogen from a molecule?",
    image: null,
    choice1: "Hydrolysis",
    choice2: "Decarboxylation",
    choice3: "Reduction",
    choice4: "Oxidation",
    answer: 4
  },
  {
    question: "What is the term for a type of isomerism where the spatial arrangement of atoms is different due to the presence of double bonds?",
    image: null,
    choice1: "Structural isomerism",
    choice2: "Stereoisomerism",
    choice3: "Tautomeric isomerism",
    choice4: "Geometric isomerism",
    answer: 4
  },
  {
    question: "Which type of reaction involves the splitting of a molecule into smaller molecules by the addition of water?",
    image: null,
    choice1: "Dehydration synthesis",
    choice2: "Hydrolysis",
    choice3: "Phosphorylation",
    choice4: "Decarboxylation",
    answer: 2
  },
  {
    question: "What is the term for a compound that has the same molecular formula but different structural arrangement?",
    image: null,
    choice1: "Enantiomer",
    choice2: "Isotope",
    choice3: "Tautomer",
    choice4: "Isomer",
    answer: 4
  },
  {
    question: "Which type of bond is formed when electrons are shared equally between atoms?",
    image: null,
    choice1: "Ionic",
    choice2: "Covalent",
    choice3: "Metallic",
    choice4: "Hydrogen",
    answer: 2
  },
  {
    question: "What is the term for the change in the frequency or wavelength of light as it passes through a medium?",
    image: null,
    choice1: "Dispersion",
    choice2: "Diffraction",
    choice3: "Refraction",
    choice4: "Reflection",
    answer: 3
  },
  {
    question: "Which type of reaction involves the transfer of electrons between species but does not involve a change in oxidation state?",
    image: null,
    choice1: "Disproportionation",
    choice2: "Redox",
    choice3: "Ligand exchange",
    choice4: "Polymerization",
    answer: 1
  },
  {
    question: "What is the term for a substance that speeds up a chemical reaction without being consumed in the process?",
    image: null,
    choice1: "Catalyst",
    choice2: "Reagent",
    choice3: "Reactant",
    choice4: "Inhibitor",
    answer: 1
  },
  {
    question: "Which type of bond results from the attraction between a positively charged metal cation and negatively charged non-metal ion?",
    image: null,
    choice1: "Covalent bond",
    choice2: "Ionic bond",
    choice3: "Metallic bond",
    choice4: "Hydrogen bond",
    answer: 2
  },
  {
    question: "What is the term for the minimum amount of energy required to initiate a chemical reaction?",
    image: null,
    choice1: "Activation energy",
    choice2: "Gibbs free energy",
    choice3: "Enthalpy",
    choice4: "Entropy",
    answer: 1
  },
  {
    question: "Which type of reaction involves the combining of two or more smaller molecules to form a larger molecule with the elimination of a smaller molecule, such as water?",
    image: null,
    choice1: "Polymerization",
    choice2: "Decomposition",
    choice3: "Hydration",
    choice4: "Hydrolysis",
    answer: 1
  },
  {
    question: "What is the term for a substance that dissociates into hydrogen ions (H+) in a solution?",
    image: null,
    choice1: "Acid",
    choice2: "Base",
    choice3: "Salt",
    choice4: "Buffer",
    answer: 1
  },
  {
    question: "Which type of reaction involves the reaction between an acid and a base to form water and a salt?",
    image: null,
    choice1: "Redox reaction",
    choice2: "Combustion reaction",
    choice3: "Neutralization reaction",
    choice4: "Displacement reaction",
    answer: 3
  },
  {
    question: "What is the term for the measure of the amount of solute dissolved in a given amount of solvent?",
    image: null,
    choice1: "Molarity",
    choice2: "Molality",
    choice3: "Concentration",
    choice4: "Dilution",
    answer: 1
  },
  {
    question: "Which type of reaction involves the reaction of a hydrocarbon with oxygen to produce carbon dioxide and water?",
    image: null,
    choice1: "Substitution reaction",
    choice2: "Addition reaction",
    choice3: "Combustion reaction",
    choice4: "Decarboxylation reaction",
    answer: 3
  },
  {
    question: "What is the term for the process by which a liquid changes into a gas at a temperature below its boiling point?",
    image: null,
    choice1: "Evaporation",
    choice2: "Vaporization",
    choice3: "Condensation",
    choice4: "Sublimation",
    answer: 1
  }
]


let teamsSport = [
  {
    question : "What it the team having the following logo?",
    image:  "https://dlscenter.com/wp-content/uploads/2017/06/real-madrid-logo.png",
    choice1 : "FC Barcelona",
    choice2 : "Liverpool",
    choice3 : "Real Madrid",
    choice4 : "AC Milan",
    answer : 3
  },
  {
    question : "What it the team having the following logo?",
    image:  "https://1000logos.net/wp-content/uploads/2016/10/AC-Milan-Logo.png",
    choice1 : "FC Barcelona",
    choice2 : "Juventus",
    choice3 : "Internazionale",
    choice4 : "AC Milan",
    answer : 4
  },
  {
    question : "What it the team having the following logo?",
    image:  "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png",
    choice1 : "Manchester City",
    choice2 : "Manchester United",
    choice3 : "Liverpool",
    choice4 : "Chelsea",
    answer : 1
  },
  {
    question : "What it the team having the following logo?",
    image:  "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png",
    choice1 : "Liverpool",
    choice2 : "Manchester United",
    choice3 : "Manchester City",
    choice4 : "Arsenal",
    answer : 2
  },
  {
    question : "What it the team having the following logo?",
    image:  "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png",
    choice1 : "Everton",
    choice2 : "Tottenham Hotspur",
    choice3 : "Manchester United",
    choice4 : "Liverpool",
    answer : 4
  },
  {
    question : "What it the team having the following logo?",
    image:  "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
    choice1 : "FC Barcelona",
    choice2 : "Girona",
    choice3 : "Espanyol",
    choice4 : "Real Madrid",
    answer : 1
  },
  {
    question : "What it the team having the following logo?",
    image:  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png",
    choice1 : "Bayern Munich",
    choice2 : "Dortmund",
    choice3 : "Schalke",
    choice4 : "Leipzig",
    answer : 2
  },
  {
    question : "What it the team having the following logo?",
    image:  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juventus_FC_2017_icon_%28black%29.svg/800px-Juventus_FC_2017_icon_%28black%29.svg.png",
    choice1 : "AC Milan",
    choice2 : "Torino",
    choice3 : "Juventus",
    choice4 : "Napoli",
    answer : 3
  },
  {
    question : "What it the team having the following logo?",
    image:  "https://upload.wikimedia.org/wikipedia/en/c/c1/FC_Basel_crest.svg",
    choice1 : "Shakhtar Dontesk",
    choice2 : "FC Barcelona",
    choice3 : "Sporting Lisbon",
    choice4 : "Basel",
    answer : 4
  },
  {
    question : "What it the team having the following logo?",
    image:  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/FC_Schalke_04_Logo.svg/1200px-FC_Schalke_04_Logo.svg.png",
    choice1 : "Schalke",
    choice2 : "FC Koln",
    choice3 : "Sporting FC",
    choice4 : "Dortmund",
    answer : 1
  },
  {
    question : "What it the team having the following logo?",
    image:  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Olympique_Marseille_logo.svg/1200px-Olympique_Marseille_logo.svg.png",
    choice1 : "Nantes",
    choice2 : "Marseille",
    choice3 : "Paris Saint Germain",
    choice4 : "Mallorca",
    answer : 2
  },
  {
    question : "What it the team having the following logo?",
    image:  "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Sevilla_FC_logo.svg/1200px-Sevilla_FC_logo.svg.png",
    choice1 : "Bilbao",
    choice2 : "Cordoba",
    choice3 : "Sevilla",
    choice4 : "Grenada",
    answer : 3
  },
  {
    question : "What it the team having the following logo?",
    image:  "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/1200px-Atletico_Madrid_2017_logo.svg.png",
    choice1 : "Real Madrid",
    choice2 : "Deportivo Lacaruna",
    choice3 : "Rallo Vallecano",
    choice4 : "Atletico Madrid",
    answer : 4
  },
  {
    question : "What it the team having the following logo?",
    image:  "https://cdne-totv8-prod-westeurope.azureedge.net/media/40307/spurs-blue-compressed.png",
    choice1 : "Tottenham Hotspur",
    choice2 : "Arsenal",
    choice3 : "Chelsea",
    choice4 : "Everton",
    answer : 1
  },
  {
    question : "What it the team having the following logo?",
    image:  "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/PSV_Eindhoven.svg/1200px-PSV_Eindhoven.svg.png",
    choice1 : "Ajax",
    choice2 : "Eindhoven",
    choice3 : "Sporting",
    choice4 : "Elche",
    answer : 2
  },
  {
    question : "What it the team having the following logo?",
    image:  "https://upload.wikimedia.org/wikipedia/commons/2/22/Al-Hilal-Logo.png",
    choice1 : "Al Nasser",
    choice2 : "Al Ettihad",
    choice3 : "Al Hilal",
    choice4 : "Al Gharrafa",
    answer : 3
  },
  {
    question : "What it the team having the following logo?",
    image:  "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Rcd_mallorca.svg/1200px-Rcd_mallorca.svg.png",
    choice1 : "Espanyol",
    choice2 : "Girona",
    choice3 : "Granada",
    choice4 : "Mallorca",
    answer : 4
  },
  {
    question : "What it the team having the following logo?",
    image:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh4sJcYpsSgHGdWqPUVFCM2vhk90lHwPss_aCctL9lvEcCMclHP3ELnr-TvyCL1T_dSLY&usqp=CAU",
    choice1 : "Shakhtar Donetsk",
    choice2 : "Victoria Plzen",
    choice3 : "Zenit",
    choice4 : "Club Brugge",
    answer : 1
  },
  {
    question : "What it the team having the following logo?",
    image:  "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Leeds_United_F.C._logo.svg/1200px-Leeds_United_F.C._logo.svg.png",
    choice1 : "Fullham",
    choice2 : "Leeds",
    choice3 : "Liverpool",
    choice4 : "Manchester United",
    answer : 2
  },
  {
    question : "What it the team having the following logo?",
    image:  "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/SL_Benfica_logo.svg/1200px-SL_Benfica_logo.svg.png",
    choice1 : "Sporting",
    choice2 : "Barcelona",
    choice3 : "Benfica",
    choice4 : "Bayern",
    answer : 3
  }
]


let playersSport = [
  {
    question : "Who is the following player?",
    image : "https://imageio.forbes.com/specials-images/imageserve/610a3a5525282a7152194ad4/0x0.jpg?format=jpg&width=1200",
    choice1 : "Lionel Messi",
    choice2 : "Cristiano Ronaldo",
    choice3 : "Diego Maradona",
    choice4 : "Pele",
    answer : 1
  },
  {
    question : "Who is the following player?",
    image : "https://i2-prod.manchestereveningnews.co.uk/incoming/article26229946.ece/ALTERNATES/s1200c/1_CR7-Al-Nassr.jpg",
    choice1 : "Lionel Messi",
    choice2 : "Cristiano Ronaldo",
    choice3 : "Gerd Muller",
    choice4 : "Ronaldo Nazario",
    answer : 2
  },
  {
    question : "Who is the following player?",
    image : "https://media.gq-magazine.co.uk/photos/63bd3fe7289a3155af7a277b/master/pass/GettyImages-1235215302.jpg",
    choice1 : "Cristiano Ronaldo",
    choice2 : "Diego Costa",
    choice3 : "Zlatan Ibrahimovic",
    choice4 : "Oliver Giroud",
    answer : 3
  },
  {
    question : "Who is the following player?",
    image : "https://img.asmedia.epimg.net/resizer/AD9J4DSkTek-7NR3xdSqsjXU5Xk=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/YNANO3CDKRPRFLNDWEUR5IHD7A.jpg",
    choice1 : "Cristiano Ronaldo",
    choice2 : "Ronaldinho",
    choice3 : "Robinho",
    choice4 : "Ronaldo Nazario",
    answer : 4
  },
  {
    question : "Who is the following player?",
    image : "https://media.cnn.com/api/v1/images/stellar/prod/190128201815-italian-goalkeeper-gianluigi-buffon-trophy-world-cup-2006.jpg?q=w_2789,h_1805,x_0,y_0,c_fill",
    choice1 : "Gianluigi Buffon",
    choice2 : "Oliver Kahn",
    choice3 : "Manuel Neuer",
    choice4 : "Lloris",
    answer : 1
  },
  {
    question : "Who is the following player?",
    image : "https://i.guim.co.uk/img/media/a45793d358c553a24a0796c69e2d7e2e852090da/342_569_3809_2285/master/3809.jpg?width=1200&quality=85&auto=format&fit=max&s=e8eeaf4f28c1168753c1fdd22fb98590",
    choice1 : "Muller",
    choice2 : "Gotze",
    choice3 : "Klose",
    choice4 : "Lahm",
    answer : 2
  },
  {
    question : "Who is the following player?",
    image : "https://cdn.theathletic.com/app/uploads/2020/04/08095348/ZIDANE-juventus.jpg",
    choice1 : "Pirlo",
    choice2 : "Del Piero",
    choice3 : "Zidane",
    choice4 : "Mancini",
    answer : 3
  },
  {
    question : "Who is the following player?",
    image : "https://m.media-amazon.com/images/M/MV5BMjFiZGZhMTktNjE2NS00YTBiLWJlOTUtYjdmYjI3ODEyOWFiXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg",
    choice1 : "Nesta",
    choice2 : "Puyol",
    choice3 : "Pique",
    choice4 : "Maldini",
    answer : 4
  },
  {
    question : "Who is the following player?",
    image : "https://tmssl.akamaized.net/images/foto/galerie/carles-puyol-1410853025-2696.jpg?lm=1483605752",
    choice1 : "Poyul",
    choice2 : "Pique",
    choice3 : "Ramos",
    choice4 : "Alba",
    answer : 1
  },
  {
    question : "Who is the following player?",
    image : "https://images.bfmtv.com/u_IHrYlGqSHJjMWw2kZAhwnNu8Q=/0x202:2048x1354/images/Angel-Di-Maria-1168267.jpg",
    choice1 : "Aguero",
    choice2 : "Di Maria",
    choice3 : "Lionel Messi",
    choice4 : "Zanetti",
    answer : 2
  },
  {
    question : "Who is the following player?",
    image : "https://ichef.bbci.co.uk/news/640/cpsprodpb/13BEB/production/_122257808_rivaldo_rex2_bc.jpg",
    choice1 : "Ronaldo",
    choice2 : "Ronaldinho",
    choice3 : "Rivaldo",
    choice4 : "Requilme",
    answer : 3
  },
  {
    question : "Who is the following player?",
    image : "https://static.footballtransfers.com/images/cn/image/upload/q_75,w_1200/footballcritic/s8xxh6bcjv3jzl10kepf.webp",
    choice1 : "jefferin",
    choice2 : "Messi",
    choice3 : "Pedro",
    choice4 : "Bojan",
    answer : 4
  },
  {
    question : "Who is the following player?",
    image : "https://tmssl.akamaized.net/images/foto/galerie/alessandro-nesta-gestikulierend-2007-1592207220-41380.jpg?lm=1592207198",
    choice1 : "Nesta",
    choice2 : "Maldini",
    choice3 : "Bonucci",
    choice4 : "Chiellini",
    answer : 1
  },
  {
    question : "Who is the following player?",
    image : "https://www.fcbarcelona.com/fcbarcelona/photo/2020/09/06/c7355114-245c-48a3-b5fe-0cea11dc9379/SUAREZ-56-min.jpg",
    choice1 : "Falcao",
    choice2 : "David Villa",
    choice3 : "Suarez",
    choice4 : "Lewandowski",
    answer : 3
  },
  {
    question : "Who is the following player?",
    image : "https://phantom-marca.unidadeditorial.es/e07831afdf224f8792d53892d2c39c34/resize/1320/f/jpg/assets/multimedia/imagenes/2023/02/03/16754265959693.jpg",
    choice1 : "Suarez",
    choice2 : "Lewandowski",
    choice3 : "Benzema",
    choice4 : "Goretzka",
    answer : 2
  },
  {
    question : "Who is the following player?",
    image : "https://c.ndtvimg.com/2022-10/a5fjq4qo_karim-benzema-afp_625x300_10_October_22.jpg?ver-20230324.111",
    choice1 : "Higuain",
    choice2 : "Raul",
    choice3 : "Ronaldo",
    choice4 : "Benzema",
    answer : 4
  },
  {
    question : "Who is the following player?",
    image : "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt89e3ead9d24f07c2/63db69d490c0151a34c0060c/GOAL_-_Blank_WEB_-_Facebook_(7).jpg",
    choice1 : "Luka Modric",
    choice2 : "Ivan Rakitic",
    choice3 : "Pulisic",
    choice4 : "Christensen",
    answer : 1
  },
  {
    question : "Who is the following player?",
    image : "https://e0.365dm.com/20/04/2048x1152/skysports-ivan-rakitic-barcelona_4968194.jpg",
    choice1 : "Ivan Rakitic",
    choice2 : "Luka Modric",
    choice3 : "Perisic",
    choice4 : "Handanovic",
    answer : 1
  },
  {
    question : "Who is the following player?",
    image : "https://i.ytimg.com/vi/5ZcHMV_zbxc/maxresdefault.jpg",
    choice1 : "Handanovic",
    choice2 : "Buffon",
    choice3 : "Dida",
    choice4 : "Van der saar",
    answer : 3
  },
  {
    question : "Who is the following player?",
    image : "https://www.thenation.com/wp-content/uploads/2020/11/diego-maradona-gt-img.jpg",
    choice1 : "Lionel Messi",
    choice2 : "Baggio",
    choice3 : "Pele",
    choice4 : "Diego Maradona",
    answer : 4
  },
  {
    question : "Who is the following player?",
    image : "https://tmssl.akamaized.net/images/foto/galerie/ronaldinho-ac-milan-1592576382-41843.jpg?lm=1592576360",
    choice1 : "Ronaldinho",
    choice2 : "Ronaldo",
    choice3 : "Adriano",
    choice4 : "Rivaldo",
    answer : 1
  },
  {
    question : "Who is the following player?",
    image : "https://tmssl.akamaized.net/images/foto/galerie/hristo-stoichkov-bei-barcelona-1575285527-27908.jpg?lm=1575285533",
    choice1 : "Ronald Koeman",
    choice2 : "Hristo Stoichkov",
    choice3 : "Guardiola",
    choice4 : "Mourinho",
    answer : 2
  }
]


let easyGeography = [
    {
        question: "What is the capital of lebanon?",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2d/fa/beirut.jpg?w=700&h=-1&s=1",
        choice1: "Beirut",
        choice2: "Damascus",
        choice3: "Tripoli",
        choice4: "Baghdad",
        answer: 1
    },
    {
        question: "What is the highest mountain peak in the world?",
        image : "https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg",
        choice1: "Mount Kilimanjaro",
        choice2: "Mount Everest",
        choice3: "Mount McKinley",
        choice4: "Mount Aconcagua",
        answer: 2
    },
    {
      question: "What is the largest country in South America?",
      image : null,
      choice1:" Brazil",
      choice2:" Argentina",
      choice3: "Colombia",
      choice4: "Venezuela",
      answer: 1
    },
    {
      question: "What is the longest river in Africa?",
      image : null,
      choice1: "Congo River",
      choice2: "Nile River",
      choice3: "Zambezi River",
      choice4: "Niger River",
      answer: 2
    },
    {
      question: "What is the capital city of Australia?",
      image : null,
      choice1: "Sydney",
      choice2: "Melbourne",
      choice3: "Brisbane",
      choice4: "Canberra",
      answer: 4
    },
    {
      question: "What is the largest desert in the world?",
      image : null,
      choice1: "Sahara Desert",
      choice2: "Gobi Desert",
      choice3: "Arabian Desert",
      choice4: "Antarctic Desert",
      answer: 1
    },
    {
      question: "What is the name of the sea that separates Europe and Africa?",
      image :null,
      choice1: "Black Sea",
      choice2: "Red Sea",
      choice3: "Mediterranean Sea",
      choice4: "Baltic Sea",
      answer: 3
    },
    {
      question: "What is the name of the capital city of Egypt?",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/9b/2f/5b/cairo.jpg?w=700&h=500&s=1",
      choice1: "Cairo",
      choice2: "Alexandria",
      choice3: "Luxor",
      choice4: "Aswan",
      answer: 1
    },
    {
      question: "What is the name of the highest peak in North America?",
      image : "https://lp-cms-production.s3.amazonaws.com/public/2019-06/faaeff03e004f2fc756e8492a4959929-denali-national-park-preserve.jpg?sharp=10&vib=20&w=1200",
      choice1: "Mount St. Helens",
      choice2: "Denali",
      choice3: "Mount Whitney",
      choice4: "Mount Elbert",
      answer: 2
    },
    {
      question: "What is the smallest continent in the world?",
      image : null,
      choice1: "Africa",
      choice2: "Asia",
      choice3: "Europe",
      choice4: "Australia",
      answer: 4
    },
    {
      question: "What is the name of the sea that borders the west coast of Africa?",
      image : null,
      choice1: "Atlantic Ocean",
      choice2: "Indian Ocean",
      choice3: "Pacific Ocean",
      choice4: "Southern Ocean",
      answer: 1
    },
    {
      question: "How many planets are in our solar system?",
      image : null,
      choice1: "7",
      choice2: "8",
      choice3: "9",
      choice4: "10",
      answer: 2
    },
    {
      question: "What is the name of the largest ocean in the world?",
      image : null,
      choice1: "Atlantic Ocean",
      choice2: "Indian Ocean",
      choice3: "Pacific Ocean",
      choice4: "Southern Ocean",
      answer: 3
    },
    {
      question: "What is the smallest planet in our solar system?",
      image : null,
      choice1:" Mars",
      choice2: "Mercury",
      choice3: "Venus",
      choice4: "Earth",
      answer: 2
    },
    {
      question: "What is the name of the capital city of Italy?",
      image : null,
      choice1: "Rome",
      choice2: "Venice",
      choice3: "Florence",
      choice4:" Milan",
      answer: 1
    },
    {
      question: "What is the largest state in the United States?",
      image : null,
      choice1: "Texas",
      choice2: "Alaska",
      choice3: "California",
      choice4: "New York",
      answer: 2      
    },
    {
      question: "What is the name of the largest hot desert in the world?",
      image : null,
      choice1: "Sahara Desert",
      choice2: "Gobi Desert",
      choice3: "Mojave Desert",
      choice4: "Atacama Desert",
      answer: 1
    },
    {
      question: "What is the name of the largest country in the world by land area?",
      image : null,
      choice1: "United States",
      choice2: "Russia",
      choice3: "China",
      choice4: "Canada",
      answer: 2
    },
    {
      question: "What is the name of the largest continent in the world?",
      image : null,
      choice1: "Asia",
      choice2: "North America",
      choice3: "Africa",
      choice4: "Europe",
      answer: 1
    },
    {
      question: "What is the name of the largest river in South America?",
      image : null,
      choice1: "Amazon River",
      choice2: "Nile River",
      choice3: "Congo River",
      choice4: "Yangtze River",
      answer: 1
    },
    {
      question: "What is the name of the highest peak in South America?",
      image : null,
      choice1: "Mount Everest",
      choice2: "Mount Aconcagua",
      choice3: "Mount Kilimanjaro",
      choice4: "Mount Fuji",
      answer: 2
    }
];

let mediumGeography = [
  {
    question : "Which of the following countries is the largest by area?",
    image: null,
    choice1: "Russia",
    choice2: "Canada",
    choice3: "China",
    choice4: "USA",
    answer: 1
  },
  {
    question : " What is the capital city of Brazil?",
    image: null,
    choice1: "São Paulo",
    choice2: "Rio de Janeiro",
    choice3: "Brasília",
    choice4: "Salvador",
    answer: 3
  },
  {
    question : "Which ocean surrounds the Maldives?",
    image: "https://hnj-website.s3.amazonaws.com/uploads/2020/12/maldives-tropical-island-with-seaplane-min-e1661391726755.jpg",
    choice1: "Atlantic Ocean",
    choice2: "Pacific Ocean",
    choice3: "Indian Ocean",
    choice4: "Arctic Ocean",
    answer: 3
  },
  {
    question : "What is the highest mountain peak in Africa?",
    image: null,
    choice1: "Mount Everest",
    choice2: "Mount Kilimanjaro",
    choice3: "Mount McKinley",
    choice4: "Mount Everest",
    answer: 2
  },
  {
    question:" What is the longest river in South America?",
    image: null,
    choice1: "Nile River",
    choice2: "Amazon River",
    choice3: "Congo River",
    choice4: "Mississippi River",
    answer: 2
  },
  {
    question : "What is the capital city of South Korea?",
    image: "https://content.r9cdn.net/rimg/dimg/30/0c/6318617a-city-35982-163ff913019.jpg?width=1366&height=768&xhint=2421&yhint=1876&crop=true",
    choice1: "Taipei",
    choice2: "Tokyo",
    choice3: "Beijing",
    choice4: "Seoul",
    answer: 4
  },
  {
    question: "What is the largest island in the Caribbean Sea?",
    image: null,
    choice1: "Puerto Rico",
    choice2: "Hispaniola",
    choice3: "Jamaica",
    choice4: "Cuba",
    answer: 4
  },
  {
    question : "What is the highest point in Australia?",
    image: null,
    choice1: "Mount Kosciuszko",
    choice2: "Mount Everest",
    choice3: "Mount Fuji",
    choice4: "Mount Kilimanjaro",
    answer: 1
  },
  {
    question : "What is the capital city of Italy?",
    image: "https://media.gq-magazine.co.uk/photos/5d13a3a9b6fee91a87c9f87f/master/pass/Rome-hp-GQ-24May16_istock_b.jpg",
    choice1: "Milan",
    choice2: "Venice",
    choice3: "Rome",
    choice4: "Naples",
    answer: 3
  },
  {
    question: "Which country has the highest population density?",
    image: null,
    choice1: "China",
    choice2: "India",
    choice3: "Japan",
    choice4: "Bangladesh",
    answer: 4
  },
  {
    question: "What is the largest desert in Africa?",
    image: "https://www.onthegotours.com/blog/wp-content/uploads/2019/08/Oasis-over-Sand-dunes-in-Erg-Chebbi-of-Sahara-desert-in-Morocco-Africa.jpg",
    choice1: "Kalahari Desert",
    choice2: "Sahara Desert",
    choice3: "Namib Desert",
    choice4: "Gobi Desert",
    answer: 2
  },
  {
    question : "What is the capital city of Turkey?",
    image: null,
    choice1: "Ankara",
    choice2: "Istanbul",
    choice3: "Bursa",
    choice4: "Izmir",
    answer: 1
  },
  {
    question: "What is the deepest ocean trench in the world?",
    image: null,
    choice1: "Java Trench",
    choice2: "Puerto Rico Trench",
    choice3: "Mariana Trench",
    choice4: "Aleutian Trench",
    answer: 3
  }
];
let hardGeography = [
  {
      question: "What is the capital city of Bhutan?",
      image: null,
      choice1: "Thimphu",
      choice2: "Kathmandu",
      choice3: "Dhaka",
      choice4: "New Delhi",
      answer: 1
  },
  {
      question: "What is the name of the strait that separates Malaysia and Indonesia?",
      image: null,
      choice1: "Lombok Strait",
      choice2: "Sunda Strait",
      choice3: "Makassar Strait",
      choice4: "Karimata Strait",
      answer: 2
  },
  {
      question: "What is the name of the second largest city in Australia?",
      image: null,
      choice1: "Melbourne",
      choice2: "Brisbane",
      choice3: "Perth",
      choice4: "Sydney",
      answer: 4
  },
  {
      question: "What is the name of the strait that connects the Mediterranean Sea to the Atlantic Ocean?",
      image: null,
      choice1: "Strait of Hormuz",
      choice2: "Bosphorus Strait",
      choice3: "Strait of Gibraltar",
      choice4: "Strait of Malacca",
      answer: 3
  },
  {
      question: "What is the name of the river that flows through the Grand Canyon?",
      image: "https://npf-prod.imgix.net/uploads/shutterstock_97706066_1.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=900&q=80&w=1600",
      choice1: "Colorado River",
      choice2: "Mississippi River",
      choice3: "Missouri River",
      choice4: "Rio Grande",
      answer: 1
  },
  {
      question: "What is the name of the country that is the largest producer of oil in Africa?",
      image: null,
      choice1: "Angola",
      choice2: "Nigeria",
      choice3: "Libya",
      choice4: "Algeria",
      answer: 2
  },
  {
    question: "Which is the world's smallest independent state by land area?",
    image: null,
    choice1: "Monaco",
    choice2: "Liechtenstein",
    choice3: "Nauru",
    choice4: "Vatican City",
    answer: 4
},
{
    question: "Which country is known as the 'Land of the Midnight Sun'?",
    image: null,
    choice1: "Sweden",
    choice2: "Norway",
    choice3: "Finland",
    choice4: "Iceland",
    answer: 2
},
{
    question: "What is the capital of Yemen?",
    image: null,
    choice1: "Djibouti",
    choice2: "Sana'a",
    choice3: "Aden",
    choice4: "Riyadh",
    answer: 2
},
{
    question: "What is the name of the world's longest river?",
    image: null,
    choice1: "Nile",
    choice2: "Amazon",
    choice3: "Yangtze",
    choice4: "Mississippi",
    answer: 1
},
{
    question: "Which country is the world's largest producer of coffee?",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/09/20/istock-157528129.jpg",
    choice1: "Brazil",
    choice2: "Vietnam",
    choice3: "Colombia",
    choice4: "Ethiopia",
    answer: 1
},
{
    question: "What is the name of the highest mountain in Africa?",
    image: "https://www.climbing-kilimanjaro.com/wp-content/uploads/2020/11/Mount-Kilimanjaro-Meaning.jpg",
    choice1: "Mt. Everest",
    choice2: "Kilimanjaro",
    choice3: "Denali",
    choice4: "Aconcagua",
    answer: 2
},
{
    question: "What is the capital of Kazakhstan?",
    image: null,
    choice1: "Tashkent",
    choice2: "Astana",
    choice3: "Bishkek",
    choice4: "Almaty",
    answer: 2
},
{
    question: "Which country is known as the 'Land of the Rising Sun'?",
    image: null,
    choice1: "Japan",
    choice2: "South Korea",
    choice3: "China",
    choice4: "Taiwan",
    answer: 1
},
];
let TrueOrFalseQuestions = [
    {
      question: "The Great Wall of China is the only man-made object visible from space.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1200px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
      choice1: "True",
      choice2: "False",
      answer: 2 // False
    },
    {
      question: "The human body has four lungs.",
      image: null,
      choice1: "True",
      choice2: "False",
      answer: 2 // False
    },
    {
      question: "The currency of Japan is the yen.",
      image: null,
      choice1: "True",
      choice2: "False",
      answer: 1 // True
    },
    {
      question: "The tallest mammal in the world is the elephant.",
      image: "https://d1jyxxz9imt9yb.cloudfront.net/article/4638/meta_image/regular/elephant-calf-mom-IFAW_slash_B._Hollweg.jpg",
      choice1: "True",
      choice2: "False",
      answer: 2 // False (it's the giraffe)
    },
    {
      question: "The United States has 50 states.",
      image: null,
      choice1: "True",
      choice2: "False",
      answer: 1 // True
    },
    {
      question: "The largest planet in our solar system is Saturn.",
      image: null,
      choice1: "True",
      choice2: "False",
      answer: 2 // False (it's Jupiter)
    },
    {
      question: "The human body has 206 bones.",
      image: null,
      choice1: "True",
      choice2: "False",
      answer: 1 // True
    },
    {
      question: "The Statue of Liberty was a gift from France to the United States.",
      image: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2021/09/1200/675/statue-of-liberty-1.jpg?ve=1&tl=1",
      choice1: "True",
      choice2: "False",
      answer: 1 // True
    },
    {
      question: "The Great Barrier Reef is located off the coast of Australia.",
      image: null,
      choice1: "True",
      choice2: "False",
      answer: 1 // True
    },
    {
      question: "The Earth has one moon.",
      image: null,
      choice1: "True",
      choice2: "False",
      answer: 1 // True
    },
    {
      question: "The Mona Lisa is a painting by Vincent Van Gogh.",
      image: "https://cdn.britannica.com/24/189624-131-BAF1184D/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg",
      choice1: "True",
      choice2: "False",
      answer: 2 // False (it's by Leonardo da Vinci)
    },
    {
      question: "The Eiffel Tower is located in London.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/78/c3/88/caption.jpg?w=1200&h=700&s=1&cx=2736&cy=1824&chk=v1_fa65978ad26491920728",
      choice1: "True",
      choice2: "False",
      answer: 2 // False (it's in Paris)
    },
    {
      question: "The human heart has four chambers.",
      image: null,
      choice1: "True",
      choice2: "False",
      answer: 1 // True
    },
    {
      question: "The Nile is the longest river in the world.",
      image: null,
      choice1: "True",
      choice2: "False",
      answer: 1 // True
    },
    {
      question: "The moon is made of cheese.",
      image: null,
      choice1: "True",
      choice2: "False",
      answer: 2 // False
    },
    {
      question: "The fastest land animal is the cheetah.",
      image: null,
      choice1: "True",
      choice2: "False",
      answer: 1 // True
    },
    {
      question: "The sun is a planet.",
      image: "https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg",
      choice1: "True",
      choice2: "False",
      answer: 2 // False
    },
    {
      question: "The smallest country in the world is Monaco.",
      image: null,
      choice1: "True",
      choice2: "False",
      answer: 1 // True
    }
]

let easySport = [
  {
    question: "What sport uses a round ball and a hoop?",
    image: null,
    choice1: "Basketball",
    choice2: "Football",
    choice3: "Golf",
    choice4: "Tennis",
    answer: 1
  },
  {
    question: "What sport is played on ice with a puck?",
    image: null,
    choice1: "Soccer",
    choice2: "Hockey",
    choice3: "Baseball",
    choice4: "Cricket",
    answer: 2
  },
  {
    question: "What sport involves hitting a ball over a net with rackets?",
    image: null,
    choice1: "Badminton",
    choice2: "Rugby",
    choice3: "Table tennis",
    choice4: "Volleyball",
    answer: 1
  },
  {
    question: "What sport is known as 'The Beautiful Game'?",
    image: null,
    choice1: "Basketball",
    choice2: "Soccer",
    choice3: "Golf",
    choice4: "Tennis",
    answer: 2
  },
  {
    question: "What sport involves throwing a disc into a target?",
    image: null,
    choice1: "Ultimate Frisbee",
    choice2: "Softball",
    choice3: "Rugby",
    choice4: "Cycling",
    answer: 1
  },
  {
    question: "What sport uses a bat to hit a ball and score runs?",
    image: null,
    choice1: "Basketball",
    choice2: "Golf",
    choice3: "Baseball",
    choice4: "Tennis",
    answer: 3
  },
  {
    question: "What sport involves swimming, cycling, and running?",
    image: null,
    choice1: "Basketball",
    choice2: "Soccer",
    choice3: "Triathlon",
    choice4: "Tennis",
    answer: 3
  },
  {
    question: "What sport uses a small white ball and clubs to hit the ball into a series of holes?",
    image: null,
    choice1: "Basketball",
    choice2: "Golf",
    choice3: "Baseball",
    choice4: "Tennis",
    answer: 2
  },
  {
    question: "What sport is played on a court with a net and a shuttlecock?",
    image: null,
    choice1: "Badminton",
    choice2: "Rugby",
    choice3: "Table tennis",
    choice4: "Volleyball",
    answer: 1
  },
  {
    question: "What sport involves jumping into water from a diving board?",
    image: null,
    choice1: "Basketball",
    choice2: "Soccer",
    choice3: "Diving",
    choice4: "Tennis",
    answer: 3
  },
  {
    question: "What sport uses a ball and a bat to hit the ball into the opponent's goal?",
    image: null,
    choice1: "Basketball",
    choice2: "Golf",
    choice3: "Cricket",
    choice4: "Field Hockey",
    answer: 3
  },
  {
    question: "What sport is played with a round ball and allows players to use only their feet?",
    image: null,
    choice1: "Basketball",
    choice2: "Football",
    choice3: "Tennis",
    choice4: "Golf",
    answer: 2
  },
  {
    question: "What sport is played on a field and involves hitting a ball with a bat and running bases?",
    image: null,
    choice1: "Cricket",
    choice2: "Basketball",
    choice3: "Soccer",
    choice4: "Baseball",
    answer: 4
  },
  {
    question: "What sport is played with a small white ball and a racket, and the objective is to hit the ball into the opponent's court without letting it bounce twice?",
    image: null,
    choice1: "Volleyball",
    choice2: "Golf",
    choice3: "Tennis",
    choice4: "Rugby",
    answer: 3
  },
  {
    question: "What sport is played in a pool and involves swimmers racing against each other?",
    image: null,
    choice1: "Diving",
    choice2: "Water polo",
    choice3: "Synchronized swimming",
    choice4: "Basketball",
    answer: 2
  },
  {
    question: "What sport is played on a green grass field and involves kicking a ball into the opponent's goal?",
    image: null,
    choice1: "Basketball",
    choice2: "Soccer",
    choice3: "Cricket",
    choice4: "Golf",
    answer: 2
  },
  {
    question: "What sport is played on a court with a net and a ball that is hit back and forth over the net?",
    image: null,
    choice1: "Basketball",
    choice2: "Volleyball",
    choice3: "Soccer",
    choice4: "Tennis",
    answer: 2
  },
  {
    question: "What sport involves riding a board on water and performing tricks?",
    image: null,
    choice1: "Surfing",
    choice2: "Skiing",
    choice3: "Basketball",
    choice4: "Cycling",
    answer: 1
  },
  {
    question: "What sport is played on a rectangular field and involves throwing and catching a ball while running?",
    image: null,
    choice1: "Basketball",
    choice2: "Football",
    choice3: "Tennis",
    choice4: "Rugby",
    answer: 2
  }
];


let mediumSport = [
  {
    question: "Which country has won the most FIFA World Cup titles as of 2021?",
    image: null,
    choice1: "Brazil",
    choice2: "Germany",
    choice3: "Argentina",
    choice4: "France",
    answer: 1
  },
  {
    question: "Who is the most decorated Olympian of all time with a total of 28 Olympic medals?",
    image: null,
    choice1: "Michael Phelps",
    choice2: "Usain Bolt",
    choice3: "Simone Biles",
    choice4: "Serena Williams",
    answer: 1
  },
  {
    question: "What is the national sport of Japan?",
    image: null,
    choice1: "Judo",
    choice2: "Sumo wrestling",
    choice3: "Kendo",
    choice4: "Karate",
    answer: 2
  },
  {
    question: "What is the highest score possible in a single game of bowling?",
    image: null,
    choice1: "250",
    choice2: "300",
    choice3: "350",
    choice4: "400",
    answer: 2
  },
  {
    question: "Which country has won the most Olympic gold medals in basketball?",
    image: null,
    choice1: "United States",
    choice2: "Soviet Union",
    choice3: "Argentina",
    choice4: "Spain",
    answer: 1
  },
  {
    question: "In golf, what is the term for a hole that is completed in one stroke under par?",
    image: null,
    choice1: "Eagle",
    choice2: "Birdie",
    choice3: "Bogey",
    choice4: "Albatross",
    answer: 2
  },
  {
    question: "What is the diameter of a basketball hoop in inches?",
    image: null,
    choice1: "16",
    choice2: "18",
    choice3: "20",
    choice4: "22",
    answer: 3
  },
  {
    question: "Which country won the first ever FIFA World Cup held in 1930?",
    image: null,
    choice1: "Brazil",
    choice2: "Uruguay",
    choice3: "Germany",
    choice4: "Argentina",
    answer: 2
  },
  {
    question: "Who holds the record for the most home runs in a single season in Major League Baseball?",
    image: null,
    choice1: "Babe Ruth",
    choice2: "Barry Bonds",
    choice3: "Hank Aaron",
    choice4: "Mickey Mantle",
    answer: 2
  },
  {
    question: "What is the height of an official NBA basketball hoop in feet?",
    image: null,
    choice1: "8",
    choice2: "9",
    choice3: "10",
    choice4: "11",
    answer: 3
  },
  {
    question: "Which country has won the most Wimbledon men's singles titles as of 2021?",
    image: null,
    choice1: "Switzerland",
    choice2: "United States",
    choice3: "Spain",
    choice4: "Great Britain",
    answer: 2
  },
  {
    question: "Who has won the most Formula One World Championships as of 2021?",
    image: null,
    choice1: "Lewis Hamilton",
    choice2: "Michael Schumacher",
    choice3: "Ayrton Senna",
    choice4: "Sebastian Vettel",
    answer: 2
  },
  {
    question: "Which country has won the most Olympic gold medals in track and field?",
    image: null,
    choice1: "United States",
    choice2: "Jamaica",
    choice3: "Kenya",
    choice4: "Ethiopia",
    answer: 1
  },
  {
    question: "What is the length of an Olympic swimming pool in meters?",
    image: null,
    choice1: "25",
    choice2: "50",
    choice3: "75",
    choice4: "100",
    answer: 2
  },
  {
    question: "Who holds the record for the most goals scored in a single season of the English Premier League?",
    image: null,
    choice1: "Thierry Henry",
    choice2: "Cristiano Ronaldo",
    choice3: "Lionel Messi",
    choice4: "Alan Shearer",
    answer: 4
  },
  {
    question: "What is the weight of an official Olympic shot put for men?",
    image: null,
    choice1: "4 kg",
    choice2: "6 kg",
    choice3: "8 kg",
    choice4: "10 kg",
    answer: 3
  },
  {
    question: "Who is the all-time leading scorer in NBA history as of 2021?",
    image: null,
    choice1: "Kobe Bryant",
    choice2: "LeBron James",
    choice3: "Michael Jordan",
    choice4: "Kareem Abdul-Jabbar",
    answer: 4
  },
  {
    question: "Which country has won the most Rugby World Cup titles as of 2021?",
    image: null,
    choice1: "Australia",
    choice2: "South Africa",
    choice3: "New Zealand",
    choice4: "England",
    answer: 3
  },
  {
    question: "Who is the fastest man in the world with the current world record in the 100m sprint?",
    image: null,
    choice1: "Asafa Powell",
    choice2: "Usain Bolt",
    choice3: "Tyson Gay",
    choice4: "Justin Gatlin",
    answer: 2
  },
  {
    question: "Which country has won the most Olympic gold medals in swimming?",
    image: null,
    choice1: "United States",
    choice2: "Australia",
    choice3: "China",
    choice4: "Japan",
    answer: 1
  },
  {
    question: "Who won the FIFA Women's World Cup in 2019?",
    image: null,
    choice1: "United States",
    choice2: "Germany",
    choice3: "France",
    choice4: "Brazil",
    answer: 1
  }
];


let hardSport = [
  {
    question: "Which country has won the most Cricket World Cup titles as of 2021?",
    image: null,
    choice1: "India",
    choice2: "West Indies",
    choice3: "Australia",
    choice4: "England",
    answer: 3
  },
  {
    question: "Who holds the record for the most Olympic gold medals won in swimming?",
    image: null,
    choice1: "Michael Phelps",
    choice2: "Mark Spitz",
    choice3: "Ian Thorpe",
    choice4: "Ryan Lochte",
    answer: 1
  },
  {
    question: "What is the official weight of a table tennis ball in grams?",
    image: null,
    choice1: "1.0",
    choice2: "2.0",
    choice3: "2.7",
    choice4: "4.0",
    answer: 3
  },
  {
    question: "Who has won the most Grand Slam singles titles in tennis as of 2021?",
    image: null,
    choice1: "Rafael Nadal",
    choice2: "Roger Federer",
    choice3: "Novak Djokovic",
    choice4: "Pete Sampras",
    answer: 3
  },
  {
    question: "Which country has won the most FIFA World Cup titles as of 2021?",
    image: null,
    choice1: "Argentina",
    choice2: "Brazil",
    choice3: "Italy",
    choice4: "Germany",
    answer: 2
  },
  {
    question: "Who holds the record for the most home runs in a single season of Major League Baseball?",
    image: null,
    choice1: "Babe Ruth",
    choice2: "Barry Bonds",
    choice3: "Hank Aaron",
    choice4: "Mickey Mantle",
    answer: 2
  },
  {
    question: "What is the diameter of a basketball hoop in inches?",
    image: null,
    choice1: "16",
    choice2: "17",
    choice3: "18",
    choice4: "19",
    answer: 4
  },
  {
    question: "Who is the only athlete to have won Olympic gold in both the decathlon and the long jump?",
    image: null,
    choice1: "Carl Lewis",
    choice2: "Jesse Owens",
    choice3: "Bob Beamon",
    choice4: "Daley Thompson",
    answer: 1
  },
  {
    question: "Who holds the record for the most home runs in a career in Major League Baseball?",
    image: null,
    choice1: "Babe Ruth",
    choice2: "Barry Bonds",
    choice3: "Hank Aaron",
    choice4: "Willie Mays",
    answer: 3
  },
  {
    question: "Who is the oldest winner of the Wimbledon men's singles title in tennis as of 2021?",
    image: null,
    choice1: "Roger Federer",
    choice2: "Rafael Nadal",
    choice3: "Novak Djokovic",
    choice4: "Serena Williams",
    answer: 1
  },
  {
    question: "Who is the fastest man in the world, holding the current world record for the 100m sprint?",
    image: null,
    choice1: "Usain Bolt",
    choice2: "Tyson Gay",
    choice3: "Yohan Blake",
    choice4: "Asafa Powell",
    answer: 1
  },
  {
    question: "Which country has won the most Olympic gold medals in gymnastics as of 2021?",
    image: null,
    choice1: "Russia",
    choice2: "China",
    choice3: "United States",
    choice4: "Japan",
    answer: 2
  },
  {
    question: "Who is the most decorated Olympian of all time with a total of 28 Olympic medals?",
    image: null,
    choice1: "Michael Phelps",
    choice2: "Usain Bolt",
    choice3: "Simone Biles",
    choice4: "Serena Williams",
    answer: 1
  },
  {
    question: "What is the highest score possible in a single frame of a game of ten-pin bowling?",
    image: null,
    choice1: "300",
    choice2: "200",
    choice3: "400",
    choice4: "100",
    answer: 1
  },
  {
    question: "Who is the fastest woman in the world, holding the current world record for the 100m sprint?",
    image: null,
    choice1: "Florence Griffith-Joyner",
    choice2: "Carmelita Jeter",
    choice3: "Florence Griffith",
    choice4: "Shelly-Ann Fraser-Pryce",
    answer: 1
  },
  {
    question: "Who is the only soccer player to have won the FIFA World Cup three times as captain of his national team?",
    image: null,
    choice1: "Diego Maradona",
    choice2: "Pele",
    choice3: "Cristiano Ronaldo",
    choice4: "Lionel Messi",
    answer: 2
  },
  {
    question: "What is the highest score ever achieved in a single season of the National Basketball Association (NBA)?",
    image: null,
    choice1: "2,832",
    choice2: "2,743",
    choice3: "3,089",
    choice4: "3,154",
    answer: 1
  },
  {
    question: "Which country has won the most Rugby World Cup titles as of 2021?",
    image: null,
    choice1: "New Zealand",
    choice2: "Australia",
    choice3: "England",
    choice4: "South Africa",
    answer: 1
  },
  {
    question: "Who is the only golfer to have won all four major championships (the Masters, U.S. Open, British Open, and PGA Championship) in the same calendar year?",
    image: null,
    choice1: "Tiger Woods",
    choice2: "Phil Mickelson",
    choice3: "Arnold Palmer",
    choice4: "Jack Nicklaus",
    answer: 4
  },
  {
    question: "Who is the current world chess champion as of 2023?",
    image: null,
    choice1: "Magnus Carlsen",
    choice2: "Viswanathan Anand",
    choice3: "Fabiano Caruana",
    choice4: "Hikaru Nakamura",
    answer: 1
  }
];

//end of questions

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

function startGame(g, d){
    questionCounter = 0;
    score = 0;
    genre = g;
    difficulty = d;
    
    assignQuestions(g, d);
    getNewQuestion(); 
}



// assign questions method

assignQuestions = (genre, difficulty) => {
  if(genre === "GeoGeneral"){ //geography
    if(difficulty === "easy")
      availableQuestions = [...easyGeography];
    else if(difficulty === "medium")
      availableQuestions = [...mediumGeography];
    else
      availableQuestions = [...hardGeography];
  }
  else if(genre === "ToF")  // true or false
    availableQuestions = [...TrueOrFalseQuestions];
  else if(genre === "Teams")  //teams sport
    availableQuestions = [...teamsSport];
  else if(genre === "Players") //players
    availableQuestions = [...playersSport];
  else if(genre === "Math"){ // math 
    if(difficulty === "easy")
      availableQuestions = [...easyMath];
    else if (difficulty === "medium")
      availableQuestions = [...mediumMath];
    else
      availableQuestions = [...hardMath];
  }
  else if (genre === "Physics"){ // physics
    if(difficulty === "easy")
      availableQuestions = [...easyPhysics];
    else if(difficulty === "medium")
      availableQuestions = [...mediumPhysics];
    else
      availableQuestions = [...hardPhysics];
  }
  else if (genre == "Chemistry"){ // chemistry
    if(difficulty === "easy")
      availableQuestions = [...easyChemistry];
    else if(difficulty === "medium")
      availableQuestions = [...mediumChemistry];
    else 
      availableQuestions = [...hardChemistry];
  }
  else{ //SportGeneral
    if(difficulty === "easy")
      availableQuestions = [...easySport];
    else if(difficulty === "medium")
      availableQuestions = [...mediumSport];
    else
      availableQuestions = [...hardSport];
  }
  

}

getNewQuestion = () =>{
    if(questionCounter >= MAX_QUESTIONS || availableQuestions.length === 0) {
        return window.location.assign("result?result="+score);
    } //redirect to the result page
    startTimer();
    questionCounter++;
    questionCounterText.innerText = questionCounter+" / "+MAX_QUESTIONS;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currQuestion = availableQuestions[questionIndex];
    question.innerText = currQuestion.question;
    if(currQuestion.image)
    {
        img = document.createElement("img");
        imageContainer.classList.add('imageStyle');
        img.src = currQuestion.image;
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
        img.style.objectFit = 'contain';
        imageContainer.appendChild(img);
    }


    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currQuestion['choice'+number];
    });
    availableQuestions.splice(questionIndex,1);
    acceptingAnswers = true;
}

choices.forEach( choice =>{
    choice.addEventListener("click", e =>{
        if(!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        const correctChoice = choices[currQuestion.answer-1];
        

        const classToApply = selectedAnswer == currQuestion.answer ? 'correct' : 'incorrect';
        selectedChoice.parentElement.classList.add(classToApply);
        correctChoice.parentElement.classList.add('correct');
        if(classToApply === 'correct'){
            incrementScore(CORRECT_BONUS);
        }
        setTimeout( () => {
            if(classToApply === 'incorrect')
                correctChoice.parentElement.classList.remove('correct');
            selectedChoice.parentElement.classList.remove(classToApply);
            if(currQuestion.image){
                imageContainer.removeChild(img);
                imageContainer.classList.remove('imageStyle');
            }
            resetTimer();
            getNewQuestion();
        },1000);
    });
});

incrementScore = num =>  {
    score += num;
    scoreText.innerText = score;
}

// timer 
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "blue"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("timer").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

//startTimer();
function resetTimer(){
  clearInterval(timerInterval);
    timePassed = 0;
    timeLeft = TIME_LIMIT;
    remainingPathColor = COLOR_CODES.info.color;
}

function onTimesUp() {
    const correcetChoice = choices[currQuestion.answer-1];
    correcetChoice.parentElement.classList.add('correct');
    setTimeout( () => {
        correcetChoice.parentElement.classList.remove('correct');
        if(currQuestion.image)
            imageContainer.removeChild(img);
        resetTimer();
        getNewQuestion();
    },1000);
}

function startTimer() {
    timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
   } else {
    document.getElementById("base-timer-path-remaining").classList.remove(alert.color);
    document.getElementById("base-timer-path-remaining").classList.remove(warning.color);
    document.getElementById("base-timer-path-remaining").classList.add(info.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

function printGenre(){
  document.write(genre);
}

// startGame("gerography", "medium");
