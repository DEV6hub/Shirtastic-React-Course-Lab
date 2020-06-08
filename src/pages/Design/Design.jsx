import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '../../components/PageLayout/PageLayout';
import DesignEditor from '../../components/DesignEditor/DesignEditor';
import { useDesignContext } from '../../state/contexts/designContext';
import { useShirtsContext } from '../../state/contexts/shirtsContext';

import defaultShirt from '../../constants/defaultShirt';

const Design = () => {
  const { setName, setEditMode, setShirtEdit } = useDesignContext();

  const { shirtList } = useShirtsContext();
  const { shirtId } = useParams();

  let shirtToEdit = null;

  if (shirtId) {
    const theList = [...shirtList];

    const shirtIndex = theList.findIndex((shirt) => {
      return shirt.id === parseInt(shirtId, 10);
    });

    if (shirtIndex !== -1) {
      shirtToEdit = theList[shirtIndex];
    } else {
      shirtToEdit = defaultShirt;
    }
  } else {
    shirtToEdit = defaultShirt;
  }

  useEffect(() => {
    setName(defaultShirt.name);
    setEditMode();
    setShirtEdit(shirtToEdit);
  }, [setEditMode, setName, setShirtEdit, shirtToEdit]);

  return (
    <PageLayout>
      <DesignEditor shirtToEdit={shirtToEdit} />
    </PageLayout>
  );
};

export default Design;
