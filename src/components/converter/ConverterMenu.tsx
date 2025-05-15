
import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { ConversionOption, ConversionSubcategory, ConversionCategories } from './conversionData';

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
    <div className="mb-6 rounded-lg overflow-hidden border border-white/10 bg-black/30 backdrop-blur-sm">
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
            <div className="bg-black/15">
              {conversions[category].map((subcategory) => (
                <div key={`${category}-${subcategory.name}`} className="border-t border-white/10">
                  <div className="w-full p-2 text-white text-sm bg-black/20">
                    <span className="font-medium pl-2">{subcategory.name}</span>
                  </div>
                  
                  <div className="pl-2">
                    {subcategory.options.map((option) => (
                      <button
                        key={option.value}
                        className="w-full text-left p-2.5 pl-6 text-black bg-purple-200 hover:bg-gradient-to-r hover:from-white hover:to-purple-100 transition-colors mb-0.5 relative group rounded-l-full"
                        onClick={() => {
                          setSelectedConversion(option.value);
                          setMenuOpen(false);
                        }}
                      >
                        <span>{option.name}</span>
                        {option.description && (
                          <div className="hidden group-hover:block absolute left-full ml-2 top-0 w-48 p-2 bg-black/85 text-white text-xs rounded pointer-events-none z-10">
                            {option.description}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ConverterMenu;
