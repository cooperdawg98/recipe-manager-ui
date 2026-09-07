export function getScaleColor(scale: number) {
  let ingredientColor;
  switch (scale) {
    case 0.25:
      ingredientColor = "text-shadow-md/50 text-shadow-orange-300";
      break;
    case 0.5:
      ingredientColor = "text-shadow-md/50 text-shadow-orange-400";
      break;
    case 2:
      ingredientColor = "text-shadow-md/50 text-shadow-orange-600";
      break;
    case 4:
      ingredientColor = "text-shadow-md/50 text-shadow-orange-700";
      break;
    default:
      ingredientColor = "";
      break;
  }

  return ingredientColor;
}
