import React from 'react';
import readmore1 from "../assets/images/readmore1.png";
import readmore2 from "../assets/images/readmore2.png";
import readmore3 from "../assets/images/readmore3.png";

const styles = {
  main: {
    backgroundColor: "white",
  },
  textContainer: {
    color: '#4D4D4D',
    textAlign: 'center',
  },
  description: {
    color: '#717171',
  },
  imageContainer: {
    backgroundColor: "white",
  },
  image: {
    padding: '2px 3px',
  },
  imageFluid: {
    width: '100%', // Adjust the width as needed
    height: 'auto', // Adjust the height as needed
    maxWidth: '250px', // You can set a max-width to control the size
  },
};

const Readmore = () => {
  return (
    <main className="container-fluid" style={styles.main}>
      <div className="row justify-content-center align-items-center text-container">
        <div className="col-10 col-md-6 d-flex flex-column align-items-center text-center py-4">
          <h2><b style={styles.textContainer}>Caring is the new marketing</b></h2>
          <p style={styles.description}>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</p>
        </div>
      </div>
      <div className="container-fluid" style={styles.imageContainer}>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-sm-4 col-md-3 col-lg-3 d-flex justify-content-center align-items-center p-2 px-3" style={styles.image}>
            <img src={readmore1} alt="icon 1" style={styles.imageFluid} />
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-3 d-flex justify-content-center align-items-center p-2 px-3" style={styles.image}>
            <img src={readmore2} alt="icon 2" style={styles.imageFluid} />
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-3 d-flex justify-content-center align-items-center p-2 px-3" style={styles.image}>
            <img src={readmore3} alt="icon 3" style={styles.imageFluid} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Readmore;
