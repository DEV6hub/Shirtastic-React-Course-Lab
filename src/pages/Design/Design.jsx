import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '../../components/PageLayout/PageLayout';
import DesignEditor from '../../components/DesignEditor/DesignEditor';
import { useDesignContext } from '../../state/contexts/designContext';
import { useShirtsContext } from '../../state/contexts/shirtsContext';

const Design = () => {
  const { shirtId } = useParams();
  const { shirt, selectShirt, updateShirt } = useDesignContext();
  const { shirtList } = useShirtsContext();

  useEffect(() => {
    if (shirtId) {
      selectShirt(shirtList, shirtId);
    }
  }, [selectShirt, shirtId, shirtList]);

  return (
    <PageLayout>
      <DesignEditor shirtToEdit={shirt} updateShirt={updateShirt} />
    </PageLayout>
  );
};

export default Design;
