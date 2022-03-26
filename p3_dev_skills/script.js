"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// Given an array of temperatures of one day, calculate the temperature aplitude
// - What is amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures
// - what is a sensor error

// 2) Breaking up into sub-problems
// - How to ignore errors
// - Find max value in temperature array
// - Find min value in temperature array
// Subtract min from max (amplitude)

const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2:
// Function should now receive 2 arrays
// - How to merge two arrays?

///////////////////////////////
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsuis:")),
  };
  console.log(measurement);
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
