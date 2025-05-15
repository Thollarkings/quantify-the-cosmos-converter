
import React from 'react';
import { Menu } from 'lucide-react';

interface ConverterHeaderProps {
  showInstructions: boolean;
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}

const ConverterHeader: React.FC<ConverterHeaderProps> = ({
  showInstructions,
  menuOpen,
  setMenuOpen
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="w-10"> {/* Empty space for balance */}
        {!showInstructions && (
          <button
            className="p-2 text-white hover:text-converter-accent transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <Menu size={24} />
          </button>
        )}
      </div>
      
      <h1 className="text-3xl font-bold text-white text-center">Unit Converter</h1>
      
      <div className="w-10"> {/* Empty space for balance */}
        {!showInstructions && (
          <button
            className="p-2 text-white hover:text-converter-accent transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <Menu size={24} className="animate-pulsate" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ConverterHeader;
