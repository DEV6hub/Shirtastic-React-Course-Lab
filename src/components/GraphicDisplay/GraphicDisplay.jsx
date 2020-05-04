import React from 'react';
import { useParams } from 'react-router-dom';

const styles = {
  greyFont: {
    color: 'grey',
  },
  imgWidth: {
    width: 180,
  },
  graphicHeader: {
    border: '1px solid black',
    color: 'grey',
    textAlign: 'center',
  },
  graphicContainer: {
    border: '1px solid black',
    backgroundColor: 'grey',
  },
};

const GraphicDisplay = () => {
  const { graphicLogo } = useParams();

  return (
    <div>
      <h3 style={styles.graphicHeader}>Graphic Logo</h3>
      <img
        style={styles.graphicContainer}
        className="img-fluid shirt-graphic-img"
        // eslint-disable-next-line import/no-dynamic-require, global-require
        src={require(`../../images/${graphicLogo}`)}
        alt="shirt graphic"
      />
    </div>
  );
};

export default GraphicDisplay;
