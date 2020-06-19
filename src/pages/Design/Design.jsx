import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PageLayout from '../../components/PageLayout/PageLayout';
import DesignEditor from '../../components/DesignEditor/DesignEditor';
import { useShirtsContext } from '../../state/contexts/shirtsContext';

import initialShirt from '../../constants/initialShirt';

import { selectShirt } from '../../state/redux/actions/actionCreators';

const Design = () => {
  const { shirtId } = useParams();
  const { shirtList } = useShirtsContext();
  const dispatch = useDispatch();

  useEffect(() => {
    const initWithNewShirt = () => {
      dispatch(selectShirt({ ...initialShirt, isNewDesign: true }));
    };

    const selectExistingShirt = (existingShirtList, selectedShirtId) => {
      if (shirtList.length > 0) {
        const theShirtsList = [...existingShirtList];

        const shirtIndex = theShirtsList.findIndex((shirtItem) => {
          return shirtItem.id === parseInt(selectedShirtId, 10);
        });

        if (shirtIndex !== -1) {
          dispatch(selectShirt({ ...theShirtsList[shirtIndex], isNewDesign: false }));
        } else {
          initWithNewShirt();
        }
      }
    };

    if (shirtId) {
      selectExistingShirt(shirtList, shirtId);
    } else {
      initWithNewShirt();
    }
  }, [dispatch, shirtId, shirtList]);

  return (
    <PageLayout>
      <DesignEditor />
    </PageLayout>
  );
};

export default Design;
