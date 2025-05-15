
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
      <div className="flex-1">
        {/* Empty div for flex spacing */}
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center flex-1">
        Unit Converter
      </h1>
      
      <div className="flex-1 flex justify-end">
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
    </div>
  );
};

export default ConverterHeader;
