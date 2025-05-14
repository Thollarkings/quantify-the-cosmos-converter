
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
