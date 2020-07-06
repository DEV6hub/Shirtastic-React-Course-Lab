import React from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import DesignEditor from '../../components/DesignEditor/DesignEditor';
import { useDesignContext } from '../../state/contexts/designContext';

const Design = () => {
  const { shirt, updateShirt } = useDesignContext();

  return (
    <PageLayout>
      <DesignEditor shirtToEdit={shirt} updateShirt={updateShirt} />
    </PageLayout>
  );
};

export default Design;
