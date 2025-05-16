
import React from 'react';
import ConverterUnit from '@/components/ConverterUnit';
import * as conversionUtils from '@/utils/conversionUtils';

interface TemperatureConverterProps {
  conversion: string;
}

const TemperatureConverter: React.FC<TemperatureConverterProps> = ({ conversion }) => {
  // Map of conversion types to functions and units
  const conversions: Record<string, { 
    fromUnit: string; 
    toUnit: string; 
    convert: (value: number) => number;
    reverse: (value: number) => number;
  }> = {
    'CelsiusToFahrenheit': {
      fromUnit: '°C',
      toUnit: '°F',
      convert: conversionUtils.celsiusToFahrenheit,
      reverse: conversionUtils.fahrenheitToCelsius
    },
    'FahrenheitToCelsius': {
      fromUnit: '°F',
      toUnit: '°C',
      convert: conversionUtils.fahrenheitToCelsius,
      reverse: conversionUtils.celsiusToFahrenheit
    },
    'CelsiusToKelvin': {
      fromUnit: '°C',
      toUnit: 'K',
      convert: conversionUtils.celsiusToKelvin,
      reverse: conversionUtils.kelvinToCelsius
    },
    'KelvinToCelsius': {
      fromUnit: 'K',
      toUnit: '°C',
      convert: conversionUtils.kelvinToCelsius,
      reverse: conversionUtils.celsiusToKelvin
    },
    'FahrenheitToKelvin': {
      fromUnit: '°F',
      toUnit: 'K',
      convert: conversionUtils.fahrenheitToKelvin,
      reverse: conversionUtils.kelvinToFahrenheit
    },
    'KelvinToFahrenheit': {
      fromUnit: 'K',
      toUnit: '°F',
      convert: conversionUtils.kelvinToFahrenheit,
      reverse: conversionUtils.fahrenheitToKelvin
    },
    'RankineToFahrenheit': {
      fromUnit: '°R',
      toUnit: '°F',
      convert: conversionUtils.rankineToFahrenheit,
      reverse: conversionUtils.fahrenheitToRankine
    },
    'DelisleToCelsius': {
      fromUnit: '°De',
      toUnit: '°C',
      convert: conversionUtils.delisleToCelsius,
      reverse: conversionUtils.celsiusToDelisle
    }
  };

  const selectedConversion = conversions[conversion];
  
  if (!selectedConversion) {
    return (
      <div className="text-center p-4 text-white">
        <p>Conversion not found. Please select another option.</p>
      </div>
    );
  }

  const { fromUnit, toUnit, convert, reverse } = selectedConversion;

  return (
    <ConverterUnit
      title={`${fromUnit} to ${toUnit}`}
      fromUnit={fromUnit}
      toUnit={toUnit}
      convertFunction={convert}
      reverseConvertFunction={reverse}
    />
  );
};

export default TemperatureConverter;
