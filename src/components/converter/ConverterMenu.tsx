
import React, { useState } from 'react';
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

  const shouldShowOption = (option: ConversionOption) => {
    return true; // Show all options now that we don't have advanced toggle
  };

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
              {conversions[category].map((subcategory) => {
                // Filter options based on setting
                const visibleOptions = subcategory.options.filter(shouldShowOption);
                
                // Skip empty subcategories
                if (visibleOptions.length === 0) return null;
                
                return (
                  <div key={`${category}-${subcategory.name}`} className="border-t border-white/10">
                    <div className="w-full p-2 text-white text-sm bg-black/20">
                      <span className="font-medium pl-2">{subcategory.name}</span>
                    </div>
                    
                    <div className="pl-2">
                      {visibleOptions.map((option) => (
                        <button
                          key={option.value}
                          className="w-full text-left p-2.5 pl-6 text-black bg-gradient-to-r from-white to-purple-100 hover:bg-converter-menuItemHover hover:text-white transition-colors mb-0.5 relative group rounded-tl-lg rounded-bl-lg"
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
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ConverterMenu;
