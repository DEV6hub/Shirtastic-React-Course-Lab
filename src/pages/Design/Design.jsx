import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import './Design.css';
import { Container, Row, Col, Card, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
// import PropTypes from 'prop-types';
import { styleList } from '../../constants/styleList';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import Graphic from '../../components/Graphic/Graphic';
import Text from '../../components/Text/Text';
import background from '../../images/Fractal.png';
import { useShirtsContext } from '../../state/contexts/shirtsContext';
import Navigation from '../../components/Navigation/Navigation';

const renderImage = (image, color) => {
  return `${image}-${color?.toLowerCase() || ''}`;
};

const initialShirt = {
  id: 0, // the id will be replaced with the new available number on save
  image: '',
  name: 'untitled_design',
  price: 18.99,
  quantity: 0,
  subtotal: 0,
  shirtStyle: 'MensShirt',
  shirtColor: { name: 'white', color: '#FFFFFF' },
  text: '',
  textColor: { name: 'white', color: '#FFFFFF' },
  font: "'Montserrat', sans-serif",
  graphic: '',
  graphicColor: { name: 'white', color: '#FFFFFF' },
};

const Design = () => {
  const history = useHistory();
  const [shirtToEdit, setShirtToEdit] = useState(null);
  const { shirtId } = useParams();
  const { search } = useLocation();
  const shirtIdNumber = Number(shirtId);
  const { shirtList, createShirt, updateShirt } = useShirtsContext();

  const action = new URLSearchParams(search).get('action') || 'edit';

  useEffect(() => {
    switch (action) {
      case 'edit':
        setShirtToEdit(shirtList.find((item) => item.id === shirtIdNumber));
        break;
      case 'new':
        setShirtToEdit(initialShirt);
        break;
      default:
        console.log('Invalid design action');
        setShirtToEdit(null);
        break;
    }
  }, [action, shirtIdNumber, shirtList]);

  // Sync the shirt title with the navigation bar input
  const setShirtTitle = (newTitle) => {
    setShirtToEdit({ ...shirtToEdit, name: newTitle });
  };

  // TODO AH Consider changing to reducer - this is a reducer-like code
  const selectColor = (color, attribute) => {
    const shirt = { ...shirtToEdit };
    switch (attribute) {
      case 'shirt':
        shirt.shirtColor = color;
        break;
      case 'text':
        shirt.textColor = color;
        break;
      case 'graphic':
        shirt.graphicColor = color;
        break;
      default:
        break;
    }
    setShirtToEdit(shirt);
  };

  const saveShirtDesign = useCallback(() => {
    // Make a copy of the edited shirt object - to show that we are not changing state data directly
    const shirtToSave = {
      ...shirtToEdit,
      image: `${shirtToEdit.shirtStyle}-${shirtToEdit.shirtColor.name.toLowerCase()}`,
      gender: shirtToEdit.shirtStyle[0],
    };
    console.log('Shirt Save');

    if (action === 'new') {
      createShirt(shirtToSave);
    } else {
      updateShirt(shirtToSave);
    }

    setShirtToEdit(null);
    history.push('/catalog');
  }, [action, createShirt, history, shirtToEdit, updateShirt]);

  const selectStyle = useCallback(
    (style) => {
      const shirt = { ...shirtToEdit };
      shirt.shirtStyle = style;
      setShirtToEdit(shirt);
    },
    [shirtToEdit],
  );

  const selectGraphic = useCallback(
    (graphic) => {
      const shirt = { ...shirtToEdit };
      shirt.graphic = graphic;
      setShirtToEdit(shirt);
    },
    [shirtToEdit],
  );

  const addShirtText = useCallback(
    (text) => {
      const shirt = { ...shirtToEdit };
      shirt.text = text;
      setShirtToEdit(shirt);
    },
    [shirtToEdit],
  );

  const changeTextFont = useCallback(
    (font) => {
      const shirt = { ...shirtToEdit };
      shirt.font = font;
      setShirtToEdit(shirt);
    },
    [shirtToEdit],
  );

  const [activeTab, setActiveTab] = useState('1');
  const graphicImage = useRef(null);

  useEffect(() => {
    if (shirtToEdit?.image) {
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

  if (!shirtToEdit) return null;

  return (
    <>
      <Navigation isDesign shirtTitle={shirtToEdit.name} setShirtTitle={setShirtTitle} />
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
    </>
  );
};

Design.propTypes = {};

export default Design;
