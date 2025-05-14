
export interface ConversionOption {
  name: string;
  value: string;
}

export interface ConversionCategories {
  [key: string]: ConversionOption[];
}

const conversionData: ConversionCategories = {
  'Length and Distance': [
    { name: 'Miles to Kilometers', value: 'MilesToKilometers' },
    { name: 'Kilometers to Miles', value: 'KilometersToMiles' },
    { name: 'Centimeters to Inches', value: 'CentimetersToInches' },
    { name: 'Inches to Centimeters', value: 'InchesToCentimeters' },
    { name: 'Feet to Meters', value: 'FeetToMeters' },
    { name: 'Meters to Feet', value: 'MetersToFeet' },
    { name: 'Yards to Meters', value: 'YardsToMeters' },
  ],
  'Volume': [
    { name: 'Liters to Gallons', value: 'LitersToGallons' },
    { name: 'Gallons to Liters', value: 'GallonsToLiters' },
    { name: 'Pints to Liters', value: 'PintsToLiters' },
    { name: 'Cups to Milliliters', value: 'CupsToMilliliters' },
    { name: 'Milliliters to Cups', value: 'MillilitersToCups' },
    { name: 'Ounces to Milliliters', value: 'OuncesToMilliliters' },
  ],
  'Temperature': [
    { name: 'Celsius to Fahrenheit', value: 'CelsiusToFahrenheit' },
    { name: 'Fahrenheit to Celsius', value: 'FahrenheitToCelsius' },
    { name: 'Celsius to Kelvin', value: 'CelsiusToKelvin' },
    { name: 'Kelvin to Celsius', value: 'KelvinToCelsius' },
  ],
  'Area': [
    { name: 'ft² to m²', value: 'SquareFeetToSquareMeters' },
    { name: 'm² to ft²', value: 'SquareMetersToSquareFeet' },
    { name: 'm² To Acres', value: 'SquareMetersToAcres' },
    { name: 'Acres To Hectares', value: 'AcresToHectares' },
    { name: 'Hectares to Acres', value: 'HectaresToAcres' },
  ],
  'Weight': [
    { name: 'Kilograms to Pounds', value: 'KilogramsToPounds' },
    { name: 'Pounds to Kilograms', value: 'PoundsToKilograms' },
    { name: 'Grams to Ounces', value: 'GramsToOunces' },
    { name: 'Ounces to Grams', value: 'OuncesToGrams' },
  ],
};

export default conversionData;
