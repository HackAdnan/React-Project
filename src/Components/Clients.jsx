import { Container, Row , Col} from "react-bootstrap";
import logo1 from "../assets/images/logo1.png";
import Logo2 from "../assets/images/Logo2.png";
import Logo3 from "../assets/images/Logo3.png";
import Logo4 from "../assets/images/Logo4.png";
import Logo5 from "../assets/images/Logo5.png";
import Logo6 from "../assets/images/Logo6.png";
import Logo7 from "../assets/images/Logo7.png";


const Clients = () => {
  return (
    <section className="section">
      <Container className="clients_container">
        <div className="section_header">
          <h2 className="section_title">Our Clients</h2>
          <p className="section_text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        <Row className="clients_wrapper">
          <Col xs={6} md={3} className="d-flex justify-content-center">
            <img src={logo1} alt="Client 1" className="client_logo" />
          </Col>
          <Col xs={6} md={3} className="d-flex justify-content-center">
            <img src={Logo2} alt="Client 2" className="client_logo" />
          </Col>
          <Col xs={6} md={3} className="d-flex justify-content-center">
            <img src={Logo3} alt="Client 3" className="client_logo" />
          </Col>
          <Col xs={6} md={3} className="d-flex justify-content-center">
            <img src={Logo4} alt="Client 4" className="client_logo" />
          </Col>
          <Col xs={6} md={3} className="d-flex justify-content-center">
            <img src={Logo5} alt="Client 5" className="client_logo" />
          </Col>
          <Col xs={6} md={3} className="d-flex justify-content-center">
            <img src={Logo6} alt="Client 6" className="client_logo" />
          </Col>
          <Col xs={6} md={3} className="d-flex justify-content-center">
            <img src={Logo7} alt="Client 7" className="client_logo" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Clients;