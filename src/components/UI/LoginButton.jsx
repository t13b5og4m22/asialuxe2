import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function LoginButton() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const LoginButtonStyle = {
    color: '#FFFFFF',
    fontSize: '16px',
    background: '#3392FF',
    borderRadius: '8px',
    width: 'min(20vw, 158px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'PT Bold',
    height: '37px'
  }  

  return (
    <div className="LoginButton">

      <button style={LoginButtonStyle} onClick={handleShow}>Вход</button>

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas1</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

    </div>
  );
}

export default LoginButton;
