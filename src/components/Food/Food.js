import React, { Component } from "react";
import './Food.css';
import { Carousel, Card, Button, Table } from 'react-bootstrap';

class Food extends Component {
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

    
    render() {

    return (
        
       <div>
       <br />
       <div class="input-group mb-3">
       <input type="text" class="form-control" placeholder="What are you craving?" aria-label="Recipient's username" aria-describedby="button-addon2" />
       <div class="input-group-append">
       <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
       </div>
       </div>
       <br />
       <center>
       <Carousel className="carosl">
       <Carousel.Item>
       <img
            className="img1"
            src="/images/fslide2.jpg"
            alt="First slide"
       />
       <Carousel.Caption>                  
       </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
       <img
           className="img2"
           src="/images/fslide1.jpg"
           alt="Third slide"
      />
      <Carousel.Caption>                              
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="img3"
          src="/images/fslide3.jpg"
          alt="Third slide"
      />
      <Carousel.Caption>                              
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </center>

      <hr></hr>

      <h1>Buffets</h1>
      <br />
      <Table striped bordered hover><center>
      <tbody>
      <tr>
      <td>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/rice.jpg" />
      <Card.Body>
      <Card.Title>Chicken Fride Rice</Card.Title>
      <h5>LKR 420.00</h5>
      <h5>Rasinvil Hotel - Ratmalana</h5>
      <Card.Text>              
      </Card.Text>
      <button onClick={this.incrementtoone} className="counter"> + </button>
      <input type="text" value={this.state.count1} className="text"></input>
      <button onClick={this.decrementtoone} className="counter"> - </button>
      <br />
      <br />
      <Button variant="primary">Add to Cart</Button>
      </Card.Body>
      </Card>
      </td>
      <td>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/koththu.jpg" />
      <Card.Body>
      <Card.Title>Chicken koththu</Card.Title>
      <h5>LKR 350.00</h5>
      <h5>Lia's Restaurant - Moratuwa</h5>
      <Card.Text>   
      </Card.Text>
      <button onClick={this.incrementotwo} className="counter"> + </button>
      <input type="text" value={this.state.count2} className="text"></input>
      <button onClick={this.decrementtotwo} className="counter"> - </button>
      <br />
      <br />
      <Button variant="primary">Add to Cart</Button>
      </Card.Body>
      </Card>
      </td>
      <td> 
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/ricencurry.jpg" />
      <Card.Body>
      <Card.Title>Chicken Rice and Curry</Card.Title>
      <h5>LKR 290.00</h5>
      <h5>Nelum Kole - Bokundara</h5>
      <Card.Text>        
      </Card.Text>
      <button onClick={this.incrementothree} className="counter"> + </button>
      <input type="text" value={this.state.count3} className="text"></input>
      <button onClick={this.decrementtothree} className="counter"> - </button>
      <br/>
      <br/>
      <Button variant="primary">Add to Cart</Button>
      </Card.Body>
      </Card>
      </td>
      <td> 
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/string-hoppers.jpg" />
      <Card.Body>
      <Card.Title>String Hoppers</Card.Title>
      <h5>LKR 120.00</h5>
      <h5>Kaala Balan - Ratmalana</h5>
      <Card.Text>
      </Card.Text>
      <button onClick={this.incrementofour} className="counter"> + </button>
      <input type="text" value={this.state.count4} className="text"></input>
      <button onClick={this.decrementtofour} className="counter"> - </button>
      <br/>
      <br/>
      <Button variant="primary">Add to Cart</Button>
      </Card.Body>
      </Card>
      </td>     
      </tr>
      </tbody>
      </center>
      </Table>  


      <h1>Fast Foods</h1>
      <br/>
      <Table striped bordered hover><center>
      <tbody>
      <tr>
      <td> 
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/pizza.jpg" />
      <Card.Body>
      <Card.Title>Devilled Chicken Pizza</Card.Title>
      <h5>LKR 500.00</h5>
      <h5>Pizza Hut - Piliyandala</h5>
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
      <Card.Img variant="top" src="/images/chickendrumsticks.jpg" />
      <Card.Body>
      <Card.Title>Chicken Drumsticks </Card.Title>
      <h5>LKR 240.00</h5>
      <h5>KFC - Mount Lavinia</h5>
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
      <Card.Img variant="top" src="/images/burger.jpg" />
      <Card.Body>
      <Card.Title>Burger</Card.Title>
      <h5>LKR 450.00</h5>
      <h5>McDonald's - Dehiwala</h5>   
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
      <Card.Img variant="top" src="/images/hoppers.jpg" />
      <Card.Body>
      <Card.Title>Egg Hoppers</Card.Title>
      <h5>LKR 25.00</h5>
      <h5>Kaala Balan - Ratmalana</h5> 
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


      <h1>Juice and Smoothies</h1>
      <br/>
      <Table striped bordered hover><center>
      <tbody>
      <tr>
      <td> 
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/milkshake.jpg" />
      <Card.Body>
      <Card.Title>Chocolate Milkshake</Card.Title>
      <h5>LKR 180.00</h5>
      <h5>Squeeze - Borupona Road</h5> 
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
      <Card.Img variant="top" src="/images/avacado.jpg" />
      <Card.Body>
      <Card.Title>Avacado</Card.Title> 
      <h5>LKR 140.00</h5>
      <h5>Roots K-Zone - Katubedda</h5> 
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
      <Card.Img variant="top" src="/images/pineapple.jpg" />
      <Card.Body>
      <Card.Title>Pineapple</Card.Title>
      <h5>LKR 120.00</h5>
      <h5> Sweety Foods - Moratuwa</h5>      
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
      <Card.Img variant="top" src="/images/lemonwater.jpg" />
      <Card.Body>
      <Card.Title>Lemon Juice</Card.Title>
      <h5>LKR 110.00</h5>
      <h5> Juice Life - Moratuwa</h5> 
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

export default Food;










