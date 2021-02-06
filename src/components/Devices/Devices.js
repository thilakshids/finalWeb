import React, { Component } from "react";
import './Devices.css';
import {Carousel,Card,Button,Table} from 'react-bootstrap';

 class Devices extends Component {

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
                src="/images/dslide2.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img2"
                src="/images/dslide1.jpg"
                alt="Third slide"
              />       
              <Carousel.Caption>
               
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img3"
                src="/images/dslide3.jpg"
                alt="Third slide"
              />         
              <Carousel.Caption>
               
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
       </center>  
       <hr></hr>
       <h1>Laptops</h1>
       <br/>
      <Table striped bordered hover><center>
    <tbody>
    <tr>
      <td> 
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/hp.jpg" />
      <Card.Body>
      <Card.Title>HP Pavilion Laptop</Card.Title>
      <h5>LKR 194,235</h5>
      <h5>Softlogic - Moratuwa</h5>
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
      <Card.Img variant="top" src="/images/acer.jpg" />
      <Card.Body>
      <Card.Title>ACER Aspire 10th Gen</Card.Title>
      <h5>LKR 139,900</h5>
      <h5>Abans Elite - Piliyandala</h5>
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
      <Card.Img variant="top" src="/images/asus.jpg" />
      <Card.Body>
      <Card.Title>ASUS P1440FA</Card.Title>
      <h5>LKR 126,000</h5>
      <h5>Singer - Katubedda</h5>
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
      <Card.Img variant="top" src="/images/dell.jpg" />
      <Card.Body>
      <Card.Title>Dell Inspiron 3593 </Card.Title>
      <h5>LKR 92,490</h5>
      <h5>Softlogic - Piliyandala</h5>
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
    

      <h1>Headphones</h1>
      <br/>
      <Table striped bordered hover><center>
      <tbody>
      <tr>
      <td> 
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/headphone.jpg" />
      <Card.Body>
      <Card.Title>Bluetooth Headphone </Card.Title>
      <h5>LKR 1750.00</h5>
      <h5>Smart Arcade - Moratuwa</h5>
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
      <Card.Img variant="top" src="/images/headphone1.jpg" />
      <Card.Body>
      <Card.Title>Sony Headphone</Card.Title>
      <h5>LKR 2250.00</h5>
      <h5>Softlogic - Piliyandala</h5>
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
      <Card.Img variant="top" src="/images/headphone2.jpg" />
      <Card.Body>
      <Card.Title>Wireless Headphone</Card.Title>
      <h5>LKR 2650.00</h5>
      <h5>Softlogic - Moratuwa</h5>
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
      <Card.Img variant="top" src="/images/headphone3.jpg" />
      <Card.Body>
      <Card.Title>Focal Wireless Headphone</Card.Title>
      <h5>LKR 2850.00</h5>
      <h5>Abans Elite - Piliyandala</h5>
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


      <h1>Pen Drives</h1>
      <br/>
      <Table striped bordered hover><center>
      <tbody>
      <tr>
      <td> 
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/pen3.jpg" />
      <Card.Body>
      <Card.Title>USB Flash Drive 32GB</Card.Title>
      <h5>LKR 2850.00</h5>
      <h5>Abans Elite - Piliyandala</h5>
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
      <Card.Img variant="top" src="/images/pen1.jpg" />
      <Card.Body>
      <Card.Title>Original SanDisk 128GB</Card.Title>
      <h5>LKR 2025.00</h5>
      <h5>Softlogic - Moratuwa</h5>
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
      <Card.Img variant="top" src="/images/pendrve.jpg" />
      <Card.Body>
      <Card.Title>Sandisk 32GB Pendrive</Card.Title>
      <h5>LKR 1765.00</h5>
      <h5>Singer - Katubedda</h5>
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
      <Card.Img variant="top" src="/images/pen4.jpg" />
      <Card.Body>
      <Card.Title>Kingston 64GB</Card.Title>
      <h5>LKR 780.00</h5>
      <h5>C Solutions - Piliyandala</h5>
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
export default Devices;