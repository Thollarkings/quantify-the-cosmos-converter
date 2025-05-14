
import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface ConversionOption {
  name: string;
  value: string;
}

interface ConversionCategories {
  [key: string]: ConversionOption[];
}

interface ConverterMenuProps {
  menuOpen: boolean;
  openCategory: string | null;
  toggleCategory: (category: string) => void;
  setSelectedConversion: (value: string) => void;
  setMenuOpen: (value: boolean) => void;
  conversions: ConversionCategories;
}

const ConverterMenu: React.FC<ConverterMenuProps> = ({
  menuOpen,
  openCategory,
  toggleCategory,
  setSelectedConversion,
  setMenuOpen,
  conversions
}) => {
  if (!menuOpen) return null;

  return (
    <div className="mb-6 rounded-lg overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm">
      {Object.keys(conversions).map((category) => (
        <div key={category} className="border-b border-white/10 last:border-0">
          <button
            onClick={() => toggleCategory(category)}
            className="w-full flex justify-between items-center p-3 text-white hover:bg-white/10 transition-all duration-200"
            aria-expanded={openCategory === category}
          >
            <span className="font-medium">{category}</span>
            {openCategory === category ? (
              <ChevronDown size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
          </button>
          
          {openCategory === category && (
            <div className="bg-black/10 border-t border-white/10">
              {conversions[category].map((conversion) => (
                <button
                  key={conversion.value}
                  className="w-full text-left p-2.5 pl-6 text-black bg-white/90 hover:bg-converter-menuItemHover hover:text-white transition-colors mb-0.5"
                  onClick={() => {
                    setSelectedConversion(conversion.value);
                    setMenuOpen(false);
                  }}
                >
                  {conversion.name}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ConverterMenu;
