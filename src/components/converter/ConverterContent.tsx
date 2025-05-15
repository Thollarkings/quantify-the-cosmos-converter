import React, { lazy, Suspense } from 'react';
import { Loader2 } from 'lucide-react';

// Dynamic imports for converter components
const LengthConverter = lazy(() => import('@/components/converters/dynamic/LengthConverter'));
const TemperatureConverter = lazy(() => import('@/components/converters/dynamic/TemperatureConverter'));
const VolumeConverter = lazy(() => import('@/components/converters/dynamic/VolumeConverter'));
const WeightConverter = lazy(() => import('@/components/converters/dynamic/WeightConverter'));
const AreaConverter = lazy(() => import('@/components/converters/dynamic/AreaConverter'));

// Existing import fallbacks
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

// Loading component 
const LoadingFallback = () => (
  <div className="flex flex-col items-center justify-center p-10">
    <Loader2 className="h-16 w-16 animate-spin text-white" />
    <p className="mt-4 text-white">Loading converter...</p>
  </div>
);

const ConverterContent: React.FC<ConverterContentProps> = ({ selectedConversion }) => {
  // Helper function to determine converter type from value
  const getConverterType = (value: string): string => {
    if (value.includes('ToSquare') || value.includes('Square') || value.includes('Acres') || value.includes('Hectares')) return 'area';
    if (value.includes('Celsius') || value.includes('Fahrenheit') || value.includes('Kelvin') || value.includes('Rankine')) return 'temperature';
    if (value.includes('Liters') || value.includes('Gallons') || value.includes('Cubic') || value.includes('Milliliters')) return 'volume';
    if (value.includes('Kilograms') || value.includes('Pounds') || value.includes('Grams') || value.includes('Ounces') || value.includes('Weight')) return 'weight';
    return 'length'; // Default
  };

  // Use dynamic converter if available, fallback to specific component
  if (selectedConversion) {
    const converterType = getConverterType(selectedConversion);
    
    return (
      <Suspense fallback={<LoadingFallback />}>
        {converterType === 'length' && <LengthConverter conversion={selectedConversion} />}
        {converterType === 'volume' && <VolumeConverter conversion={selectedConversion} />}
        {converterType === 'temperature' && <TemperatureConverter conversion={selectedConversion} />}
        {converterType === 'area' && <AreaConverter conversion={selectedConversion} />}
        {converterType === 'weight' && <WeightConverter conversion={selectedConversion} />}
      </Suspense>
    );
  }

  // If there's no conversion selected, or we have an error, return null
  return null;
};

export default ConverterContent;
