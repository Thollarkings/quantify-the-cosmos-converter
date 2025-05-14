
import React, { useState } from 'react';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Import converter components
import { MilesToKilometers, CentimetersToInches, FeetToMeters, YardsToMeters, InchesToCentimeters, KilometersToMiles, MetersToFeet } from '@/components/converters/LengthConverters';
import { LitersToGallons, PintsToLiters, CupsToMilliliters, OuncesToMilliliters, GallonsToLiters, MillilitersToCups } from '@/components/converters/VolumeConverters';
import { CelsiusToFahrenheit, CelsiusToKelvin, FahrenheitToCelsius, KelvinToCelsius } from '@/components/converters/TemperatureConverters';
import { SquareFeetToSquareMeters, SquareMetersToAcres, AcresToHectares, HectaresToAcres, SquareMetersToSquareFeet } from '@/components/converters/AreaConverters';
import { KilogramsToPounds, PoundsToKilograms, GramsToOunces, OuncesToGrams } from '@/components/converters/WeightConverters';

const Index = () => {
  const [selectedConversion, setSelectedConversion] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [showInstructions, setShowInstructions] = useState(true);

  const conversions = {
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

  const renderComponent = () => {
    setShowInstructions(selectedConversion === '');
    
    switch (selectedConversion) {
      case 'KilogramsToPounds':
        return <KilogramsToPounds />;
      case 'PoundsToKilograms':
        return <PoundsToKilograms />;
      case 'GramsToOunces':
        return <GramsToOunces />;
      case 'OuncesToGrams':
        return <OuncesToGrams />;
      case 'MilesToKilometers':
        return <MilesToKilometers />;
      case 'KilometersToMiles':
        return <KilometersToMiles />;
      case 'CentimetersToInches':
        return <CentimetersToInches />;
      case 'InchesToCentimeters':
        return <InchesToCentimeters />;
      case 'FeetToMeters':
        return <FeetToMeters />;
      case 'MetersToFeet':
        return <MetersToFeet />;
      case 'YardsToMeters':
        return <YardsToMeters />;
      case 'CelsiusToFahrenheit':
        return <CelsiusToFahrenheit />;
      case 'FahrenheitToCelsius':
        return <FahrenheitToCelsius />;
      case 'CelsiusToKelvin':
        return <CelsiusToKelvin />;
      case 'KelvinToCelsius':
        return <KelvinToCelsius />;
      case 'LitersToGallons':
        return <LitersToGallons />;
      case 'GallonsToLiters':
        return <GallonsToLiters />;
      case 'PintsToLiters':
        return <PintsToLiters />;
      case 'CupsToMilliliters':
        return <CupsToMilliliters />;
      case 'MillilitersToCups':
        return <MillilitersToCups />;
      case 'OuncesToMilliliters':
        return <OuncesToMilliliters />;
      case 'SquareFeetToSquareMeters':
        return <SquareFeetToSquareMeters />;
      case 'SquareMetersToSquareFeet':
        return <SquareMetersToSquareFeet />;
      case 'SquareMetersToAcres':
        return <SquareMetersToAcres />;
      case 'AcresToHectares':
        return <AcresToHectares />;
      case 'HectaresToAcres':
        return <HectaresToAcres />;
      default:
        return (
          <div className="p-8 text-center">
            <p className="text-xl text-white/80">Please select a conversion type from the menu.</p>
            <div className="mt-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-converter-accent hover:bg-white/10 animate-pulsate"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        );
    }
  };

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="min-h-screen bg-converter-background p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl bg-gradient-converter rounded-xl shadow-2xl overflow-hidden hover:shadow-[0_20px_30px_rgba(0,0,0,0.6)] transition-all duration-300">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Unit Converter</h1>
            {!showInstructions && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-converter-accent hover:bg-white/10 animate-pulsate"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            )}
          </div>

          {menuOpen && (
            <div className="mb-6 rounded-lg overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm">
              {Object.keys(conversions).map((category) => (
                <div key={category} className="border-b border-white/10 last:border-0">
                  <button
                    onClick={() => toggleCategory(category)}
                    className="w-full flex justify-between items-center p-3 text-white hover:bg-white/10 transition-all duration-200"
                    aria-expanded={openCategory === category}
                  >
                    <span className="font-medium">{category}</span>
                    {openCategory === category ? (
                      <ChevronDown size={20} />
                    ) : (
                      <ChevronRight size={20} />
                    )}
                  </button>
                  
                  {openCategory === category && (
                    <div className="bg-black/10 border-t border-white/10">
                      {conversions[category].map((conversion) => (
                        <button
                          key={conversion.value}
                          className="w-full text-left p-2.5 pl-6 text-black bg-white/90 hover:bg-converter-menuItemHover hover:text-white transition-colors mb-0.5"
                          onClick={() => {
                            setSelectedConversion(conversion.value);
                            setMenuOpen(false);
                          }}
                        >
                          {conversion.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="py-4">
            {renderComponent()}
          </div>
        </div>
        
        <footer className="p-4 text-center text-white/70 bg-black/20 border-t border-white/10">
          <h5>&copy; Thollarkings {new Date().getFullYear()}</h5>
        </footer>
      </div>
    </div>
  );
};

export default Index;
