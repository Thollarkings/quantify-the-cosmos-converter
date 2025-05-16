
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatResult } from '@/utils/conversionUtils';

interface ConverterUnitProps {
  title: string;
  fromUnit: string;
  toUnit: string;
  convertFunction: (value: number) => number;
  reverseConvertFunction: (value: number) => number;
  precision?: number;
}

const ConverterUnit: React.FC<ConverterUnitProps> = ({
  title,
  fromUnit,
  toUnit,
  convertFunction,
  reverseConvertFunction,
  precision = 2
}) => {
  const [value, setValue] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [isForwardConversion, setIsForwardConversion] = useState<boolean>(true);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    if (value === '') {
      setResult('');
      return;
    }
    
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const calculatedResult = isForwardConversion
        ? convertFunction(numValue)
        : reverseConvertFunction(numValue);
      setResult(formatResult(calculatedResult, precision));
    }
  }, [value, isForwardConversion, convertFunction, reverseConvertFunction, precision]);

  const handleSwitch = () => {
    setIsForwardConversion(!isForwardConversion);
    setValue('');
    setResult('');
  };

  const currentFromUnit = isForwardConversion ? fromUnit : toUnit;
  const currentToUnit = isForwardConversion ? toUnit : fromUnit;
  const currentTitle = isForwardConversion 
    ? `${fromUnit} to ${toUnit}` 
    : `${toUnit} to ${fromUnit}`;

  return (
    <Card className="border-none bg-gradient-converter shadow-xl hover:shadow-2xl transition-all duration-300 w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl text-center text-white">{currentTitle}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="value" className="text-white text-sm font-medium block">
            Enter {currentFromUnit}
          </label>
          <Input
            id="value"
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={`Enter value in ${currentFromUnit}`}
            className="converter-input"
          />
        </div>

        {value && (
          <div className="text-center p-4 bg-white rounded-lg">
            <div className="text-lg text-black">
              <span className="font-medium">{value} {currentFromUnit}</span> = 
              <span className="font-bold ml-2">{result} {currentToUnit}</span>
            </div>
          </div>
        )}
        
        <Button 
          onClick={handleSwitch}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={`w-full py-3 px-6 rounded-md shadow-lg transition-all duration-300 font-medium mt-4 text-black ${
            isHovering 
              ? 'bg-gradient-to-r from-white to-purple-300' 
              : 'bg-purple-200'
          }`}
        >
          Switch to {!isForwardConversion ? `${fromUnit} to ${toUnit}` : `${toUnit} to ${fromUnit}`}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConverterUnit;
