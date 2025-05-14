
import React from 'react';
import ConverterUnit from '@/components/ConverterUnit';
import {
  kilogramsToPounds,
  poundsToKilograms,
  gramsToOunces,
  ouncesToGrams
} from '@/utils/conversionUtils';

export const KilogramsToPounds: React.FC = () => {
  return (
    <ConverterUnit
      title="Kilograms to Pounds"
      fromUnit="kg"
      toUnit="lb"
      convertFunction={kilogramsToPounds}
      reverseConvertFunction={poundsToKilograms}
    />
  );
};

export const PoundsToKilograms: React.FC = () => {
  return (
    <ConverterUnit
      title="Pounds to Kilograms"
      fromUnit="lb"
      toUnit="kg"
      convertFunction={poundsToKilograms}
      reverseConvertFunction={kilogramsToPounds}
    />
  );
};

export const GramsToOunces: React.FC = () => {
  return (
    <ConverterUnit
      title="Grams to Ounces"
      fromUnit="g"
      toUnit="oz"
      convertFunction={gramsToOunces}
      reverseConvertFunction={ouncesToGrams}
    />
  );
};

export const OuncesToGrams: React.FC = () => {
  return (
    <ConverterUnit
      title="Ounces to Grams"
      fromUnit="oz"
      toUnit="g"
      convertFunction={ouncesToGrams}
      reverseConvertFunction={gramsToOunces}
    />
  );
};
