import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img25 from '../Components/images/25.jpg'
import img26 from '../Components/images/26.jpg'
import img27 from '../Components/images/27.jpg'

const Yes2 = () => {
  return (
    <div>
      <>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img25}
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
          src={img26}
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
          src={img27}
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

export default Yes2
