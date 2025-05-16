
import React from 'react';

const ConverterFooter: React.FC = () => {
  return (
    <footer className="p-4 text-center text-white/70 bg-black/20 border-t border-white/10">
      <h5>&copy; Thollarkings {new Date().getFullYear()}</h5>
    </footer>
  );
};

export default ConverterFooter;
