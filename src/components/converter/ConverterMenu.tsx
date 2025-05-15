
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface ConversionOption {
  name: string;
  value: string;
  description?: string;
  category?: "everyday" | "specialized" | "scientific" | "fun";
}

interface ConversionSubcategory {
  name: string;
  options: ConversionOption[];
}

interface ConversionCategories {
  [key: string]: ConversionSubcategory[];
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
  const [openSubcategories, setOpenSubcategories] = useState<Record<string, boolean>>({});
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

  if (!menuOpen) return null;

  const toggleSubcategory = (categoryName: string, subcategoryName: string) => {
    const key = `${categoryName}-${subcategoryName}`;
    setOpenSubcategories(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const isSubcategoryOpen = (categoryName: string, subcategoryName: string) => {
    const key = `${categoryName}-${subcategoryName}`;
    return openSubcategories[key] || false;
  };

  const shouldShowOption = (option: ConversionOption) => {
    if (!option.category) return true;
    if (option.category === 'everyday') return true;
    if ((option.category === 'specialized' || option.category === 'scientific') && showAdvanced) return true;
    if (option.category === 'fun' && showAdvanced) return true;
    return false;
  };

  return (
    <div className="mb-6 rounded-lg overflow-hidden border border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="flex justify-end p-2 border-b border-white/10">
        <label className="inline-flex items-center cursor-pointer">
          <span className="mr-2 text-sm text-white">Advanced</span>
          <input
            type="checkbox"
            checked={showAdvanced}
            onChange={() => setShowAdvanced(!showAdvanced)}
            className="sr-only peer"
          />
          <span className="relative h-5 w-9 bg-gray-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-converter-accent"></span>
        </label>
      </div>
      
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
                // Filter options based on advanced setting
                const visibleOptions = subcategory.options.filter(shouldShowOption);
                
                // Skip empty subcategories
                if (visibleOptions.length === 0) return null;
                
                return (
                  <div key={`${category}-${subcategory.name}`} className="border-t border-white/10">
                    <button
                      onClick={() => toggleSubcategory(category, subcategory.name)}
                      className="w-full flex justify-between items-center p-2 text-white text-sm hover:bg-white/10 transition-all duration-200 bg-black/20"
                    >
                      <span className="font-medium pl-2">{subcategory.name}</span>
                      {isSubcategoryOpen(category, subcategory.name) ? (
                        <ChevronDown size={18} />
                      ) : (
                        <ChevronRight size={18} />
                      )}
                    </button>
                    
                    {isSubcategoryOpen(category, subcategory.name) && (
                      <div className="pl-2">
                        {visibleOptions.map((option) => (
                          <button
                            key={option.value}
                            className="w-full text-left p-2.5 pl-6 text-black bg-white/90 hover:bg-converter-menuItemHover hover:text-white transition-colors mb-0.5 relative group"
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
                    )}
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
