
import React from 'react';
import ConverterUnit from '@/components/ConverterUnit';
import * as conversionUtils from '@/utils/conversionUtils';

interface LengthConverterProps {
  conversion: string;
}

const LengthConverter: React.FC<LengthConverterProps> = ({ conversion }) => {
  // Map of conversion types to functions and units
  const conversions: Record<string, { 
    fromUnit: string; 
    toUnit: string; 
    convert: (value: number) => number;
    reverse: (value: number) => number;
  }> = {
    'MilesToKilometers': {
      fromUnit: 'mi',
      toUnit: 'km',
      convert: conversionUtils.milesToKilometers,
      reverse: conversionUtils.kilometersToMiles
    },
    'InchesToCentimeters': {
      fromUnit: 'in',
      toUnit: 'cm',
      convert: conversionUtils.inchesToCentimeters,
      reverse: conversionUtils.centimetersToInches
    },
    'FeetToMeters': {
      fromUnit: 'ft',
      toUnit: 'm',
      convert: conversionUtils.feetToMeters,
      reverse: conversionUtils.metersToFeet
    },
    'YardsToMeters': {
      fromUnit: 'yd',
      toUnit: 'm',
      convert: conversionUtils.yardsToMeters,
      reverse: conversionUtils.metersToYards
    },
    'MillimetersToInches': {
      fromUnit: 'mm',
      toUnit: 'in',
      convert: conversionUtils.millimetersToInches,
      reverse: conversionUtils.inchesToMillimeters
    },
    'CentimetersToInches': {
      fromUnit: 'cm',
      toUnit: 'in',
      convert: conversionUtils.centimetersToInches,
      reverse: conversionUtils.inchesToCentimeters
    },
    'NauticalMilesToKilometers': {
      fromUnit: 'nmi',
      toUnit: 'km',
      convert: conversionUtils.nauticalMilesToKilometers,
      reverse: conversionUtils.kilometersToNauticalMiles
    },
    'MicrometersToMils': {
      fromUnit: 'µm',
      toUnit: 'mil',
      convert: conversionUtils.micrometersToMils,
      reverse: conversionUtils.milsToMicrometers
    },
    'FathomsToMeters': {
      fromUnit: 'ftm',
      toUnit: 'm',
      convert: conversionUtils.fathomsToMeters,
      reverse: conversionUtils.metersToFathoms
    },
    'HandsToInches': {
      fromUnit: 'hh',
      toUnit: 'in',
      convert: conversionUtils.handsToInches,
      reverse: conversionUtils.inchesToHands
    },
    'AstronomicalUnitsToLightYears': {
      fromUnit: 'AU',
      toUnit: 'ly',
      convert: conversionUtils.astronomicalUnitsToLightYears,
      reverse: conversionUtils.lightYearsToAstronomicalUnits
    },
    'ParsecsToLightYears': {
      fromUnit: 'pc',
      toUnit: 'ly',
      convert: conversionUtils.parsecsToLightYears,
      reverse: conversionUtils.lightYearsToParsecs
    },
    'FootballFieldsToMeters': {
      fromUnit: 'fields',
      toUnit: 'm',
      convert: conversionUtils.footballFieldsToMeters,
      reverse: conversionUtils.metersToFootballFields
    },
    // Legacy conversions for backward compatibility
    'KilometersToMiles': {
      fromUnit: 'km',
      toUnit: 'mi',
      convert: conversionUtils.kilometersToMiles,
      reverse: conversionUtils.milesToKilometers
    },
    'MetersToFeet': {
      fromUnit: 'm',
      toUnit: 'ft',
      convert: conversionUtils.metersToFeet,
      reverse: conversionUtils.feetToMeters
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
      precision={fromUnit === 'AU' || fromUnit === 'pc' || toUnit === 'ly' ? 6 : 2}
    />
  );
};

export default LengthConverter;
