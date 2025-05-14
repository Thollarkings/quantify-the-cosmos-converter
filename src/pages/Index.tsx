
import React from 'react';
import ConverterLayout from '@/components/converter/ConverterLayout';
import conversionData from '@/components/converter/conversionData';

const Index: React.FC = () => {
  return <ConverterLayout conversions={conversionData} />;
};

export default Index;
