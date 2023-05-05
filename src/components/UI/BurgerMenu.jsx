import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import biList from '../../assets/icons/biList.svg';

function BurgerMenu() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const BurgerMenuStyle = {
    width: '24px'
  }  

  return (
    <div className="BurgerMenu" style={{display: 'flex', alignItems: 'center'}}>

      <img src={biList} alt="ico" style={BurgerMenuStyle} onClick={handleShow}/>

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas2</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

    </div>
  );
}

export default BurgerMenu;
