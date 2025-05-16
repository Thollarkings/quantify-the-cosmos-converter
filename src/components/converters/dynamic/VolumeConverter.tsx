
import React from 'react';
import ConverterUnit from '@/components/ConverterUnit';
import * as conversionUtils from '@/utils/conversionUtils';

interface VolumeConverterProps {
  conversion: string;
}

const VolumeConverter: React.FC<VolumeConverterProps> = ({ conversion }) => {
  // Map of conversion types to functions and units
  const conversions: Record<string, { 
    fromUnit: string; 
    toUnit: string; 
    convert: (value: number) => number;
    reverse: (value: number) => number;
  }> = {
    'MillilitersToFluidOunces': {
      fromUnit: 'mL',
      toUnit: 'fl oz',
      convert: conversionUtils.millilitersToFluidOunces,
      reverse: conversionUtils.fluidOuncesToMilliliters
    },
    'LitersToGallons': {
      fromUnit: 'L',
      toUnit: 'gal',
      convert: conversionUtils.litersToGallons,
      reverse: conversionUtils.gallonsToLiters
    },
    'CupsToMilliliters': {
      fromUnit: 'cup',
      toUnit: 'mL',
      convert: conversionUtils.cupsToMilliliters,
      reverse: conversionUtils.millilitersToCups
    },
    'TeaspoonsToMilliliters': {
      fromUnit: 'tsp',
      toUnit: 'mL',
      convert: conversionUtils.teaspoonsToMilliliters,
      reverse: conversionUtils.millilitersToTeaspoons
    },
    'TablespoonsToMilliliters': {
      fromUnit: 'tbsp',
      toUnit: 'mL',
      convert: conversionUtils.tablespoonsToMilliliters,
      reverse: conversionUtils.millilitersToTablespoons
    },
    'OuncesToMilliliters': {
      fromUnit: 'fl oz',
      toUnit: 'mL',
      convert: conversionUtils.ouncesToMilliliters,
      reverse: conversionUtils.millilitersToOunces
    },
    'PintsToLiters': {
      fromUnit: 'pt',
      toUnit: 'L',
      convert: conversionUtils.pintsToLiters,
      reverse: conversionUtils.litersToPints
    },
    'QuartsToLiters': {
      fromUnit: 'qt',
      toUnit: 'L',
      convert: conversionUtils.quartsToLiters,
      reverse: conversionUtils.litersToQuarts
    },
    'CubicMetersToCubicFeet': {
      fromUnit: 'm³',
      toUnit: 'ft³',
      convert: conversionUtils.cubicMetersToCubicFeet,
      reverse: conversionUtils.cubicFeetToCubicMeters
    },
    'CubicCentimetersToCubicInches': {
      fromUnit: 'cm³',
      toUnit: 'in³',
      convert: conversionUtils.cubicCentimetersToCubicInches,
      reverse: conversionUtils.cubicInchesToCubicCentimeters
    },
    'BarrelsToLiters': {
      fromUnit: 'bbl',
      toUnit: 'L',
      convert: conversionUtils.barrelsToLiters,
      reverse: conversionUtils.litersToBarrels
    },
    'GallonsToCubicFeet': {
      fromUnit: 'gal',
      toUnit: 'ft³',
      convert: conversionUtils.gallonsToCubicFeet,
      reverse: conversionUtils.cubicFeetToGallons
    },
    'HogsheadsToLiters': {
      fromUnit: 'hogsheads',
      toUnit: 'L',
      convert: conversionUtils.hogsheadsToLiters,
      reverse: conversionUtils.litersToHogsheads
    },
    'GillsToMilliliters': {
      fromUnit: 'gill',
      toUnit: 'mL',
      convert: conversionUtils.gillsToMilliliters,
      reverse: conversionUtils.millilitersToGills
    },
    'SwimmingPoolsToLiters': {
      fromUnit: 'pools',
      toUnit: 'L',
      convert: conversionUtils.swimmingPoolsToLiters,
      reverse: conversionUtils.litersToSwimmingPools
    },
    // Legacy conversions for compatibility
    'GallonsToLiters': {
      fromUnit: 'gal',
      toUnit: 'L',
      convert: conversionUtils.gallonsToLiters,
      reverse: conversionUtils.litersToGallons
    },
    'MillilitersToCups': {
      fromUnit: 'mL',
      toUnit: 'cup',
      convert: conversionUtils.millilitersToCups,
      reverse: conversionUtils.cupsToMilliliters
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
  
  // Set higher precision for very small or large units
  const needsHighPrecision = ['mL', 'tsp', 'tbsp'].includes(fromUnit) || ['mL', 'tsp', 'tbsp'].includes(toUnit);

  return (
    <ConverterUnit
      title={`${fromUnit} to ${toUnit}`}
      fromUnit={fromUnit}
      toUnit={toUnit}
      convertFunction={convert}
      reverseConvertFunction={reverse}
      precision={needsHighPrecision ? 3 : 2}
    />
  );
};

export default VolumeConverter;
