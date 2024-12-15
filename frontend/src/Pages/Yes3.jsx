import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img2 from '../Components/images/2.jpg'
import img3 from '../Components/images/3.jpg'
import img4 from '../Components/images/4.jpg'

const Yes3 = () => {
  return (
    <div>
      <h1>Fahad Sohail Amir Rafiq Yaqoob Sb</h1>
      <>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First</h5>
          <p>Yes Entrepreneur Summit: Empowering Visionaries.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second</h5>
          <p>Yes Entrepreneur Summit: Empowering Visionaries.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third</h5>
          <p>
          Yes Entrepreneur Summit: Empowering Visionaries.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
    </div>
  )
}

export default Yes3

