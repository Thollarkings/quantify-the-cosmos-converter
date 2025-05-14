
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

interface ConverterHeaderProps {
  showInstructions: boolean;
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
}

const ConverterHeader: React.FC<ConverterHeaderProps> = ({ 
  showInstructions, 
  menuOpen, 
  setMenuOpen 
}) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-3xl md:text-4xl font-bold text-white">Unit Converter</h1>
      {!showInstructions && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-converter-accent hover:bg-white/10 animate-pulsate"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      )}
    </div>
  );
};

export default ConverterHeader;
