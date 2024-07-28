import React from 'react';
import { Container, Button } from 'react-bootstrap';
import picture from "../assets/images/Illustration.png"

const bannerStyle = {
  marginTop: '-10px',
  backgroundColor: '#F5F7FA',
  
};

const buttonStyles = {
  color: 'white',
  backgroundColor: '#4CAF4F',
  padding: '10px 20px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

// const headerContainerWrapperStyles = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
// };

// const headerTextStyles = {
//   flex: '1',
// };

// const headerImgStyles = {
//   flex: '1',
//   textAlign: 'right',
// };

const Banner = () => {
  return (
    <header className="header" style={bannerStyle}>
      <Container className="header_container">
        <div className="header_container_wrapper" >
          <div className="header_text" >
            <h1 className="header_title" style={{ color: '#4D4D4D' }}>
              Lessons and insights <div style={{ color: '#4CAF50' }}>from 8 years</div>
            </h1>
            <p className="header_text" style={{ color: '#717171' }}>
              Where to grow your business as a photographer: site or social media?
            </p>
            <Button
              href="#"
              className="header_btn"
              style={buttonStyles}
            >
              Register
            </Button>
          </div>
          <div className="header_img" >
            <img src={picture} alt="Header" />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Banner;
