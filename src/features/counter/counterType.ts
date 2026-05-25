
const validCounterTypes = ["default", "custom"] as const;
export type counterType = (typeof validCounterTypes)[number];

// Type guard
export function isCounterType(value: string): value is counterType {
  return validCounterTypes.includes(value as counterType);
}
