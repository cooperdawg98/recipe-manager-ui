import { floatToFraction } from "./floatToFraction";

export type NumberFormats = {
  formatted: string;
  numeric: number;
};

export const improperToMixedFraction = (
  numerator: number,
  denominator: number,
  scale: number = 1
): NumberFormats => {
  if (denominator === 0) {
    throw new Error("Denominator cannot be zero.");
  }
  if (scale !== 1) {
    const scaledFraction = floatToFraction((numerator / denominator) * scale);
    numerator = scaledFraction.numerator;
    denominator = scaledFraction.denominator;
  }

  const fractionalNumber = numerator / denominator;
  const wholeNumber = Math.floor(fractionalNumber);

  const remainder = numerator % denominator;

  if (remainder === 0) {
    console.log("whole number");
    return { formatted: `${wholeNumber}`, numeric: fractionalNumber }; // whole number
  } else if (wholeNumber === 0) {
    console.log("proper fraction");
    return {
      formatted: `${remainder}/${denominator}`,
      numeric: fractionalNumber,
    }; // Already a proper fraction
  } else {
    console.log("mixed number");
    return {
      formatted: `${wholeNumber} ${remainder}/${denominator}`,
      numeric: fractionalNumber,
    }; // Mixed number
  }
};
