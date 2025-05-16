
import React from 'react';
import ConverterUnit from '@/components/ConverterUnit';
import {
  squareFeetToSquareMeters,
  squareMetersToSquareFeet,
  squareMetersToAcres,
  acresToSquareMeters,
  acresToHectares,
  hectaresToAcres
} from '@/utils/conversionUtils';

export const SquareFeetToSquareMeters: React.FC = () => {
  return (
    <ConverterUnit
      title="Square Feet to Square Meters"
      fromUnit="ft²"
      toUnit="m²"
      convertFunction={squareFeetToSquareMeters}
      reverseConvertFunction={squareMetersToSquareFeet}
    />
  );
};

export const SquareMetersToSquareFeet: React.FC = () => {
  return (
    <ConverterUnit
      title="Square Meters to Square Feet"
      fromUnit="m²"
      toUnit="ft²"
      convertFunction={squareMetersToSquareFeet}
      reverseConvertFunction={squareFeetToSquareMeters}
    />
  );
};

export const SquareMetersToAcres: React.FC = () => {
  return (
    <ConverterUnit
      title="Square Meters to Acres"
      fromUnit="m²"
      toUnit="acres"
      convertFunction={squareMetersToAcres}
      reverseConvertFunction={acresToSquareMeters}
    />
  );
};

export const AcresToHectares: React.FC = () => {
  return (
    <ConverterUnit
      title="Acres to Hectares"
      fromUnit="acres"
      toUnit="ha"
      convertFunction={acresToHectares}
      reverseConvertFunction={hectaresToAcres}
    />
  );
};

export const HectaresToAcres: React.FC = () => {
  return (
    <ConverterUnit
      title="Hectares to Acres"
      fromUnit="ha"
      toUnit="acres"
      convertFunction={hectaresToAcres}
      reverseConvertFunction={acresToHectares}
    />
  );
};
