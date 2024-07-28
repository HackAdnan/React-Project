import React from 'react';
import logo2 from "../assets/images/Logo2.png";
import logo3 from "../assets/images/Logo3.png";
import logo4 from "../assets/images/Logo4.png";
import logo5 from "../assets/images/Logo5.png";
import logo6 from "../assets/images/Logo6.png";
import Tesla from "../assets/images/Tesla.png"

const styles = {
  imageContainer: {
    width: '50%',
  },
  textContainer: {
    color: "rgba(76, 175, 79, 1)",
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px',
    marginX: '2px',
  },
  buttonLink: {
    color: "white",
    textDecoration: "none",
  },
  col: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px',
    marginX: '2px',
  },
};

const Meet = () => {
  return (
    <main className="container-fluid">
      <div className="row align-items-center">
        <div className="col-12 col-md-5 d-flex justify-content-center py-5">
          <img src={Tesla} style={styles.imageContainer} alt="Illustration" />
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center py-2">
          <div className="px-3">
            <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, 
              vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero 
              ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. 
              Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus 
              tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu 
              turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae 
              placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero 
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
              <h5 style={styles.textContainer}>Tim Smith</h5>
              <p className="cp2">British Dragon Boat Racing Association</p>
              <div className="row align-items-center ">
                <div className="col-6 col-sm-4 col-md-2 col-lg-1" style={styles.col}>
                  <img src={logo2} alt="logo" />
                </div>
                <div className="col-6 col-sm-4 col-md-2 col-lg-1" style={styles.col}>
                  <img src={logo3} alt="logo" />
                </div>
                <div className="col-6 col-sm-4 col-md-2 col-lg-1" style={styles.col}>
                  <img src={logo4} alt="logo" />
                </div>
                <div className="col-6 col-sm-4 col-md-2 col-lg-1" style={styles.col}>
                  <img src={logo5} alt="logo" />
                </div>
                <div className="col-6 col-sm-4 col-md-2 col-lg-1" style={styles.col}>
                  <img src={logo6} alt="logo" />
                </div>
                <div className="col-6 col-sm-4 col-md-2 col-lg-4 d-flex justify-content-center align-items-center p-2">
                  <button type="button" className="btn btn-link" style={styles.buttonLink}> 
                    <b>Meet all customers →</b> 
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Meet;
