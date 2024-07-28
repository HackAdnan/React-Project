import React from 'react';
import { Container, Button } from 'react-bootstrap';
import rafikiImage from "../assets/images/image.png";

const experienceStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: '50%',
  },
  text: {
    width: '60%',
    marginLeft: '3rem',
  },
  title: {
    fontSize: '3.2rem',
    fontWeight: 500,
    color: '#4D4D4D',
  },
  img :{
    width : '60%',
    height: 'auto'
  },
  textContent: {
    margin: '1.5rem 0 2.5rem 0',
    color: '#717171',
    fontWeight: 400,
  },
  button: {
    textDecoration: 'none',
    backgroundColor: '#4CAF4F',
    padding: '8px 10.68px 15px 15px',
    borderRadius: '0.3rem',
    color: 'white',
  },
};

const ExperienceSection = () => {
  return (
    <section className="section">
      <Container style={experienceStyles.container}>
        <div style={experienceStyles.image}>
          <img src={rafikiImage} alt="Experience" style={experienceStyles.img}/>
        </div>
        <div style={experienceStyles.text}>
          <h3 style={experienceStyles.title}>
            The unseen of spending three years at Pixelgrade
          </h3>
          <p style={experienceStyles.textContent}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
            tenetur veritatis numquam qui nostrum ipsum iste iure perferendis
            sint provident nobis consectetur, distinctio esse? Earum
            cupiditate doloribus eveniet veniam odit.
          </p>
          <Button href="#" style={experienceStyles.button}>
            Learn more
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default ExperienceSection;
