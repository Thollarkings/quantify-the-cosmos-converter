
import React from 'react';
import ConverterHeader from './ConverterHeader';
import ConverterMenu from './ConverterMenu';
import ConverterContent from './ConverterContent';
import ConverterInstructions from './ConverterInstructions';
import ConverterFooter from './ConverterFooter';
import { ConversionCategories } from './conversionData';

interface ConverterLayoutProps {
  conversions: ConversionCategories;
}

const ConverterLayout: React.FC<ConverterLayoutProps> = ({ conversions }) => {
  const [selectedConversion, setSelectedConversion] = React.useState<string>('');
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [openCategory, setOpenCategory] = React.useState<string | null>(null);
  const [showInstructions, setShowInstructions] = React.useState<boolean>(true);
  
  React.useEffect(() => {
    setShowInstructions(selectedConversion === '');
  }, [selectedConversion]);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl bg-gradient-converter rounded-xl shadow-2xl overflow-hidden hover:shadow-[0_20px_30px_rgba(0,0,0,0.6)] transition-all duration-300">
        <div className="p-6">
          <ConverterHeader 
            showInstructions={showInstructions} 
            menuOpen={menuOpen} 
            setMenuOpen={setMenuOpen} 
          />
          
          <ConverterMenu 
            menuOpen={menuOpen}
            openCategory={openCategory}
            toggleCategory={toggleCategory}
            setSelectedConversion={setSelectedConversion}
            setMenuOpen={setMenuOpen}
            conversions={conversions}
          />

          <div className="py-4">
            {showInstructions ? (
              <ConverterInstructions menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            ) : (
              <ConverterContent selectedConversion={selectedConversion} />
            )}
          </div>
        </div>
        
        <ConverterFooter />
      </div>
    </div>
  );
};

export default ConverterLayout;
