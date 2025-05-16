
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

interface ConverterInstructionsProps {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}

const ConverterInstructions: React.FC<ConverterInstructionsProps> = ({ 
  menuOpen, 
  setMenuOpen 
}) => {
  return (
    <div className="p-8 text-center">
      <p className="text-xl text-white/80">Please select a conversion type from the menu.</p>
      <div className="mt-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-converter-accent hover:bg-white/10 animate-pulsate"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
    </div>
  );
};

export default ConverterInstructions;
