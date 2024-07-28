import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import icon1 from '../assets/images/Icon1.png';
import icon2 from '../assets/images/Icon2.png';
import icon3 from '../assets/images/clubs.png';

const Services = () => {
  return (
    <section className="section">
      <Container className="services_container">
        <div className="section_header">
          <h2 className="section_title">
            Manage your entire community <br />
            in a single system
          </h2>
          <p className="section_text">
            Who is Nextcent suitable for?
          </p>
        </div>
        <Row className="services">
          <Col className="service" xs={12} md={4}>
            <span className="icon">
              <img src={icon1} alt="Membership Organizations" />
            </span>
            <h3 className="service_title">Membership Organizations</h3>
            <p className="service_text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi neque optio aliquam voluptatum voluptate.
            </p>
          </Col>
          <Col className="service" xs={12} md={4}>
            <span className="icon">
              <img src={icon2} alt="National Associations" />
            </span>
            <h3 className="service_title">National Associations</h3>
            <p className="service_text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi neque optio aliquam voluptatum voluptate.
            </p>
          </Col>
          <Col className="service" xs={12} md={4}>
            <span className="icon">
              <img src={icon3} alt="Clubs & Groups" />
            </span>
            <h3 className="service_title">Clubs & Groups</h3>
            <p className="service_text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi neque optio aliquam voluptatum voluptate.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
