import React from 'react';
import { Container } from 'react-bootstrap';
import icon4 from '../assets/images/Icon1.png';
import club from '../assets/images/clubs.png';
import eventBooking from '../assets/images/eventBooking.png';
import payment from '../assets/images/payment.png';

const helpStyles = {
  section: {
    padding: '3rem 0',
    width: '100%',
    backgroundColor: '#F5F7FA',
  },
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  heading: {
    width: '45%',
  },
  title: {
    color: '#4D4D4D',
    fontSize: '2.8rem',
    fontWeight: 600,
  },
  div: {
    color: '#4CAF4F',
  },
  content: {
    width: '55%',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '3rem',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  itemText: {
    marginLeft: '1rem',
  },
  itemTitle: {
    fontSize: '2rem',
    fontWeight: 600,
    color: 'var(--color-secondary)',
  },
  itemP: {
    color: 'var(--color-secondary)',
  },
};

const HelpSection = () => {
  return (
    <section style={helpStyles.section}>
      <Container style={helpStyles.container}>
        <div style={helpStyles.heading}>
          <h3 style={helpStyles.title} >
            Helping a local <div style={helpStyles.div}>business reinvent itself</div>
          </h3>
          <p >We reached here with our hard work and dedication</p>
        </div>
        <div style={helpStyles.content}>
          <div style={helpStyles.item}>
            <img src={icon4} alt="Members Icon" />
            <div style={helpStyles.itemText}>
              <h2 style={helpStyles.itemTitle}>2,245,341</h2>
              <p style={helpStyles.itemP}>Members</p>
            </div>
          </div>
          <div style={helpStyles.item}>
            <img src={club} alt="Club Icon" />
            <div style={helpStyles.itemText}>
              <h2 style={helpStyles.itemTitle}>46,328</h2>
              <p style={helpStyles.itemP}>Clubs</p>
            </div>
          </div>
          <div style={helpStyles.item}>
            <img src={eventBooking} alt="Booking Icon" />
            <div style={helpStyles.itemText}>
              <h2 style={helpStyles.itemTitle}>828,867</h2>
              <p style={helpStyles.itemP}>Event Bookings</p>
            </div>
          </div>
          <div style={helpStyles.item}>
            <img src={payment} alt="Payments Icon" />
            <div style={helpStyles.itemText}>
              <h2 style={helpStyles.itemTitle}>1,926,436</h2>
              <p style={helpStyles.itemP}>Payments</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HelpSection;
