import { useState, useCallback } from 'react';

const useEdit = () => {
  const [isEdit, setEdit] = useState(false);
  const [designName, setDesignName] = useState('');

  const [shirtEdit, setShirtEdit] = useState(null);

  const update = useCallback((newShirt) => {
    const updatedShirt = { ...newShirt };
    setShirtEdit(updatedShirt);
  }, []);

  const setName = useCallback((newName) => {
    console.log('new name', newName);
    setDesignName(newName);
  }, []);

  const setEditMode = useCallback(() => {
    setEdit(true);
  }, []);

  return {
    shirtEdit,
    setShirtEdit,
    isEdit,
    setEditMode,
    designName,
    setName,
  };
};

export default useEdit;
