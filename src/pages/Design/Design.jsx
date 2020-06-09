import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '../../components/PageLayout/PageLayout';
import DesignEditor from '../../components/DesignEditor/DesignEditor';
import { useDesignContext } from '../../state/contexts/designContext';
import { useShirtsContext } from '../../state/contexts/shirtsContext';

import initialShirt from '../../constants/initialShirt';

import { SELECT_SHIRT } from '../../constants/optionEventTypes';

const Design = () => {
  const { shirtId } = useParams();
  const { shirt, updateShirt, setNewDesign } = useDesignContext();
  const { shirtList } = useShirtsContext();

  useEffect(() => {
    const initWithNewShirt = () => {
      updateShirt({ type: SELECT_SHIRT, data: initialShirt });
      setNewDesign(true);
    };

    const selectExistingShirt = (existingShirtList, selectedShirtId) => {
      if (shirtList.length > 0) {
        const theShirtsList = [...existingShirtList];

        const shirtIndex = theShirtsList.findIndex((shirtItem) => {
          return shirtItem.id === parseInt(selectedShirtId, 10);
        });

        if (shirtIndex !== -1) {
          updateShirt({ type: SELECT_SHIRT, data: theShirtsList[shirtIndex] });
          setNewDesign(false);
        } else {
          initWithNewShirt();
          setNewDesign(true);
        }
      }
    };

    if (shirtId) {
      selectExistingShirt(shirtList, shirtId);
    } else {
      initWithNewShirt();
    }
  }, [setNewDesign, shirtId, shirtList, updateShirt]);

  return (
    <PageLayout>
      <DesignEditor shirtToEdit={shirt} updateShirt={updateShirt} />
    </PageLayout>
  );
};

export default Design;
