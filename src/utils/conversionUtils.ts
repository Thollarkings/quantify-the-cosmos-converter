
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

export const fahrenheitToKelvin = (fahrenheit: number): number => {
  return ((fahrenheit - 32) * 5) / 9 + 273.15;
};

export const kelvinToFahrenheit = (kelvin: number): number => {
  return ((kelvin - 273.15) * 9) / 5 + 32;
};

export const rankineToFahrenheit = (rankine: number): number => {
  return rankine - 459.67;
};

export const fahrenheitToRankine = (fahrenheit: number): number => {
  return fahrenheit + 459.67;
};

export const delisleToCelsius = (delisle: number): number => {
  return 100 - (delisle * 2) / 3;
};

export const celsiusToDelisle = (celsius: number): number => {
  return (100 - celsius) * 1.5;
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

export const millimetersToInches = (millimeters: number): number => {
  return millimeters / 25.4;
};

export const inchesToMillimeters = (inches: number): number => {
  return inches * 25.4;
};

export const nauticalMilesToKilometers = (nauticalMiles: number): number => {
  return nauticalMiles * 1.852;
};

export const kilometersToNauticalMiles = (kilometers: number): number => {
  return kilometers / 1.852;
};

export const micrometersToMils = (micrometers: number): number => {
  return micrometers / 25.4;
};

export const milsToMicrometers = (mils: number): number => {
  return mils * 25.4;
};

export const fathomsToMeters = (fathoms: number): number => {
  return fathoms * 1.8288;
};

export const metersToFathoms = (meters: number): number => {
  return meters / 1.8288;
};

export const handsToInches = (hands: number): number => {
  return hands * 4;
};

export const inchesToHands = (inches: number): number => {
  return inches / 4;
};

export const astronomicalUnitsToLightYears = (au: number): number => {
  return au / 63241.1;
};

export const lightYearsToAstronomicalUnits = (lightYears: number): number => {
  return lightYears * 63241.1;
};

export const parsecsToLightYears = (parsecs: number): number => {
  return parsecs * 3.26156;
};

export const lightYearsToParsecs = (lightYears: number): number => {
  return lightYears / 3.26156;
};

export const footballFieldsToMeters = (fields: number): number => {
  return fields * 91.44; // Standard American football field length
};

export const metersToFootballFields = (meters: number): number => {
  return meters / 91.44;
};

// Weight Conversions
export const kilogramsToPounds = (kilograms: number): number => {
  return kilograms * 2.20462;
};

export const poundsToKilograms = (pounds: number): number => {
  return pounds / 2.20462;
};

export const gramsToOunces = (grams: number): number => {
  return grams * 0.035274;
};

export const ouncesToGrams = (ounces: number): number => {
  return ounces / 0.035274;
};

export const stoneToKilograms = (stone: number): number => {
  return stone * 6.35029;
};

export const kilogramsToStone = (kilograms: number): number => {
  return kilograms / 6.35029;
};

export const milligramsToGrams = (milligrams: number): number => {
  return milligrams / 1000;
};

export const gramsToMilligrams = (grams: number): number => {
  return grams * 1000;
};

export const cupsToGrams = (cups: number): number => {
  return cups * 236.588; // Approximation, varies by ingredient
};

export const gramsToCups = (grams: number): number => {
  return grams / 236.588;
};

export const tonsToMetricTonnes = (tons: number): number => {
  return tons * 0.907185;
};

export const metricTonnesToTons = (tonnes: number): number => {
  return tonnes / 0.907185;
};

export const caratsToGrams = (carats: number): number => {
  return carats * 0.2;
};

export const gramsToCarats = (grams: number): number => {
  return grams / 0.2;
};

export const troyOuncesToGrams = (troyOunces: number): number => {
  return troyOunces * 31.1035;
};

export const gramsToTroyOunces = (grams: number): number => {
  return grams / 31.1035;
};

export const grainsToGrams = (grains: number): number => {
  return grains * 0.06479891;
};

export const grainsToGrains = (grams: number): number => {
  return grams / 0.06479891;
};

export const slugsToKilograms = (slugs: number): number => {
  return slugs * 14.5939;
};

export const kilogramsToSlugs = (kilograms: number): number => {
  return kilograms / 14.5939;
};

export const elephantsToMetricTonnes = (elephants: number): number => {
  return elephants * 5; // Average elephant weight approximation
};

export const metricTonnesToElephants = (tonnes: number): number => {
  return tonnes / 5;
};

export const chineseJinToGrams = (jin: number): number => {
  return jin * 500; // Chinese jin = 500g
};

export const gramsToChineseJin = (grams: number): number => {
  return grams / 500;
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

export const millilitersToFluidOunces = (milliliters: number): number => {
  return milliliters / 29.5735;
};

export const fluidOuncesToMilliliters = (fluidOunces: number): number => {
  return fluidOunces * 29.5735;
};

export const teaspoonsToMilliliters = (teaspoons: number): number => {
  return teaspoons * 4.92892;
};

export const millilitersToTeaspoons = (milliliters: number): number => {
  return milliliters / 4.92892;
};

export const tablespoonsToMilliliters = (tablespoons: number): number => {
  return tablespoons * 14.7868;
};

export const millilitersToTablespoons = (milliliters: number): number => {
  return milliliters / 14.7868;
};

export const quartsToLiters = (quarts: number): number => {
  return quarts * 0.946353;
};

export const litersToQuarts = (liters: number): number => {
  return liters / 0.946353;
};

export const cubicMetersToCubicFeet = (cubicMeters: number): number => {
  return cubicMeters * 35.3147;
};

export const cubicFeetToCubicMeters = (cubicFeet: number): number => {
  return cubicFeet / 35.3147;
};

export const cubicCentimetersToCubicInches = (cubicCentimeters: number): number => {
  return cubicCentimeters * 0.0610237;
};

export const cubicInchesToCubicCentimeters = (cubicInches: number): number => {
  return cubicInches / 0.0610237;
};

export const barrelsToLiters = (barrels: number): number => {
  return barrels * 158.987;
};

export const litersToBarrels = (liters: number): number => {
  return liters / 158.987;
};

export const gallonsToCubicFeet = (gallons: number): number => {
  return gallons * 0.133681;
};

export const cubicFeetToGallons = (cubicFeet: number): number => {
  return cubicFeet / 0.133681;
};

export const hogsheadsToLiters = (hogsheads: number): number => {
  return hogsheads * 238.481;
};

export const litersToHogsheads = (liters: number): number => {
  return liters / 238.481;
};

export const gillsToMilliliters = (gills: number): number => {
  return gills * 118.294;
};

export const millilitersToGills = (milliliters: number): number => {
  return milliliters / 118.294;
};

export const swimmingPoolsToLiters = (pools: number): number => {
  return pools * 2500000; // Olympic size pool approximation
};

export const litersToSwimmingPools = (liters: number): number => {
  return liters / 2500000;
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

export const squareMilesToSquareKilometers = (squareMiles: number): number => {
  return squareMiles * 2.58999;
};

export const squareKilometersToSquareMiles = (squareKilometers: number): number => {
  return squareKilometers / 2.58999;
};

export const squareInchesToSquareCentimeters = (squareInches: number): number => {
  return squareInches * 6.4516;
};

export const squareCentimetersToSquareInches = (squareCentimeters: number): number => {
  return squareCentimeters / 6.4516;
};

export const squareYardsToSquareMeters = (squareYards: number): number => {
  return squareYards * 0.836127;
};

export const squareMetersToSquareYards = (squareMeters: number): number => {
  return squareMeters / 0.836127;
};

export const squareFeetToAcres = (squareFeet: number): number => {
  return squareFeet * 0.0000229568;
};

export const acresToSquareFeet = (acres: number): number => {
  return acres / 0.0000229568;
};

export const squareMillimetersToSquareInches = (squareMillimeters: number): number => {
  return squareMillimeters * 0.00155;
};

export const squareInchesToSquareMillimeters = (squareInches: number): number => {
  return squareInches / 0.00155;
};

export const circularMilsToSquareMillimeters = (circularMils: number): number => {
  return circularMils * 0.000506707;
};

export const squareMillimetersToCircularMils = (squareMillimeters: number): number => {
  return squareMillimeters / 0.000506707;
};

export const footballFieldsToAcres = (fields: number): number => {
  return fields * 1.32; // Standard American football field
};

export const acresToFootballFields = (acres: number): number => {
  return acres / 1.32;
};

export const barnsToSquareMeters = (barns: number): number => {
  return barns * 1e-28;
};

export const squareMetersToBarns = (squareMeters: number): number => {
  return squareMeters / 1e-28;
};

export const townshipsToSquareMiles = (townships: number): number => {
  return townships * 36; // US Public Land Survey System
};

export const squareMilesToTownships = (squareMiles: number): number => {
  return squareMiles / 36;
};

// Format result with appropriate decimal places
export const formatResult = (value: number, decimals: number = 2): string => {
  return value.toFixed(decimals);
};
