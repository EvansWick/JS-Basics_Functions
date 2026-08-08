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

/**
 *
 * @param {number} area - Area in m^2
 * @param {number} layersCount - Count of layers
 * @returns Count of cans of paint
 */
const calculatePaintBoxes = (area, layersCount = 1) => {
  const PAINT_IN_ONE_METR = 0.1;
  const VOLUME_OF_CAN = 1;

  if (!+area || area <= 0 || !+layersCount || layersCount <= 0) {
    return 0;
  }

  const result = (+area * +layersCount * PAINT_IN_ONE_METR) / VOLUME_OF_CAN;
  return Math.ceil(result);
};

console.log(calculatePaintBoxes(18, 2));
