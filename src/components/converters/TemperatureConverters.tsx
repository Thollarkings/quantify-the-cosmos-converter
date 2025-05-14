
import React from 'react';
import ConverterUnit from '@/components/ConverterUnit';
import { 
  celsiusToFahrenheit, 
  fahrenheitToCelsius,
  celsiusToKelvin,
  kelvinToCelsius
} from '@/utils/conversionUtils';

export const CelsiusToFahrenheit: React.FC = () => {
  return (
    <ConverterUnit
      title="Celsius to Fahrenheit"
      fromUnit="°C"
      toUnit="°F"
      convertFunction={celsiusToFahrenheit}
      reverseConvertFunction={fahrenheitToCelsius}
    />
  );
};

export const CelsiusToKelvin: React.FC = () => {
  return (
    <ConverterUnit
      title="Celsius to Kelvin"
      fromUnit="°C"
      toUnit="K"
      convertFunction={celsiusToKelvin}
      reverseConvertFunction={kelvinToCelsius}
    />
  );
};
