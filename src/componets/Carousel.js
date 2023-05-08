import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imag1 from '../Image/imag1.jpeg';
import imag2 from '../Image/imag2.jpeg';
import imag3 from '../Image/imag3.jpeg';



export default function CarouselPag() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imag1}
          alt="First slide"
          //  style={{ width: 800, height: 800 }}
        />
        <Carousel.Caption>
          <h3>First Photo </h3>
          {/* <p></p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imag2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Photo</h3>
          {/* <p>.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imag3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Photo</h3>
          <p>
            {/*  */}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


// render(<ControlledCarousel />);
