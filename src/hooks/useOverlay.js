import { useState, useCallback } from 'react';

const useOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openOverlay = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeOverlay = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleOverlay = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return {
    isOpen,
    openOverlay,
    closeOverlay,
    toggleOverlay,
  };
};

export default useOverlay;
