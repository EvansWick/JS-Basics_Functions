function isWorkingAgePerson(age) {
  return age >= 16 && age <= 64;
}
console.log(isWorkingAgePerson(29));

const checkMultiplicity = function (num1, num2) {
  return num1 % num2 === 0;
};
console.log(checkMultiplicity(20, 8));

const calculateSurfaceArea = (shape, param1, param2) => {
  if (!+param1 || !+param2 || param1 <= 0 || param2 <= 0) return 0;
  if (shape === "cube") {
    return Math.ceil(6 * param1 ** 2);
  } else if (shape === "cylinder") {
    return Math.ceil(2 * Math.PI * param1 * (param1 + param2));
  } else {
    return "Incorrect shape";
  }
};
