import React, { Component } from "react";
import './Cosmetics.css';
import {Carousel,Card,Button,Table} from 'react-bootstrap';


 class Cosmetics extends Component {
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
              src="/images/cslide3.jpg"
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
              src="/images/cslide1.jpg"
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
              src="/images/cslide2.jpg"
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
     <h1>Skin Care</h1>
     <br/>
    <Table striped bordered hover><center>
  <tbody>
  <tr>
    <td> 
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="/images/CleannClear.jpg" />
    <Card.Body>
    <Card.Title>Clean & Clear face wash</Card.Title>
    <h5>LKR 165.00</h5>
    <h5>Saweena - Piliyandala</h5>
    <Card.Text>
        
    </Card.Text>
    <button onClick={this.incrementtoone} className="counter"> + </button>
                                        <input type="text" value={this.state.count1} className="text"></input>
                                        <button onClick={this.decrementtoone} className="counter"> - </button>
      <br/>
      <br/>
    <Button variant="primary">Add to Cart</Button>
    </Card.Body>
    </Card></td>
    <td> <Card style={{ width: '18rem'}}>
    <Card.Img variant="top" src="/images/toner.jpg" />
    <Card.Body>
    <Card.Title>Rose Water Toner</Card.Title>
    <h5>LKR 230.00</h5>
    <h5>Asariya Fancy - Moratuwa</h5>
    <Card.Text>
        
    </Card.Text>
    <button onClick={this.incrementotwo} className="counter"> + </button>
                                        <input type="text" value={this.state.count2} className="text"></input>
                                        <button onClick={this.decrementtotwo} className="counter"> - </button>
      <br/>
      <br/>
    <Button variant="primary">Add to Cart</Button>
    </Card.Body>
    </Card></td>
    <td> <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="/images/chandanaleepa.jpg" />
    <Card.Body>
    <Card.Title>Chandanaleepa</Card.Title>
    <h5>LKR 200.00</h5>
    <h5>Shop In - Mount Lavinia </h5>
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
    <Card.Img variant="top" src="/images/forever5cleanupscrub.jpg" />
    <Card.Body>
    <Card.Title>Venivel Clean-Up</Card.Title>
    <h5>LKR 450.00</h5>
    <h5>Asariya Fancy - Moratuwa</h5>
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
  

     <h1>Hair Care</h1>
     <br/>
    <Table striped bordered hover><center>
  <tbody>
  <tr>
    <td> 
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="/images/lorealtotalrepairshampoo.jpg" />
    <Card.Body>
    <Card.Title>Loreal Hair Shampoo</Card.Title>
    <h5>LKR 1350.00</h5>
    <h5>Fancy paradise - Dehiwala</h5>
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
    <Card.Img variant="top" src="/images/kumarikahairoil.jpg" />
    <Card.Body>
    <Card.Title>Kumarika hair oil</Card.Title>
    <h5>LKR 150.00</h5>
    <h5>Shop In - Mount Lavinia</h5>
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
    <Card.Img variant="top" src="/images/doveshampoo.jpg" />
    <Card.Body>
    <Card.Title>Dove Shampoo</Card.Title>
    <h5>LKR 370.00</h5>
    <h5>Saweena - Piliyandala</h5>
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
    <Card.Img variant="top" src="/images/Revlonhaircolor.jpg" />
    <Card.Body>
    <Card.Title>Revlon Black hair color</Card.Title>
    <h5>LKR 1500.00</h5>
    <h5>Angels - Moratuwa</h5>
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


     <h1>Makeup</h1>
     <br/>
    <Table striped bordered hover><center>
  <tbody>
  <tr>
    <td> 
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="/images/KumadoriLipstick.jpg" />
    <Card.Body>
    <Card.Title>Kumadori Lipstick</Card.Title>
    <h5>LKR 450.00</h5>
    <h5>Saweena - Piliyandala</h5>
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
    <Card.Img variant="top" src="/images/PerfectMatEyeliner.jpg" />
    <Card.Body>
    <Card.Title>Perfect Matte Eyeliner</Card.Title>
    <h5>LKR 650.00</h5>
    <h5>K-Zone - Katubedda</h5>
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
    <Card.Img variant="top" src="/images/VianaMoisturizingCompactPowder.jpg" />
    <Card.Body>
    <Card.Title>Viana Compact Powder</Card.Title>
    <h5>LKR 720.00</h5>
    <h5>Fancy Corner - Piliyandala</h5>
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
    <Card.Img variant="top" src="/images/VianaPowderBrush.jpg" />
    <Card.Body>
    <Card.Title>Viana Powder Brush</Card.Title>
    <h5>LKR 1220.00</h5>
    <h5>Angels - Moratuwa</h5>
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
export default Cosmetics;