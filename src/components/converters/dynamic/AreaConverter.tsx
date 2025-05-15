
import React from 'react';
import ConverterUnit from '@/components/ConverterUnit';
import * as conversionUtils from '@/utils/conversionUtils';

interface AreaConverterProps {
  conversion: string;
}

const AreaConverter: React.FC<AreaConverterProps> = ({ conversion }) => {
  // Map of conversion types to functions and units
  const conversions: Record<string, { 
    fromUnit: string; 
    toUnit: string; 
    convert: (value: number) => number;
    reverse: (value: number) => number;
    precision?: number;
  }> = {
    'SquareFeetToSquareMeters': {
      fromUnit: 'ft²',
      toUnit: 'm²',
      convert: conversionUtils.squareFeetToSquareMeters,
      reverse: conversionUtils.squareMetersToSquareFeet
    },
    'SquareMetersToSquareFeet': {
      fromUnit: 'm²',
      toUnit: 'ft²',
      convert: conversionUtils.squareMetersToSquareFeet,
      reverse: conversionUtils.squareFeetToSquareMeters
    },
    'AcresToHectares': {
      fromUnit: 'ac',
      toUnit: 'ha',
      convert: conversionUtils.acresToHectares,
      reverse: conversionUtils.hectaresToAcres
    },
    'SquareMilesToSquareKilometers': {
      fromUnit: 'mi²',
      toUnit: 'km²',
      convert: conversionUtils.squareMilesToSquareKilometers,
      reverse: conversionUtils.squareKilometersToSquareMiles
    },
    'SquareInchesToSquareCentimeters': {
      fromUnit: 'in²',
      toUnit: 'cm²',
      convert: conversionUtils.squareInchesToSquareCentimeters,
      reverse: conversionUtils.squareCentimetersToSquareInches
    },
    'SquareYardsToSquareMeters': {
      fromUnit: 'yd²',
      toUnit: 'm²',
      convert: conversionUtils.squareYardsToSquareMeters,
      reverse: conversionUtils.squareMetersToSquareYards
    },
    'SquareFeetToAcres': {
      fromUnit: 'ft²',
      toUnit: 'ac',
      convert: conversionUtils.squareFeetToAcres,
      reverse: conversionUtils.acresToSquareFeet,
      precision: 6
    },
    'HectaresToAcres': {
      fromUnit: 'ha',
      toUnit: 'ac',
      convert: conversionUtils.hectaresToAcres,
      reverse: conversionUtils.acresToHectares
    },
    'SquareKilometersToSquareMiles': {
      fromUnit: 'km²',
      toUnit: 'mi²',
      convert: conversionUtils.squareKilometersToSquareMiles,
      reverse: conversionUtils.squareMilesToSquareKilometers
    },
    'SquareMillimetersToSquareInches': {
      fromUnit: 'mm²',
      toUnit: 'in²',
      convert: conversionUtils.squareMillimetersToSquareInches,
      reverse: conversionUtils.squareInchesToSquareMillimeters,
      precision: 4
    },
    'CircularMilsToSquareMillimeters': {
      fromUnit: 'cmil',
      toUnit: 'mm²',
      convert: conversionUtils.circularMilsToSquareMillimeters,
      reverse: conversionUtils.squareMillimetersToCircularMils,
      precision: 6
    },
    'FootballFieldsToAcres': {
      fromUnit: 'fields',
      toUnit: 'ac',
      convert: conversionUtils.footballFieldsToAcres,
      reverse: conversionUtils.acresToFootballFields
    },
    'BarnsToSquareMeters': {
      fromUnit: 'b',
      toUnit: 'm²',
      convert: conversionUtils.barnsToSquareMeters,
      reverse: conversionUtils.squareMetersToBarns,
      precision: 30
    },
    'TownshipsToSquareMiles': {
      fromUnit: 'townships',
      toUnit: 'mi²',
      convert: conversionUtils.townshipsToSquareMiles,
      reverse: conversionUtils.squareMilesToTownships
    },
    // Legacy conversions for compatibility
    'SquareMetersToAcres': {
      fromUnit: 'm²',
      toUnit: 'ac',
      convert: conversionUtils.squareMetersToAcres,
      reverse: conversionUtils.acresToSquareMeters,
      precision: 6
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

  const { fromUnit, toUnit, convert, reverse, precision } = selectedConversion;

  return (
    <ConverterUnit
      title={`${fromUnit} to ${toUnit}`}
      fromUnit={fromUnit}
      toUnit={toUnit}
      convertFunction={convert}
      reverseConvertFunction={reverse}
      precision={precision || 2}
    />
  );
};

export default AreaConverter;
