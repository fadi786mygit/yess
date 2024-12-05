import React from 'react'
import yesimage from '../Components/images/yesimage.jpg'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img16 from '../Components/images/16.jpg';
import yes2 from '../Components/images/yes2.jpg';
import yes3 from '../Components/images/yes3.jpg';




const Home = () => {
  return (
    <div className='navbar'>
      <div className="text"><h1>Yes Chapter 4</h1></div>

      {/* <button onClick={() => { window.location.href = "/register" }} className='btn btn-primary d-flex justify-content-end justify-content-sm-end'>Register</button> */}
      {/* <div className='w-100' >

              <img src={yesimage} />
      </div> */}

<div
  className="image-container"
  style={{
    position: 'relative',
    width: '100%',
    height: '600px',
  }}
>
  {/* Background Image */}
  <div
    style={{
      backgroundImage: `url(${yesimage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%',
      opacity: '0.19',
      position: 'absolute',
      top: 0,
      left: 0,
    }}
  ></div>

  {/* Text Overlay */}
  <div
    className="d-flex flex-column align-items-center justify-content-center text-center"
    style={{
      position: 'relative',
      zIndex: 1,
      height: '100%',
      color: '#fff',
      textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',
    }}
  >
    <h1 className="fs-1 fw-bold">YOUNG ENTREPRENEUR SUMMIT CHAPTERS</h1>
    <h3>YES is a platform to encourage entrepreneurial ideas and talent of young entrepreneurs.</h3>
    <p className="fs-5">Discover, innovate, and inspire through your entrepreneurial journey.</p>
    <button 
      onClick={() => { window.location.href = "https://forms.gle/vuhdVHtPzzyYExvT8"}} 
      className="btn btn-primary mt-3"
    >
      Register Now
    </button>
    </div>

    <div className="container mt-5">
  <div className="row">
    <div className="col-md-4 col-12 mt-3">
      <Card className="h-100">
        <Card.Img 
          variant="top" 
          src={img16} 
          style={{ objectFit: 'cover', height: '200px' }} 
          alt="Card image" 
        />
        <Card.Body className="bg-dark text-white d-flex flex-column">
          <Card.Title>Yes Chapter 1</Card.Title>
          <Card.Text>
          Yes Entrepreneur Summit: Empowering Visionaries. Join the journey of turning passions into successful ventures!
          </Card.Text>
          <Button 
          onClick={() => { window.location.href = "/yes1" }}
            variant="primary" 
            className="mt-auto" // Ensures button sticks to the bottom
          >
            See more
          </Button>
        </Card.Body>
      </Card>
    </div>

    <div className="col-md-4 col-12 mt-3">
      <Card className="h-100">
        <Card.Img 
          variant="top" 
          src={yes2} 
          style={{ objectFit: 'cover', height: '200px' }} 
          alt="Card image" 
        />
        <Card.Body className="bg-dark text-white d-flex flex-column">
          <Card.Title>Yes Chapter 2</Card.Title>
          <Card.Text>
          Yes Entrepreneur Summit: Empowering Visionaries. Join the journey of turning passions into successful ventures!
          </Card.Text>
          <Button 
           onClick={() => { window.location.href = "/yes2" }}
            variant="primary" 
            className="mt-auto"
          >
            See more
          </Button>
        </Card.Body>
      </Card>
    </div>

    <div className="col-md-4 col-12 mt-3">
      <Card className="h-100">
        <Card.Img 
          variant="top" 
          src={yes3} 
          style={{ objectFit: 'cover', height: '200px' }} 
          alt="Card image" 
        />
        <Card.Body className="bg-dark text-white d-flex flex-column">
          <Card.Title>Yes Chapter 3</Card.Title>
          <Card.Text>
          Yes Entrepreneur Summit: Empowering Visionaries. Join the journey of turning passions into successful ventures!
          </Card.Text>
          <Button 
           onClick={() => { window.location.href = "/yes3" }}
            variant="primary" 
            className="mt-auto"
          >
            See more
          </Button>
        </Card.Body>
      </Card>
    </div>
  </div>
</div>



  </div>
</div>




    
  )
}

export default Home
