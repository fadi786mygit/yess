import React from 'react'
import yesimage from '../Components/images/yesimage.jpg'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




const Home = () => {
  return (
    <div className='navbar'>
      <div className="text"><h1>Yes Chapter 4</h1></div>

      <button onClick={() => { window.location.href = "/register" }} className='btn btn-primary d-flex justify-content-end justify-content-sm-end'>Register</button>

      <img src={yesimage} />

    {/* <div className="container">
      <div className="row">
        <div className="col-md-4">
  <div className="mycard d-flex justify-content-center align-items-center gap-3">
      <div className="cards d-flex justify-content-center gap-5">
    <Card style={{ width: '18rem', height: '6rem' }}>
      <Card.Img variant="top" src={yesimage} />
      <Card.Body className="bg-dark text-white">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>

    <div className="col-md-4">
    <Card style={{ width: '18rem', height: '6rem' }}>
      <Card.Img variant="top" src={yesimage} />
      <Card.Body className="bg-dark text-white">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-4">
    <Card style={{ width: '18rem', height: '6rem' }}>
      <Card.Img variant="top" src={yesimage} />
      <Card.Body className="bg-dark text-white">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  </div>
</div>
</div> */}
</div>


    
  )
}

export default Home
