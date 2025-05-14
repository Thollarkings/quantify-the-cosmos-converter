
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

export const FahrenheitToCelsius: React.FC = () => {
  return (
    <ConverterUnit
      title="Fahrenheit to Celsius"
      fromUnit="°F"
      toUnit="°C"
      convertFunction={fahrenheitToCelsius}
      reverseConvertFunction={celsiusToFahrenheit}
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

export const KelvinToCelsius: React.FC = () => {
  return (
    <ConverterUnit
      title="Kelvin to Celsius"
      fromUnit="K"
      toUnit="°C"
      convertFunction={kelvinToCelsius}
      reverseConvertFunction={celsiusToKelvin}
    />
  );
};
