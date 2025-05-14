
import React from 'react';
import ConverterUnit from '@/components/ConverterUnit';
import {
  litersToGallons,
  gallonsToLiters,
  pintsToLiters,
  litersToPints,
  cupsToMilliliters,
  millilitersToCups,
  ouncesToMilliliters,
  millilitersToOunces
} from '@/utils/conversionUtils';

export const LitersToGallons: React.FC = () => {
  return (
    <ConverterUnit
      title="Liters to Gallons"
      fromUnit="L"
      toUnit="gal"
      convertFunction={litersToGallons}
      reverseConvertFunction={gallonsToLiters}
    />
  );
};

export const GallonsToLiters: React.FC = () => {
  return (
    <ConverterUnit
      title="Gallons to Liters"
      fromUnit="gal"
      toUnit="L"
      convertFunction={gallonsToLiters}
      reverseConvertFunction={litersToGallons}
    />
  );
};

export const PintsToLiters: React.FC = () => {
  return (
    <ConverterUnit
      title="Pints to Liters"
      fromUnit="pt"
      toUnit="L"
      convertFunction={pintsToLiters}
      reverseConvertFunction={litersToPints}
    />
  );
};

export const CupsToMilliliters: React.FC = () => {
  return (
    <ConverterUnit
      title="Cups to Milliliters"
      fromUnit="cups"
      toUnit="mL"
      convertFunction={cupsToMilliliters}
      reverseConvertFunction={millilitersToCups}
    />
  );
};

export const MillilitersToCups: React.FC = () => {
  return (
    <ConverterUnit
      title="Milliliters to Cups"
      fromUnit="mL"
      toUnit="cups"
      convertFunction={millilitersToCups}
      reverseConvertFunction={cupsToMilliliters}
    />
  );
};

export const OuncesToMilliliters: React.FC = () => {
  return (
    <ConverterUnit
      title="Ounces to Milliliters"
      fromUnit="oz"
      toUnit="mL"
      convertFunction={ouncesToMilliliters}
      reverseConvertFunction={millilitersToOunces}
    />
  );
};
