import { useEffect } from "react";

export default function useAdditionalClosePopup(closePopup) {
  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        closePopup();
      }
    }
    
    function handleOverlayClose(evt) {
      if (evt.target.classList.contains('popup')) {
        closePopup();
      }
    }
  
    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('mousedown', handleOverlayClose);
      
    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('mousedown', handleOverlayClose);
    };
  });
}
