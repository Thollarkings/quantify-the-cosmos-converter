
import React from 'react';
import ConverterUnit from '@/components/ConverterUnit';
import {
  milesToKilometers,
  kilometersToMiles,
  centimetersToInches,
  inchesToCentimeters,
  feetToMeters,
  metersToFeet,
  yardsToMeters,
  metersToYards
} from '@/utils/conversionUtils';

export const MilesToKilometers: React.FC = () => {
  return (
    <ConverterUnit
      title="Miles to Kilometers"
      fromUnit="mi"
      toUnit="km"
      convertFunction={milesToKilometers}
      reverseConvertFunction={kilometersToMiles}
    />
  );
};

export const CentimetersToInches: React.FC = () => {
  return (
    <ConverterUnit
      title="Centimeters to Inches"
      fromUnit="cm"
      toUnit="in"
      convertFunction={centimetersToInches}
      reverseConvertFunction={inchesToCentimeters}
    />
  );
};

export const FeetToMeters: React.FC = () => {
  return (
    <ConverterUnit
      title="Feet to Meters"
      fromUnit="ft"
      toUnit="m"
      convertFunction={feetToMeters}
      reverseConvertFunction={metersToFeet}
    />
  );
};

export const YardsToMeters: React.FC = () => {
  return (
    <ConverterUnit
      title="Yards to Meters"
      fromUnit="yd"
      toUnit="m"
      convertFunction={yardsToMeters}
      reverseConvertFunction={metersToYards}
    />
  );
};
