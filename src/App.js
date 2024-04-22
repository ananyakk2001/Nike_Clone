import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import jumpman from './images/jumpman.jpg';
import logo from './images/logo.png';
import nike from './images/nike.png';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import search from './images/search.png';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import shoe1 from './images/shoe1.png';
import shoe2 from './images/shoe2.png';
import shoe3 from './images/shoe3.png';
import shoe4 from './images/shoe4.png';
import shoe5 from './images/shoe5.png';
import shoe6 from './images/shoe6.jpg';
import shoe7 from './images/shoe7.jpg';
import shoe8 from './images/shoe8.jpg';
import sho9 from './images/sho9.png';
import shoe10 from './images/shoe10.png';
import shoe12 from './images/shoe12.png';
import shoe13 from './images/shoe13.png';
import shoe14 from './images/shoe14.png';
import shoe15 from './images/shoe15.png';

import sport1 from './images/sport1.png';
import sport2 from './images/sport2.png';
import sport3 from './images/sport3.png';
import sport4 from './images/sport4.png';
import sport5 from './images/sport5.png';

import m1 from './images/m1.jpg';
import m2 from './images/m2.jpg';
import m6 from './images/m6.jpg';
import m4 from './images/m4.jpg';
import m5 from './images/m5.jpg';

import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


