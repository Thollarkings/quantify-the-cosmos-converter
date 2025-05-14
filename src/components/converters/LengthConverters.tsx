
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

export const KilometersToMiles: React.FC = () => {
  return (
    <ConverterUnit
      title="Kilometers to Miles"
      fromUnit="km"
      toUnit="mi"
      convertFunction={kilometersToMiles}
      reverseConvertFunction={milesToKilometers}
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

export const InchesToCentimeters: React.FC = () => {
  return (
    <ConverterUnit
      title="Inches to Centimeters"
      fromUnit="in"
      toUnit="cm"
      convertFunction={inchesToCentimeters}
      reverseConvertFunction={centimetersToInches}
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

export const MetersToFeet: React.FC = () => {
  return (
    <ConverterUnit
      title="Meters to Feet"
      fromUnit="m"
      toUnit="ft"
      convertFunction={metersToFeet}
      reverseConvertFunction={feetToMeters}
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
