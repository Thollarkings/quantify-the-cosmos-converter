
import React from 'react';

// Import converter components
import { 
  MilesToKilometers, 
  CentimetersToInches, 
  FeetToMeters, 
  YardsToMeters, 
  InchesToCentimeters,
  KilometersToMiles,
  MetersToFeet
} from '@/components/converters/LengthConverters';

import { 
  LitersToGallons, 
  PintsToLiters, 
  CupsToMilliliters, 
  OuncesToMilliliters,
  GallonsToLiters,
  MillilitersToCups
} from '@/components/converters/VolumeConverters';

import { 
  CelsiusToFahrenheit, 
  CelsiusToKelvin,
  FahrenheitToCelsius,
  KelvinToCelsius
} from '@/components/converters/TemperatureConverters';

import { 
  SquareFeetToSquareMeters, 
  SquareMetersToAcres, 
  AcresToHectares,
  HectaresToAcres,
  SquareMetersToSquareFeet
} from '@/components/converters/AreaConverters';

import { 
  KilogramsToPounds, 
  PoundsToKilograms,
  GramsToOunces,
  OuncesToGrams
} from '@/components/converters/WeightConverters';

interface ConverterContentProps {
  selectedConversion: string;
}

const ConverterContent: React.FC<ConverterContentProps> = ({ selectedConversion }) => {
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
      return null;
  }
};

export default ConverterContent;
