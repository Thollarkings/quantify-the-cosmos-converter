
export interface ConversionOption {
  name: string;
  value: string;
  description?: string;
  category?: "everyday" | "specialized" | "scientific" | "fun";
}

export interface ConversionSubcategory {
  name: string;
  options: ConversionOption[];
}

export interface ConversionCategories {
  [key: string]: ConversionSubcategory[];
}

const conversionData: ConversionCategories = {
  'Length and Distance': [
    {
      name: 'Everyday & High-Demand',
      options: [
        { name: 'Inches to Centimeters', value: 'InchesToCentimeters', description: 'Height, screens, objects', category: 'everyday' },
        { name: 'Feet to Meters', value: 'FeetToMeters', description: 'Height, room dimensions', category: 'everyday' },
        { name: 'Miles to Kilometers', value: 'MilesToKilometers', description: 'Driving/running distances', category: 'everyday' },
        { name: 'Yards to Meters', value: 'YardsToMeters', description: 'Fabric, sports fields', category: 'everyday' },
        { name: 'Millimeters to Inches', value: 'MillimetersToInches', description: 'DIY, small measurements', category: 'everyday' },
        { name: 'Centimeters to Inches', value: 'CentimetersToInches', description: 'International products', category: 'everyday' },
      ]
    },
    {
      name: 'Science & Engineering',
      options: [
        { name: 'Nautical Miles to Kilometers', value: 'NauticalMilesToKilometers', description: 'Aviation/shipping', category: 'specialized' },
        { name: 'Micrometers to Mils', value: 'MicrometersToMils', description: 'Engineering, PCB design', category: 'scientific' },
        { name: 'Fathoms to Meters', value: 'FathomsToMeters', description: 'Marine depth, diving', category: 'specialized' },
        { name: 'Hands to Inches', value: 'HandsToInches', description: 'Horse height', category: 'specialized' },
        { name: 'Astronomical Units to Light-Years', value: 'AstronomicalUnitsToLightYears', description: 'Astronomy', category: 'scientific' },
        { name: 'Parsecs to Light-Years', value: 'ParsecsToLightYears', description: 'Space science', category: 'scientific' },
      ]
    },
    {
      name: 'Fun Comparisons',
      options: [
        { name: 'Football Fields to Meters', value: 'FootballFieldsToMeters', description: 'Visualizing large distances', category: 'fun' },
      ]
    },
  ],
  'Volume': [
    {
      name: 'Everyday & High-Demand',
      options: [
        { name: 'Milliliters to Fluid Ounces', value: 'MillilitersToFluidOunces', description: 'Beverages, cooking, medicine', category: 'everyday' },
        { name: 'Liters to Gallons', value: 'LitersToGallons', description: 'Fuel, liquid storage, large containers', category: 'everyday' },
        { name: 'Cups to Milliliters', value: 'CupsToMilliliters', description: 'Cooking & baking recipes', category: 'everyday' },
        { name: 'Teaspoons to Milliliters', value: 'TeaspoonsToMilliliters', description: 'Medicine, small recipes', category: 'everyday' },
        { name: 'Tablespoons to Milliliters', value: 'TablespoonsToMilliliters', description: 'Cooking, baking', category: 'everyday' },
        { name: 'Fluid Ounces to Milliliters', value: 'OuncesToMilliliters', description: 'Beverage serving sizes', category: 'everyday' },
        { name: 'Pints to Liters', value: 'PintsToLiters', description: 'Beer, milk, UK/US differences', category: 'everyday' },
        { name: 'Quarts to Liters', value: 'QuartsToLiters', description: 'Liquids, car oil, US measurements', category: 'everyday' },
      ]
    },
    {
      name: 'Science & Engineering',
      options: [
        { name: 'Cubic Meters to Cubic Feet', value: 'CubicMetersToCubicFeet', description: 'Construction, shipping volume', category: 'specialized' },
        { name: 'Cubic Centimeters to Cubic Inches', value: 'CubicCentimetersToCubicInches', description: 'Engine displacement', category: 'specialized' },
        { name: 'Barrels to Liters', value: 'BarrelsToLiters', description: 'Oil industry, brewing', category: 'specialized' },
        { name: 'Gallons to Cubic Feet', value: 'GallonsToCubicFeet', description: 'Aquariums, hydroponics', category: 'specialized' },
      ]
    },
    {
      name: 'Historical & Obscure',
      options: [
        { name: 'Hogsheads to Liters', value: 'HogsheadsToLiters', description: 'Old whiskey/wine barrels', category: 'specialized' },
        { name: 'Gills to Milliliters', value: 'GillsToMilliliters', description: 'Old British measurement', category: 'specialized' },
      ]
    },
    {
      name: 'Fun Comparisons',
      options: [
        { name: 'Swimming Pools to Liters', value: 'SwimmingPoolsToLiters', description: 'Visualizing large volumes', category: 'fun' },
      ]
    },
  ],
  'Temperature': [
    {
      name: 'Everyday Use',
      options: [
        { name: 'Celsius to Fahrenheit', value: 'CelsiusToFahrenheit', description: 'Weather, cooking, body temp', category: 'everyday' },
        { name: 'Fahrenheit to Celsius', value: 'FahrenheitToCelsius', description: 'International temperature comparison', category: 'everyday' },
        { name: 'Celsius to Kelvin', value: 'CelsiusToKelvin', description: 'Science classes, basic chemistry', category: 'everyday' },
      ]
    },
    {
      name: 'Science & Engineering',
      options: [
        { name: 'Kelvin to Celsius', value: 'KelvinToCelsius', description: 'Lab work, physics calculations', category: 'scientific' },
        { name: 'Fahrenheit to Kelvin', value: 'FahrenheitToKelvin', description: 'Engineering applications', category: 'scientific' },
        { name: 'Kelvin to Fahrenheit', value: 'KelvinToFahrenheit', description: 'Technical reports', category: 'scientific' },
      ]
    },
    {
      name: 'Historical Scales',
      options: [
        { name: 'Rankine to Fahrenheit', value: 'RankineToFahrenheit', description: 'Thermodynamics, engineering', category: 'scientific' },
        { name: 'Delisle to Celsius', value: 'DelisleToCelsius', description: 'Historical Russian scale', category: 'scientific' },
      ]
    },
  ],
  'Area': [
    {
      name: 'Everyday & High-Demand',
      options: [
        { name: 'Square Feet to Square Meters', value: 'SquareFeetToSquareMeters', description: 'Real estate, room sizes', category: 'everyday' },
        { name: 'Square Meters to Square Feet', value: 'SquareMetersToSquareFeet', description: 'International property comparison', category: 'everyday' },
        { name: 'Acres to Hectares', value: 'AcresToHectares', description: 'Land measurement, farming', category: 'everyday' },
        { name: 'Square Miles to Square Kilometers', value: 'SquareMilesToSquareKilometers', description: 'City/region sizes', category: 'everyday' },
        { name: 'Square Inches to Square Centimeters', value: 'SquareInchesToSquareCentimeters', description: 'Small projects, crafts', category: 'everyday' },
      ]
    },
    {
      name: 'Construction & Home',
      options: [
        { name: 'Square Yards to Square Meters', value: 'SquareYardsToSquareMeters', description: 'Carpeting, flooring', category: 'everyday' },
        { name: 'Square Feet to Acres', value: 'SquareFeetToAcres', description: 'Lot sizes, landscaping', category: 'everyday' },
      ]
    },
    {
      name: 'Agriculture & Land',
      options: [
        { name: 'Hectares to Acres', value: 'HectaresToAcres', description: 'International land comparison', category: 'specialized' },
        { name: 'Square Kilometers to Square Miles', value: 'SquareKilometersToSquareMiles', description: 'Country sizes', category: 'specialized' },
      ]
    },
    {
      name: 'Technical & Niche',
      options: [
        { name: 'Square Millimeters to Square Inches', value: 'SquareMillimetersToSquareInches', description: 'Engineering drawings', category: 'specialized' },
        { name: 'Circular Mils to Square Millimeters', value: 'CircularMilsToSquareMillimeters', description: 'Wire gauge sizing', category: 'scientific' },
        { name: 'Football Fields to Acres', value: 'FootballFieldsToAcres', description: 'Fun comparison for land area', category: 'fun' },
        { name: 'Barns to Square Meters', value: 'BarnsToSquareMeters', description: 'Nuclear physics - smallest unit!', category: 'scientific' },
        { name: 'Townships to Square Miles', value: 'TownshipsToSquareMiles', description: 'US surveying term', category: 'specialized' },
      ]
    },
  ],
  'Weight': [
    {
      name: 'Everyday Use',
      options: [
        { name: 'Pounds to Kilograms', value: 'PoundsToKilograms', description: 'Body weight, groceries, gym', category: 'everyday' },
        { name: 'Ounces to Grams', value: 'OuncesToGrams', description: 'Cooking, small packages, postal', category: 'everyday' },
        { name: 'Stone to Kilograms', value: 'StoneToKilograms', description: 'UK/Ireland body weight', category: 'everyday' },
        { name: 'Chinese Jin to Grams', value: 'ChineseJinToGrams', description: 'Regional Asian weight (500g)', category: 'everyday' },
      ]
    },
    {
      name: 'Cooking & Nutrition',
      options: [
        { name: 'Milligrams to Grams', value: 'MilligramsToGrams', description: 'Medicine, supplements', category: 'everyday' },
        { name: 'Cups to Grams', value: 'CupsToGrams', description: 'Flour, sugar, butter', category: 'everyday' },
      ]
    },
    {
      name: 'Industrial & Specialized',
      options: [
        { name: 'Tons to Metric Tonnes', value: 'TonsToMetricTonnes', description: 'Shipping, vehicles', category: 'specialized' },
      ]
    },
    {
      name: 'Jewelry & Precious',
      options: [
        { name: 'Carats to Grams', value: 'CaratsToGrams', description: 'Diamonds, jewelry', category: 'specialized' },
        { name: 'Troy Ounces to Grams', value: 'TroyOuncesToGrams', description: 'Gold, silver, precious metals', category: 'specialized' },
      ]
    },
    {
      name: 'Niche & Educational',
      options: [
        { name: 'Grains to Grams', value: 'GrainsToGrams', description: 'Ammunition, archery', category: 'specialized' },
        { name: 'Slugs to Kilograms', value: 'SlugsToKilograms', description: 'Physics/engineering', category: 'scientific' },
        { name: 'Elephants to Metric Tonnes', value: 'ElephantsToMetricTonnes', description: 'Fun comparison (≈ 5 tonnes each)', category: 'fun' },
      ]
    },
  ],
};

export default conversionData;