function App() {
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light" style={{ height: '30px' }}>
        <Container>
          <Navbar.Brand href="#home"><img src={jumpman} alt='logo' width='30px' height='30px'></img></Navbar.Brand>
          <Nav className="ms-auto" style={{ fontSize: '12px', fontFamily: 'Helvetica' }}>
            <Nav.Link href="#home" style={{ color: "black" }}>Find a store&nbsp;&nbsp;|</Nav.Link>
            <Nav.Link href="#features" style={{ color: "black" }}>Help&nbsp;&nbsp;|</Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "black" }}>Join Us&nbsp;&nbsp;|</Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "black" }}>Sign In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar bg="bright" data-bs-theme="light" style={{ height: '60px' }}>
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt='logo1' width='60px' height='20px'></img></Navbar.Brand>
          <Nav className="me-auto" style={{ fontSize: '15px', fontFamily: 'Helvetica' }}>
            <Nav.Link href="#home" style={{ color: 'black', marginLeft: '200px' }}><b>New & Featured</b></Nav.Link>
            <Nav.Link href="#features" style={{ color: 'black' }}><b>Men</b></Nav.Link>
            <Nav.Link href="#pricing" style={{ color: 'black' }}><b>Women</b></Nav.Link>
            <Nav.Link href="#pricing" style={{ color: 'black' }}><b>Kids</b></Nav.Link>
            <Nav.Link href="#pricing" style={{ color: 'black' }}><b>Sales</b></Nav.Link>
            <Nav.Link href="#pricing" style={{ color: 'black' }}><b>Customise</b></Nav.Link>
            <Nav.Link href="#pricing" style={{ color: 'black' }}><b>SNKRS</b></Nav.Link>
            <Form bg='light' style={{ marginLeft: '50px' }}>
              <input class="search" type="search" placeholder="  Search" style={{ borderRadius: '200px' }}></input>
            </Form>
            <Nav.Link href="#pricing" style={{ color: 'black', marginLeft: '20px' }}><i class="fa-regular fa-heart"></i></Nav.Link>
            <Nav.Link href="#pricing" style={{ color: 'black', marginLeft: '10px' }}><i class="fa-solid fa-bag-shopping" ></i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* Add the Carousel after the third Navbar */}
      
      <div style={{ width: '100%', overflow: 'hidden',background:'#F5F5F5',height:'78px'}}>
        <Carousel style={{ width: '100vw', marginLeft: '0', marginRight: '0' }}>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
              <Container >
                <h3 className="text-center" style={{fontSize:'13px'}} >Save Up to 40%</h3>
                <p className="text-center" style={{fontSize:'13px'}}><u>Shop All Our New Markdowns.</u></p>
              </Container>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
              <Container>
                <h3 className="text-center" style={{fontSize:'13px'}}>Move, Shop, Customise & Celebrate With Us.</h3>
                <p className="text-center" style={{fontSize:'13px'}}>No matter what you feel like doing today.Its better as a Member</p>
                <p className="text-center" style={{fontSize:'13px'}}><u>Join Us</u></p>
              </Container>
            </div>
          </Carousel.Item>
          {/* Add more Carousel.Item for additional slides */}
        </Carousel>
      </div>
      <div>
      <img src={nike} alt='ni' width='95%' height='500px' style={{marginLeft:'30px'}}></img>
      </div>
      <div className="text-center" style={{marginTop:'25px'}}>
        <p><h6>Feel the Unreal</h6></p>
        <p><h1 style={{fontFamily:"revert-layer"}}><b>AIR MAX DN</b></h1></p>
        <p><h6>The next generation of Air technology is here.</h6></p>
        <Button variant="dark" style={{borderRadius:'500px'}}>Shop Now</Button>

      </div>
      <div style={{ marginLeft: '20px', marginTop: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <h3>New Arrivals Just Landed.</h3>
  <div style={{display:'flex'}}><h5>Shop</h5>
  <button variant="light" disabled style={{borderRadius:"500px",border:'none',width:'40px'}}>{"<"}</button>
  <button variant="light"  active style={{borderRadius:"500px",border:'none',width:'40px'}}>{">"}</button>
  </div>
</div>
  <Container>
      <Row className='scroll-row'>
      <Col xs={12} sm={6} md={4} lg={3}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={shoe1} />
      <Card.Body>
        <Card.Title>Nike Dunk Low</Card.Title>
        <Card.Text>
          <p style={{color:'grey'}}>Men's Shoes</p>
          <b>MRP: ₹11,895</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={shoe2} />
      <Card.Body>
        <Card.Title>Nike Dunk Low</Card.Title>
        <Card.Text>
          <p style={{color:'grey'}}>Men's Shoes</p>
          <b>MRP: ₹11,895</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={shoe3} />
      <Card.Body>
        <Card.Title>Nike Dunk Low</Card.Title>
        <Card.Text>
          <p style={{color:'grey'}}>Men's Shoes</p>
          <b>MRP: ₹11,895</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
     <Col xs={12} sm={6} md={4} lg={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={shoe4} />
      <Card.Body>
        <Card.Title>Nike Dunk Low</Card.Title>
        <Card.Text>
          <p style={{color:'grey'}}>Men's Shoes</p>
          <b>MRP: ₹11,895</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={shoe5} />
      <Card.Body>
        <Card.Title>Nike Dunk Low</Card.Title>
        <Card.Text>
          <p style={{color:'grey'}}>Men's Shoes</p>
          <b>MRP: ₹11,895</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={shoe5} />
      <Card.Body>
        <Card.Title>Nike Dunk Low</Card.Title>
        <Card.Text>
          <p style={{color:'grey'}}>Men's Shoes</p>
          <b>MRP: ₹11,895</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    <div className='row'>
      <div className='col'></div>
      <h3 style={{marginBottom:'50px',marginLeft:'20px',marginTop:'80px'}}>Trend Alert</h3>
      <div style={{ display: 'flex' }}>
        <div style={{ position: 'relative', marginRight: '20px' ,marginLeft:'85px'}}>
          <img src={shoe7} style={{ height: '500px' ,width:'22rem',marginLeft:'-30px'}} alt="shoe7" />
          <div style={{ position: 'absolute', top: '80%', left: '20%', transform: 'translateX(-50%)', textAlign: 'center', color: 'black', width: '100%' }}>
            Retro Styles
          </div>
          <button
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '20%',
              transform: 'translateX(-50%)',
              backgroundColor: 'black',
              color: 'white',
              borderRadius: '500px',
              padding: '10px 20px',
              border: 'none'
            }}
          >
            Shop Now
          </button>
        </div>
        <div style={{ position: 'relative', marginRight: '20px' }}>
          <img src={shoe6} style={{ height: '500px',width:'22rem' }} alt="shoe6" />
          <div style={{ position: 'absolute', top: '80%', left: '20%', transform: 'translateX(-50%)', textAlign: 'center', color: 'black', width: '100%' }}>
            Nike Dunk
          </div>
          <button
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '20%',
              transform: 'translateX(-50%)',
              backgroundColor: 'black',
              color: 'white',
              borderRadius: '500px',
              padding: '10px 20px',
              border: 'none'
            }}
          >
            Shop Now
          </button>
        </div>
        <div style={{ position: 'relative' }}>
          <img src={shoe8} style={{ height: '500px',width:'22rem' }} alt="shoe8" />
          <div style={{ position: 'absolute', top: '80%', left: '20%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white', width: '100%' }}>
            Air Jordan1
          </div>
          <button
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '20%',
              transform: 'translateX(-50%)',
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '500px',
              padding: '10px 20px',
              border: 'none'
            }}
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
    <div>
    <h3 style={{marginBottom:'50px',marginLeft:'20px',marginTop:'80px'}}>Featured</h3>
   
    </div>
    
    <img src={sho9} style={{ height: '500px',width:'93%',marginLeft:'40px' }} alt="sho9" /> 
    <div>
    <h3 style={{marginBottom:'50px',marginLeft:'20px',marginTop:'80px'}}>Don't Miss</h3>
   
    </div>
    <img src={shoe10} style={{height:'500px',width:'93%',marginLeft:'40px',}} alt="shoe10"/>

    <div className="text-center" style={{marginTop:'25px'}}>
        
        <p><h1 style={{fontFamily:"revert-layer"}}><b>DIAMOND SHORTS &</b></h1></p>
        <p><h1><b>STADIUM 90S</b></h1></p>
        <p>A modern take on Jumpman classics.The iconic Diamond Shorts are getting an update in bold,eye-catching</p>
        <p>graphics.Style them with the jordan Stadium 90s for everyday wear that offers legendary comfort.</p>
        <Button variant="dark" style={{borderRadius:'500px'}}>Shop</Button>

      </div>
    
      <div style={{ marginLeft: '20px', marginTop: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <h3>Classics Spotlight</h3>
  <div style={{display:'flex'}}><h5></h5>
  <button variant="light" disabled style={{borderRadius:"500px",border:'none',width:'40px'}}>{"<"}</button>
  <button variant="light"  active style={{borderRadius:"500px",border:'none',width:'40px'}}>{">"}</button>
  </div>
</div>
<Container>
      <Row className='scroll-row'>
      <Col xs={12} sm={6} md={4} lg={3}>
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={shoe12} />
      
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={shoe13} />
      
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={shoe14} />
      
    </Card>
    </Col>
     <Col xs={12} sm={6} md={4} lg={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={shoe15} />
      
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={shoe12} />
      
    </Card>
    </Col>
    
   
    </Row>
    </Container>
    <div style={{ marginLeft: '20px', marginTop: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <h3>Shop by Sport</h3>
  </div>

  

<Container>
  <Row className='scroll-row'>
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card style={{ width: '18rem', height: '100%' }}>
        <Card.Img variant="top" src={sport1} />
        <Card.Body>
          <Card.Title>Nike basketball</Card.Title>
          <Card.Text>
            <p style={{color:'grey'}}>Styles made for your game.</p>
            <u>Shop</u>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card style={{ width: '18rem', height: '100%' }}>
        <Card.Img variant="top" src={sport2} />
        <Card.Body>
          <Card.Title>Nike Golf</Card.Title>
          <Card.Text>
            <p style={{color:'grey'}}>Conquer any course in style.</p>
            <u>Shop</u>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card style={{ width: '18rem', height: '100%' }}>
        <Card.Img variant="top" src={sport3} />
        <Card.Body>
          <Card.Title>Nike Tail</Card.Title>
          <Card.Text>
            <p style={{color:'grey'}}>Gear that leads to wild places.</p>
            <u>Shop</u>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card style={{ width: '18rem', height: '100%' }}>
        <Card.Img variant="top" src={sport4} />
        <Card.Body>
          <Card.Title>Nike Tennis</Card.Title>
          <Card.Text>
            <p style={{color:'grey'}}>Serve up in style.</p>
            <u>Shop</u>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card style={{ width: '18rem', height: '100%' }}>
        <Card.Img variant="top" src={sport5} />
        <Card.Body>
          <Card.Title>Nike Football</Card.Title>
          <Card.Text>
            <p style={{color:'grey'}}>Bring mad style to the pitch </p>
            <u>Shop</u>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>

{/* ************************ */}


<div className='row'>
  <div className='col'></div>
  <h3 style={{marginBottom:'50px',marginLeft:'20px',marginTop:'80px'}}>Member Benefits</h3>
  <div className='scroll-row' style={{ display: 'flex' }}>
    <div style={{ position: 'relative', marginRight: '20px', marginLeft:'85px'}}>
      <img src={m1} style={{ height: '500px' ,width:'22rem', marginLeft:'-30px'}} alt="m1" />
      <div style={{ position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white', width: '100%' }}>
        <h5>Member Product</h5> 
        <h6>Your Exclusive Access</h6>
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px', position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        <button
          style={{
            backgroundColor: 'white',
            color: 'Black',
            borderRadius: '500px',
            padding: '10px 20px',
            border: 'none'
          }}
        >
          Shop 
        </button>
      </div>
    </div>
    <div style={{ position: 'relative', marginRight: '20px' }}>
      <img src={m2} style={{ height: '500px', width:'22rem' }} alt="m2" />
      <div style={{ position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white', width: '100%' }}>
        <h5>Nike By you</h5>
        <h6>Your customisation Service</h6>
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px', position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        <button
          style={{
            backgroundColor: 'white',
            color: 'Black',
            borderRadius: '500px',
            padding: '10px 20px',
            border: 'none'
          }}
        >
          Customise
        </button>
      </div>
    </div>
    <div style={{ position: 'relative', marginRight: '20px' }}>
      <img src={m6} style={{ height: '500px', width:'22rem' }} alt="m6" />
      <div style={{ position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white', width: '100%' }}>
        <h5>Member Rewards</h5>
        <h6>How We Say Thank You</h6>
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px', position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        <button
          style={{
            backgroundColor: 'white',
            color: 'Black',
            borderRadius: '500px',
            padding: '10px 20px',
            border: 'none'
          }}
        >
          Celebrate
        </button>
      </div>
    </div>
    <div style={{ position: 'relative', marginRight: '20px' }}>
      <img src={m4} style={{ height: '500px', width:'22rem' }} alt="m4" />
      <div style={{ position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white', width: '100%' }}>
        <h5>Member Days</h5>
        <h6>A celebration of You</h6>
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px', position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        <button
          style={{
            backgroundColor: 'white',
            color: 'Black',
            borderRadius: '500px',
            padding: '10px 20px',
            border: 'none'
          }}
        >
          Learn More
        </button>
      </div>
    </div>
    <div style={{ position: 'relative' }}>
      <img src={m5} style={{ height: '500px', width:'22rem' }} alt="m5" />
      <div style={{ position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white', width: '100%' }}>
        <h5>SNKRS</h5>
        <h6>Your Ultimate Sneaker Community</h6>
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px', position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        <button
          style={{
            backgroundColor: 'white',
            color: 'Black',
            borderRadius: '500px',
            padding: '10px 20px',
            border: 'none'
          }}
        >
          Explore
        </button>
      </div>
    </div>
  </div>
</div>



{/* ************************* */}

     
<container>
  <div style={{marginTop:'50px', display: 'flex',marginLeft:'30px'}}>
    <div style={{flex: '1'}}>
      <ul style={{listStyleType: 'none'}}>
        <b>Icons</b>
        <li>Air Force 1</li>
        <li>Huarache</li>
        <li>Air Max 90</li>
        <li>Air Max 95</li>
      </ul>
    </div>
    <div style={{flex: '1'}}>
      <ul style={{listStyleType: 'none'}}>
        <b>Shoes</b>
        <li>All Shoes</li>
        <li>Custom Shoes</li>
        <li>Jordan Shoes</li>
        <li>Running Shoes</li>
      </ul>
    </div>
    <div style={{flex: '1'}}>
      <ul style={{listStyleType: 'none'}}>
        <b>Clothing</b>
        <li>All Clothing</li>
        <li>Modest Wear</li>
        <li>Hoodies & Pullovers</li>
        <li>Shirts & Tops</li>
      </ul>
    </div>
    <div style={{flex: '1'}}>
      <ul style={{listStyleType: 'none'}}>
        <b>Kids'</b>
        <li>Infant & Toddler Shoes</li>
        <li>Kids' Shoes</li>
        <li>Kids' Jordan Shoes</li>
        <li>Kids' Basketball Shoes</li>
      </ul>
    </div>
  </div>
</container>
 {/* *********************************   */}
 <MDBFooter bgColor='dark' className='text-center text-lg-start text-white' >
      {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section> */}

      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' >
        <MDBContainer className='text-center text-md-start mt-5' >
          <MDBRow className='mt-3' >
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' >
                
                FIND A STORE
                <div style={{marginTop:'7px'}}>BECOME A MEMBER</div>
                <div style={{marginTop:'7px'}}>Send us Feedback</div>
                
                
              
              </h6>
             
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>HELP</h6>
              <div style={{fontSize:'15px'}}>
              <p>
             
                  Get Help
               
              </p>
              <p>
               
                  order Status
               
              </p>
              <p>
                
                 Delivery
              
              </p>
              <p>
                
                 Returns
                
              </p>
              <p>
                
                 Payment Options
                
              </p>
              <p>
                
                 Contact Us On Nike.
                
              </p>
              <p>
                
                 Contact Us
                
              </p>
              </div>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              
              <h6 className='text-uppercase fw-bold mb-4' style={{marginLeft:'15px'}}>COMPANY</h6>
              <div style={{fontSize:'15px'}}>
              <p style={{marginLeft:'35px'}}>
                
                  About Nike
                
              </p>
              <p style={{marginLeft:'35px'}}>
                
                  News
               
              </p>
              <p style={{marginLeft:'35px'}}>
                
                 Careers
                
              </p>
              <p style={{marginLeft:'35px'}}>
                
                 Investors
               
              </p>
              <p style={{marginLeft:'35px'}}>
                
                Sustainability
              
             </p>
             </div>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              
              <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='youtube' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
         
         
        </div>
             
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        
      </section>

      {/* <div className='text p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}> */}
      {/* <lor='secondary'> India </MDBIcon>MDBIcon co */}
      {/* <i class="fa-solid fa-location-dot"></i>  India
         © 2024 Nike,Inc.All  rights reserved.
        
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
         
        </a>
      </div> */}

<div className='text p-4' style={{display: 'flex', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.05)',marginLeft:'130px' }}>
      <i class="fa-solid fa-location-dot" style={{marginLeft:'-120px',marginTop:'-8px'}}></i><p style={{paddingLeft:'10px',marginRight: 'auto'}}>India</p>
        <div style={{ display: 'flex', gap: '10px' }}>
        <p style={{marginLeft:'-230px',marginRight:'400px'}}>&nbsp;&copy;2024 Nike,Inc.All rights reserved</p>
        <p>Guide</p>&nbsp;
        <p>Terms of Sale</p>&nbsp;
        <p>Terms of Use</p>&nbsp;
        <p>Nike Privacy Policy</p>&nbsp;
        </div>
      </div>
    </MDBFooter>

 {/* ************************************ */}
    </div>
    

    
  );
}

export default App;
