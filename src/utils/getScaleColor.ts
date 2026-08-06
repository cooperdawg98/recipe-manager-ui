export function getScaleColor(scale: number) {
  let ingredientColor;
  switch (scale) {
    case 0.25:
      ingredientColor = "text-orange-300";
      break;
    case 0.5:
      ingredientColor = "text-orange-400";
      break;
    case 2:
      ingredientColor = "text-orange-600";
      break;
    case 4:
      ingredientColor = "text-orange-700";
      break;
    default:
      ingredientColor = "";
      break;
  }

  return ingredientColor;
}
