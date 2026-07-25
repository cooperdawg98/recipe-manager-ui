export const IrregularPluralUnits = [
  "g",
  "kg",
  "tbsp",
  "tsp",
  "oz",
  "fl oz",
  "pt",
  "qt",
  "gal",
  "lb",
  "ml",
  "l",
];

export const canUnitBePlural = (unit: string) => {
  if (IrregularPluralUnits.includes(unit)) {
    return false;
  } else {
    return true;
  }
};
