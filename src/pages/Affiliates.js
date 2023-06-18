import React from 'react';
import design from '../styles/Affiliates.module.css';
import PageHeader from '../components/PageHeader';
import ViatorLogo from '../imgs/Viator-Logo.png'
import BookingLogo from '../imgs/bookingcom.svg'
import AirBnbLogo from '../imgs/airbnb.svg'
const Affiliates = () => {
    const affiliates = [
        {
            name: 'Viator',
            logo: ViatorLogo,
            website: "https://www.viator.com"
        },
        {
            name: 'Booking.com',
            logo: BookingLogo,
            website: "https://www.booking.com"
        },
        {
            name: 'AirBnB',
            logo: AirBnbLogo,
            website: "https://www.airbnb.com"
        }
    ];
  return (
    <div className={design.Affiliates} id="affiliates">
      <PageHeader title={"Affiliates"} />
      <div className={design.Container}>
        <div className={design.LinkContainer}>
          {/* <h2>Our Affiliates</h2> */}
          {affiliates.map((affiliate, index) => (
            <a key={index} href={affiliate.website} target="_blank" rel="noreferrer">
              <img src={affiliate.logo} alt={affiliate.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Affiliates;