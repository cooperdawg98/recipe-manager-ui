export function floatToFraction(floatNumber: number) {
  if (Number.isInteger(floatNumber)) {
    return { numerator: floatNumber, denominator: 1 };
  }

  const decimalPlaces = floatNumber.toString().split(".")[1].length;

  const denominator = Math.pow(10, decimalPlaces);
  const numerator = Math.round(floatNumber * denominator);

  const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);

  const commonDivisor = Math.abs(gcd(numerator, denominator));

  return {
    numerator: numerator / commonDivisor,
    denominator: denominator / commonDivisor,
  };
}
