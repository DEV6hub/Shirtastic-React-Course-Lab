import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import './Design.css';
import { Container, Row, Col, Card, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { styleList } from '../../constants/styleList';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import Graphic from '../../components/Graphic/Graphic';
import Text from '../../components/Text/Text';
import background from '../../images/Fractal.png';
import { useShirtsContext } from '../../state/contexts/shirtsContext';
import Navigation from '../../components/Navigation/Navigation';
import initialShirt from '../../constants/initialShirt';

const renderImage = (image, color) => {
  return `${image}-${color?.toLowerCase() || ''}`;
};

const Design = () => {
  const history = useHistory();
  const { search } = useLocation();
  const [shirtToEdit, setShirtToEdit] = useState(null);
  const [activeTab, setActiveTab] = useState('1');
  const { shirtId } = useParams();
  const shirtIdNumber = Number(shirtId);
  const { shirtList, createShirt, updateShirt } = useShirtsContext();

  const action = new URLSearchParams(search).get('action') || 'edit';

  // Configure the page according to URL (shirt id and action) and Shirt List
  useEffect(() => {
    switch (action) {
      case 'edit':
        setShirtToEdit(shirtList.find((item) => item.id === shirtIdNumber));
        break;
      case 'new':
        setShirtToEdit(initialShirt);
        break;
      default:
        // eslint-disable-next-line no-console
        console.log('Invalid design action');
        setShirtToEdit(null);
        break;
    }
  }, [action, shirtIdNumber, shirtList]);

  // Sync the shirt title with the navigation bar input
  const setShirtTitle = (newTitle) => {
    setShirtToEdit({ ...shirtToEdit, name: newTitle });
  };

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
    const shirtToSave = {
      ...shirtToEdit,
      image: `${shirtToEdit.shirtStyle}-${shirtToEdit.shirtColor.name.toLowerCase()}`,
      gender: shirtToEdit.shirtStyle[0],
    };
    // eslint-disable-next-line no-console
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
      setShirtToEdit({ ...shirtToEdit, shirtStyle: style });
    },
    [shirtToEdit],
  );

  const selectGraphic = useCallback(
    (graphic) => {
      setShirtToEdit({ ...shirtToEdit, graphic });
    },
    [shirtToEdit],
  );

  const addShirtText = useCallback(
    (text) => {
      setShirtToEdit({ ...shirtToEdit, text });
    },
    [shirtToEdit],
  );

  const changeTextFont = useCallback(
    (font) => {
      setShirtToEdit({ ...shirtToEdit, font });
    },
    [shirtToEdit],
  );

  const toggle = useCallback(
    (tab) => {
      if (activeTab !== tab) {
        setActiveTab(tab);
      }
    },
    [setActiveTab, activeTab],
  );

  // Show nothing until the shirt data is loaded
  if (!shirtToEdit) return null;

  return (
    <>
      <Navigation
        isDesign
        shirtTitle={shirtToEdit.name}
        setShirtTitle={setShirtTitle}
        handleSaveShirt={saveShirtDesign}
      />
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
                      {styleList.map((style) => (
                        <Col key={style.image}>
                          <button
                            type="button"
                            className={`style-img-container ${
                              shirtToEdit.shirtStyle === style.image ? 'active' : ''
                            }`}
                            onClick={() => selectStyle(style.image)}
                          >
                            {/* <img
                              className="img-fluid"
                              // eslint-disable-next-line import/no-dynamic-require, global-require
                              src={require(`../../images/${renderImage(
                                style.image,
                                shirtToEdit?.shirtColor?.name,
                              )}.jpg`)}
                              alt="shirt style"
                            /> */}
                          </button>
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
                  <Graphic selectedGraphic={shirtToEdit.graphic} selectGraphic={selectGraphic} />
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
              {/* <img
                className="img-fluid"
                src={require(`../../images/${renderImage(
                  shirtToEdit.shirtStyle,
                  shirtToEdit.shirtColor.name,
                )}.jpg`)}
                alt="shirt style"
              /> */}
              {shirtToEdit?.graphic && (
                <div>eqwe</div>
                // <img
                //   className="img-fluid graphic-img"
                //   src={shirtToEdit?.graphic ? require(`../../images/${shirtToEdit.graphic}`) : ''}
                //   alt="shirt graphic"
                // />
              )}
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
