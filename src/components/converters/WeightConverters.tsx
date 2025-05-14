
import React from 'react';
import ConverterUnit from '@/components/ConverterUnit';
import {
  kilogramsToPounds,
  poundsToKilograms
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
