import { useState } from 'react';
// Note: Ye package import karna thoda alag ho sakta hai, 
// agar error aaye toh hum isko adjust karenge.
import { convertToPDF } from '@matbee/libreoffice-converter';

export function useWordConverter() {
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState('');

  const convertWord = async (file) => {
    setIsConverting(true);
    setError('');
    
    try {
      // File ko ArrayBuffer mein padho
      const arrayBuffer = await file.arrayBuffer();
      
      // BentoPDF engine se convert karwao
      const pdfBytes = await convertToPDF(new Uint8Array(arrayBuffer));
      
      // PDF Blob banao
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      const baseName = file.name.replace(/\.[^.]+$/, '') || file.name;
      
      return {
        url,
        name: `${baseName}.pdf`,
        size: blob.size
      };
    } catch (err) {
      setError(err.message || 'Word conversion failed.');
      return null;
    } finally {
      setIsConverting(false);
    }
  };

  return { convertWord, isConverting, error };
}