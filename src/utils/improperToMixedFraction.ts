export type NumberFormats = {
  formatted: string;
  numeric: number;
};

export const improperToMixedFraction = (
  numerator: number,
  denominator: number
): NumberFormats => {
  if (denominator === 0) {
    throw new Error("Denominator cannot be zero.");
  }

  const fractionalNumber = numerator / denominator;
  const wholeNumber = Math.floor(fractionalNumber);

  const remainder = numerator % denominator;

  if (remainder === 0) {
    return { formatted: `${wholeNumber}`, numeric: fractionalNumber }; // whole number
  } else if (wholeNumber === 0) {
    return {
      formatted: `${remainder}/${denominator}`,
      numeric: fractionalNumber,
    }; // Already a proper fraction
  } else {
    return {
      formatted: `${wholeNumber} ${remainder}/${denominator}`,
      numeric: fractionalNumber,
    }; // Mixed number
  }
};
