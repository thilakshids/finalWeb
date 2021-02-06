import React, { Component } from "react";
import './Grocery.css';
import {Carousel,Card,Button,Table} from 'react-bootstrap';


 class Grocery extends Component {

  constructor(props) {
    super(props);
    this.state = {
        count1: 0,
        count2: 0,
        count3: 0,
        count4: 0,
        count5: 0,
        count6: 0,
        count7: 0,
        count8: 0,
        count9: 0,
        count10: 0,
        count11: 0,
        count12: 0,
     
    }
}

incrementtoone = () => {
    this.setState({ count1: this.state.count1 + 1 });
    
}

incrementotwo = () => {
   
    this.setState({ count2: this.state.count2 + 1 });
}

incrementothree = () => {
   
    this.setState({ count3: this.state.count3 + 1 });
}

incrementofour = () => {
   
    this.setState({ count4: this.state.count4 + 1 });
}

incrementofive = () => {
   
    this.setState({ count5: this.state.count5 + 1 });
}

incrementosix = () => {
   
    this.setState({ count6: this.state.count6 + 1 });
}

incrementoseven = () => {
   
    this.setState({ count7: this.state.count7 + 1 });
}

incrementoeight = () => {
   
    this.setState({ count8: this.state.count8 + 1 });
}

incrementonine = () => {
   
    this.setState({ count9: this.state.count9 + 1 });
}

incrementoten = () => {
   
    this.setState({ count10: this.state.count10 + 1 });
}

incrementoeleven = () => {
   
    this.setState({ count11: this.state.count11 + 1 });
}

incrementotwelve = () => {
   
    this.setState({ count12: this.state.count12 + 1 });
}



decrementtoone = () => {
    this.setState({ count1: this.state.count1 - 1 });
  
}
decrementtotwo = () => {
   
    this.setState({ count2: this.state.count2 - 1 });
}

decrementtothree = () => {
   
    this.setState({ count3: this.state.count3 - 1 });
}
decrementtofour = () => {
   
    this.setState({ count4: this.state.count4 - 1 });
}
decrementtofive = () => {
   
    this.setState({ count5: this.state.count5 - 1 });
}
decrementtosix = () => {
   
    this.setState({ count6: this.state.count6 - 1 });
}
decrementtoseven = () => {
   
    this.setState({ count7: this.state.count7 - 1 });
}
decrementtoeight = () => {
   
    this.setState({ count8: this.state.count8 - 1 });
}

decrementtonine = () => {
   
    this.setState({ count9: this.state.count9 - 1 });
}

decrementtoten = () => {
   
    this.setState({ count10: this.state.count10 - 1 });
}

decrementtoeleven = () => {
   
    this.setState({ count11: this.state.count11 - 1 });
}
decrementtotwelve = () => {
   
    this.setState({ count12: this.state.count12 - 1 });
}
    render(){
        return(
            <div>
            <br/>
            <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="What are you Search?" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                  <div class="input-group-append">
                      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                  </div> 
            </div>
              <br/>          
                <center>
              <Carousel className="carosl">
              <Carousel.Item>
                <img
                  className="img1"
                  src="/images/gslide1.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img2"
                  src="/images/gslide2.jpg"
                  alt="Third slide"
                />       
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img3"
                  src="/images/gslide3.jpg"
                  alt="Third slide"
                />         
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
         </center>  
         <hr></hr>
         <h1>Rice/Sugar/Essentials</h1>
         <br/>
        <Table striped bordered hover><center>
      <tbody>
      <tr>
        <td> 
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/essential1.jpg" />
        <Card.Body>
        <Card.Title>Orient Brown Sugar</Card.Title>
        <h5>LKR 267.00</h5>
        <h5>Keells Super - Moratuwa</h5>
        <Card.Text>
        </Card.Text>
        <button onClick={this.incrementtoone} className="counter"> + </button>
                                        <input type="text" value={this.state.count1} className="text"></input>
                                        <button onClick={this.decrementtoone} className="counter"> - </button>

                                        <br />
                                        <br />
        <Button variant="primary">Add to Cart</Button>
        </Card.Body>
        </Card></td>
        <td> <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src="/images/essential2.jpg" />
        <Card.Body>
        <Card.Title>CIC Golden Crop</Card.Title>
        <h5>LKR 400.00</h5>
        <h5>Cargills - Piliyandala</h5>
        <Card.Text>
        </Card.Text>
        <button onClick={this.incrementotwo} className="counter"> + </button>
                                        <input type="text" value={this.state.count2} className="text"></input>
                                        <button onClick={this.decrementtotwo} className="counter"> - </button>
                                        <br />
                                        <br />
        <Button variant="primary">Add to Cart</Button>
        </Card.Body>
        </Card></td>
        <td> <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/essential3.jpg" />
        <Card.Body>
        <Card.Title>Coconut Milk Powder</Card.Title>
        <h5>LKR 350.00</h5>
        <h5>Lanka Sathosa - Piliyandala</h5>
        <Card.Text>
        </Card.Text>
        <button onClick={this.incrementothree} className="counter"> + </button>
            <input type="text" value={this.state.count3} className="text"></input>
            <button onClick={this.decrementtothree} className="counter"> - </button>
            <br/>
            <br/>
        <Button variant="primary">Add to Cart</Button>
        </Card.Body>
        </Card></td>
        <td> <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/essential4.jpg" />
        <Card.Body>
        <Card.Title>String Hopper Flour</Card.Title>
        <h5>LKR 220.00</h5>
        <h5>Lanka Sathosa - Katubedda</h5>
        <Card.Text>
        </Card.Text>
        <button onClick={this.incrementofour} className="counter"> + </button>
             <input type="text" value={this.state.count4} className="text"></input>
             <button onClick={this.decrementtofour} className="counter"> - </button>
             <br/>
             <br/>
        <Button variant="primary">Add to Cart</Button>
        </Card.Body>
        </Card></td>     
      </tr>
      </tbody></center>
    </Table>  
      
    
         <h1>Dairy Products(Cheese,Milk...)</h1>
         <br/>
        <Table striped bordered hover><center>
      <tbody>
      <tr>
        <td> 
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/dairy1.jpg" />
        <Card.Body>
        <Card.Title>Ariya Milk Powder</Card.Title>
        <h5>LKR 480.00</h5>
        <h5>Cargills – Mount Lavinia</h5>
        <Card.Text>
        </Card.Text>
        <button onClick={this.incrementofive} className="counter"> + </button>
      <input type="text" value={this.state.count5} className="text"></input>
      <button onClick={this.decrementtofive} className="counter"> - </button>
      <br/>
      <br/>
        <Button variant="primary">Add to Cart</Button>
        </Card.Body>
        </Card></td>
        <td> <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/dairy2.jpg" />
        <Card.Body>
        <Card.Title>Anchor Fresh Milk</Card.Title>
        <h5>LKR 360.00</h5>
        <h5>Lanka Sathosa - Katubedda</h5>
        <Card.Text>
        </Card.Text>
        <button onClick={this.incrementosix} className="counter"> + </button>
      <input type="text" value={this.state.count6} className="text"></input>
      <button onClick={this.decrementtosix} className="counter"> - </button>
      <br/>
      <br/>
        <Button variant="primary">Add to Cart</Button>
        </Card.Body>
        </Card></td>
        <td> <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/dairy3.jpg" />
        <Card.Body>
        <Card.Title>Happy Cow Cheese</Card.Title>
        <h5>LKR 510.00</h5>
        <h5>Keells Super - Moratuwa</h5>
        <Card.Text>
        </Card.Text>
        <button onClick={this.incrementoseven} className="counter"> + </button>
      <input type="text" value={this.state.count7} className="text"></input>
      <button onClick={this.decrementtoseven} className="counter"> - </button>
      <br/>
      <br/>
        <Button variant="primary">Add to Cart</Button>
        </Card.Body>
        </Card></td>
        <td> <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/dairy4.jpg" />
        <Card.Body>
        <Card.Title>Anchor Newdale</Card.Title>
        <h5>LKR 60.00</h5>
        <h5>Lanka Sathosa - Piliyandala</h5>
        <Card.Text>
        </Card.Text>
        <button onClick={this.incrementoeight} className="counter"> + </button>
      <input type="text" value={this.state.count8} className="text"></input>
      <button onClick={this.decrementtoeight} className="counter"> - </button>
      <br/>
      <br/>
        <Button variant="primary">Add to Cart</Button>
        </Card.Body>
        </Card></td>     
      </tr>
      </tbody></center>
    </Table>  
    
    
         <h1>Bagged Foods(Onions,Potato...)</h1>
         <br/>
        <Table striped bordered hover><center>
      <tbody>
      <tr>
        <td> 
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/bagged1.jpg" />
        <Card.Body>
        <Card.Title>Orient Mysoor Dhall</Card.Title>
        <h5>LKR 310.00</h5>
        <h5>Family Super - Dehiwala</h5>
        <Card.Text>
        </Card.Text>
        <button onClick={this.incrementonine} className="counter"> + </button>
      <input type="text" value={this.state.count9} className="text"></input>
      <button onClick={this.decrementtonine} className="counter"> - </button>
      <br/>
      <br/>
        <Button variant="primary">Add to Cart</Button>
        </Card.Body>
        </Card></td>
        <td> <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/bagged2.jpg" />
        <Card.Body>
        <Card.Title>Bombai Onion</Card.Title>
        <h5>LKR 387.00</h5>
        <h5>Cargills - Rawathawatta</h5>
        <Card.Text>
        </Card.Text>
        <button onClick={this.incrementoten} className="counter"> + </button>
      <input type="text" value={this.state.count10} className="text"></input>
      <button onClick={this.decrementtoten} className="counter"> - </button>
      <br/>
      <br/>
        <Button variant="primary">Add to Cart</Button>
        </Card.Body>
        </Card></td>
        <td> <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/bagged3.jpg" />
        <Card.Body>
        <Card.Title>Orient White Cowpea</Card.Title>
        <h5>LKR 526.00</h5>
        <h5>Keells Super - Moratuwa</h5>
        <Card.Text>
        </Card.Text>
        <button onClick={this.incrementoeleven} className="counter"> + </button>
      <input type="text" value={this.state.count11} className="text"></input>
      <button onClick={this.decrementtoeleven} className="counter"> - </button>
      <br/>
      <br/>
        <Button variant="primary">Add to Cart</Button>
        </Card.Body>
        </Card></td>
        <td> <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/bagged4.jpg" />
        <Card.Body>
        <Card.Title>1 KG Potatoes</Card.Title>
        <h5>LKR 369.00</h5>
        <h5>Keells Super - Rathmalana</h5>
        <Card.Text>
        </Card.Text>
        <button onClick={this.incrementotwelve} className="counter"> + </button>
      <input type="text" value={this.state.count12} className="text"></input>
      <button onClick={this.decrementtotwelve} className="counter"> - </button>
      <br/>
      <br/>
        <Button variant="primary">Add to Cart</Button>
        </Card.Body>
        </Card></td>     
      </tr>
      </tbody></center>
    </Table> 
       
        </div>
        );
    }
}
export default Grocery;