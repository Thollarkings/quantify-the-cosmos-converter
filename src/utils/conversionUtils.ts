
// Temperature Conversions
export const celsiusToFahrenheit = (celsius: number): number => {
  return (celsius * 9) / 5 + 32;
};

export const fahrenheitToCelsius = (fahrenheit: number): number => {
  return ((fahrenheit - 32) * 5) / 9;
};

export const celsiusToKelvin = (celsius: number): number => {
  return celsius + 273.15;
};

export const kelvinToCelsius = (kelvin: number): number => {
  return kelvin - 273.15;
};

// Length Conversions
export const milesToKilometers = (miles: number): number => {
  return miles * 1.60934;
};

export const kilometersToMiles = (kilometers: number): number => {
  return kilometers / 1.60934;
};

export const centimetersToInches = (centimeters: number): number => {
  return centimeters / 2.54;
};

export const inchesToCentimeters = (inches: number): number => {
  return inches * 2.54;
};

export const feetToMeters = (feet: number): number => {
  return feet * 0.3048;
};

export const metersToFeet = (meters: number): number => {
  return meters / 0.3048;
};

export const yardsToMeters = (yards: number): number => {
  return yards * 0.9144;
};

export const metersToYards = (meters: number): number => {
  return meters / 0.9144;
};

// Weight Conversions
export const kilogramsToPounds = (kilograms: number): number => {
  return kilograms * 2.20462;
};

export const poundsToKilograms = (pounds: number): number => {
  return pounds / 2.20462;
};

// Volume Conversions
export const litersToGallons = (liters: number): number => {
  return liters * 0.264172;
};

export const gallonsToLiters = (gallons: number): number => {
  return gallons / 0.264172;
};

export const pintsToLiters = (pints: number): number => {
  return pints * 0.473176;
};

export const litersToPints = (liters: number): number => {
  return liters / 0.473176;
};

export const cupsToMilliliters = (cups: number): number => {
  return cups * 236.588;
};

export const millilitersToCups = (milliliters: number): number => {
  return milliliters / 236.588;
};

export const ouncesToMilliliters = (ounces: number): number => {
  return ounces * 29.5735;
};

export const millilitersToOunces = (milliliters: number): number => {
  return milliliters / 29.5735;
};

// Area Conversions
export const squareFeetToSquareMeters = (squareFeet: number): number => {
  return squareFeet * 0.092903;
};

export const squareMetersToSquareFeet = (squareMeters: number): number => {
  return squareMeters / 0.092903;
};

export const squareMetersToAcres = (squareMeters: number): number => {
  return squareMeters * 0.000247105;
};

export const acresToSquareMeters = (acres: number): number => {
  return acres / 0.000247105;
};

export const acresToHectares = (acres: number): number => {
  return acres * 0.404686;
};

export const hectaresToAcres = (hectares: number): number => {
  return hectares / 0.404686;
};

// Format result with appropriate decimal places
export const formatResult = (value: number, decimals: number = 2): string => {
  return value.toFixed(decimals);
};
