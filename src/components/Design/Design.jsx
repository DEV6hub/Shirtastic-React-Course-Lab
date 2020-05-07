import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Design.css';
import { Container, Row, Col, Card, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import PropTypes from 'prop-types';
import { styleList } from '../../constants/styleList';
import ColorPicker from '../ColorPicker/ColorPicker';
import Graphic from '../Graphic/Graphic';
import Text from '../Text/Text';
import background from '../../images/Fractal.png';

const renderImage = (image, color) => {
  return `${image}-${color?.toLowerCase() || ''}`;
};

const Design = ({
  shirtToEdit,
  selectStyle,
  selectColor,
  selectGraphic,
  addShirtText,
  changeTextFont,
}) => {
  const [activeTab, setActiveTab] = useState('1');
  const graphicImage = useRef(null);

  useEffect(() => {
    if (shirtToEdit.image) {
      graphicImage.current.style.display = 'block';
    }
  }, [shirtToEdit]);

  const toggle = useCallback(
    (tab) => {
      if (activeTab !== tab) {
        setActiveTab(tab);
      }
    },
    [setActiveTab, activeTab],
  );

  const selectGraphicHandler = useCallback(
    (graphic) => {
      // Show Image
      graphicImage.current.style.display = 'block';
      selectGraphic(graphic);
    },
    [graphicImage, selectGraphic],
  );

  return (
    <Container fluid className="design-container">
      <div className="design-background">
        <img src={background} alt="background" />
      </div>
      <Row className="style-config-row">
        <Col className="style-config-col">
          <Card className="style-card">
            <div className="style-tabs-container">
              <Nav tabs className="style-tabs">
                <NavItem>
                  <NavLink
                    className={activeTab === '1' ? 'active' : ''}
                    onClick={() => {
                      toggle('1');
                    }}
                  >
                    Styles
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === '2' ? 'active' : ''}
                    onClick={() => {
                      toggle('2');
                    }}
                  >
                    Colours
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === '3' ? 'active' : ''}
                    onClick={() => {
                      toggle('3');
                    }}
                  >
                    Graphics
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === '4' ? 'active' : ''}
                    onClick={() => {
                      toggle('4');
                    }}
                  >
                    Text
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Container fluid className="select-style-container">
                  <div className="style-title">Choose a shirt style</div>
                  <Row className="select-style-row">
                    {styleList.map((style, index) => (
                      <Col key={index}>
                        <div
                          className={`style-img-container ${
                            shirtToEdit.shirtStyle === style.image ? 'active' : ''
                          }`}
                          onClick={() => selectStyle(style.image)}
                        >
                          <img
                            className="img-fluid"
                            // eslint-disable-next-line import/no-dynamic-require, global-require
                            src={require(`../../images/${renderImage(
                              style.image,
                              shirtToEdit?.shirtColor?.name,
                            )}.jpg`)}
                            alt="shirt style"
                          />
                        </div>
                        <div className="style-description">{style.description}</div>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </TabPane>
              <TabPane tabId="2">
                <ColorPicker
                  selectColor={selectColor}
                  attribute="shirt"
                  selectedColor={shirtToEdit.shirtColor}
                  title="Choose a shirt colour"
                />
              </TabPane>
              <TabPane tabId="3">
                <Graphic
                  selectedGraphic={shirtToEdit.graphic}
                  selectGraphic={selectGraphicHandler}
                />
                <hr />
                <ColorPicker
                  selectColor={selectColor}
                  attribute="graphic"
                  selectedColor={shirtToEdit.graphicColor}
                  title="Change graphic colour"
                />
              </TabPane>
              <TabPane tabId="4">
                <Text
                  text={shirtToEdit.text}
                  addShirtText={addShirtText}
                  changeTextFont={changeTextFont}
                  font={shirtToEdit.font}
                />
                <ColorPicker
                  selectColor={selectColor}
                  attribute="text"
                  selectedColor={shirtToEdit.textColor}
                  title="Change text colour"
                />
              </TabPane>
            </TabContent>
          </Card>
        </Col>
        <Col className="style-config-col">
          <Card className="img-configurator" id="imageRef">
            <img
              className="img-fluid"
              src={require(`../../images/${renderImage(
                shirtToEdit.shirtStyle,
                shirtToEdit.shirtColor.name,
              )}.jpg`)}
              alt="shirt style"
            />
            <img
              ref={graphicImage}
              className="img-fluid graphic-img"
              style={{ display: 'none' }}
              src={shirtToEdit.graphic ? require(`../../images/${shirtToEdit.graphic}`) : ''}
              alt="shirt graphic"
            />
            <div
              className="shirt-text"
              style={{ color: shirtToEdit.textColor.color, fontFamily: shirtToEdit.font }}
            >
              {shirtToEdit.text}
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

Design.propTypes = {
  //   children: PropTypes.node.isRequired,
  shirtToEdit: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    subtotal: PropTypes.number.isRequired,
    shirtStyle: PropTypes.string.isRequired,
    shirtColor: PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
    text: PropTypes.string.isRequired,
    textColor: PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
    font: PropTypes.string.isRequired,
    graphic: PropTypes.string.isRequired,
    graphicColor: PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  }).isRequired,
  selectStyle: PropTypes.func.isRequired,
  selectColor: PropTypes.func.isRequired,
  selectGraphic: PropTypes.func.isRequired,
  addShirtText: PropTypes.func.isRequired,
  changeTextFont: PropTypes.func.isRequired,
};
export default Design;
