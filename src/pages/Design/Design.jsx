import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '../../components/PageLayout/PageLayout';
import DesignEditor from '../../components/DesignEditor/DesignEditor';
import { useDesignContext } from '../../state/contexts/designContext';
import { useShirtsContext } from '../../state/contexts/shirtsContext';

import { SELECT_SHIRT } from '../../constants/optionEventTypes';

const Design = () => {
  const { shirtId } = useParams();
  const { shirt, updateShirt } = useDesignContext();
  const { shirtList } = useShirtsContext();

  useEffect(() => {
    const selectExistingShirt = (existingShirtList, selectedShirtId) => {
      if (shirtList.length > 0) {
        const theShirtsList = [...existingShirtList];

        const shirtIndex = theShirtsList.findIndex((shirtItem) => {
          return shirtItem.id === parseInt(selectedShirtId, 10);
        });

        if (shirtIndex !== -1) {
          updateShirt({ type: SELECT_SHIRT, data: theShirtsList[shirtIndex] });
        }
      }
    };

    if (shirtId) {
      selectExistingShirt(shirtList, shirtId);
    }
  }, [shirtId, shirtList, updateShirt]);

  return (
    <PageLayout>
      <DesignEditor shirtToEdit={shirt} updateShirt={updateShirt} />
    </PageLayout>
  );
};

export default Design;
