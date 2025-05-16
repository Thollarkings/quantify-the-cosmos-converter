
import React from 'react';
import ConverterUnit from '@/components/ConverterUnit';
import * as conversionUtils from '@/utils/conversionUtils';

interface WeightConverterProps {
  conversion: string;
}

const WeightConverter: React.FC<WeightConverterProps> = ({ conversion }) => {
  // Map of conversion types to functions and units
  const conversions: Record<string, { 
    fromUnit: string; 
    toUnit: string; 
    convert: (value: number) => number;
    reverse: (value: number) => number;
    precision?: number;
  }> = {
    'PoundsToKilograms': {
      fromUnit: 'lbs',
      toUnit: 'kg',
      convert: conversionUtils.poundsToKilograms,
      reverse: conversionUtils.kilogramsToPounds
    },
    'OuncesToGrams': {
      fromUnit: 'oz',
      toUnit: 'g',
      convert: conversionUtils.ouncesToGrams,
      reverse: conversionUtils.gramsToOunces
    },
    'StoneToKilograms': {
      fromUnit: 'st',
      toUnit: 'kg',
      convert: conversionUtils.stoneToKilograms,
      reverse: conversionUtils.kilogramsToStone
    },
    'MilligramsToGrams': {
      fromUnit: 'mg',
      toUnit: 'g',
      convert: conversionUtils.milligramsToGrams,
      reverse: conversionUtils.gramsToMilligrams,
      precision: 4
    },
    'CupsToGrams': {
      fromUnit: 'cup',
      toUnit: 'g',
      convert: conversionUtils.cupsToGrams,
      reverse: conversionUtils.gramsToCups
    },
    'TonsToMetricTonnes': {
      fromUnit: 'ton',
      toUnit: 't',
      convert: conversionUtils.tonsToMetricTonnes,
      reverse: conversionUtils.metricTonnesToTons
    },
    'CaratsToGrams': {
      fromUnit: 'ct',
      toUnit: 'g',
      convert: conversionUtils.caratsToGrams,
      reverse: conversionUtils.gramsToCarats,
      precision: 3
    },
    'TroyOuncesToGrams': {
      fromUnit: 'oz t',
      toUnit: 'g',
      convert: conversionUtils.troyOuncesToGrams,
      reverse: conversionUtils.gramsToTroyOunces
    },
    'GrainsToGrams': {
      fromUnit: 'gr',
      toUnit: 'g',
      convert: conversionUtils.grainsToGrams,
      reverse: conversionUtils.grainsToGrains,
      precision: 4
    },
    'SlugsToKilograms': {
      fromUnit: 'slug',
      toUnit: 'kg',
      convert: conversionUtils.slugsToKilograms,
      reverse: conversionUtils.kilogramsToSlugs
    },
    'ElephantsToMetricTonnes': {
      fromUnit: 'elephants',
      toUnit: 't',
      convert: conversionUtils.elephantsToMetricTonnes,
      reverse: conversionUtils.metricTonnesToElephants
    },
    'ChineseJinToGrams': {
      fromUnit: 'jin',
      toUnit: 'g',
      convert: conversionUtils.chineseJinToGrams,
      reverse: conversionUtils.gramsToChineseJin
    },
    // Legacy conversions for compatibility
    'KilogramsToPounds': {
      fromUnit: 'kg',
      toUnit: 'lbs',
      convert: conversionUtils.kilogramsToPounds,
      reverse: conversionUtils.poundsToKilograms
    },
    'GramsToOunces': {
      fromUnit: 'g',
      toUnit: 'oz',
      convert: conversionUtils.gramsToOunces,
      reverse: conversionUtils.ouncesToGrams
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

export default WeightConverter;
