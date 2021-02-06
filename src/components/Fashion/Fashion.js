import React, { Component } from "react";
import './Fashion.css';
import {Carousel,Card,Button,Table} from 'react-bootstrap';

 class Fashion extends Component {

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
                  src="/images/faslide2.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img2"
                  src="/images/faslide1.jpg"
                  alt="Third slide"
                />       
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img3"
                  src="/images/faslide3.jpg"
                  alt="Third slide"
                />         
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
         </center>  
         <hr></hr>
         <h1>Kids</h1>
         <br/>
        <Table striped bordered hover><center>
      <tbody>
      <tr>
        <td> 
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/kids1.jpg" />
        <Card.Body>
        <Card.Title>Organic Cotton Frock</Card.Title>
        <h5>LKR 1890.00</h5>
        <h5>Velona - Moratuwa</h5>
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
        <Card.Img variant="top" src="/images/kids2.jpg" />
        <Card.Body>
        <Card.Title>Baby Party Frock</Card.Title>
        <h5>LKR 2350.00</h5>
        <h5>Fashion Hub - Piliyandala</h5>
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
        <Card.Img variant="top" src="/images/kids3.jpg" />
        <Card.Body>
        <Card.Title>Baby Boy Kit</Card.Title>
        <h5>LKR 2250.00</h5>
        <h5>Fashion Bug - Moratuwa</h5>
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
        <Card.Img variant="top" src="/images/kids4.jpg" />
        <Card.Body>
        <Card.Title>Boy's Shirt</Card.Title>
        <h5>LKR 1850.00</h5>
        <h5>ODEL - K-Zone Moratuwa</h5>
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
      
    
         <h1>Ladies</h1>
         <br/>
        <Table striped bordered hover><center>
      <tbody>
      <tr>
        <td> 
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/ladies2.jpg" />
        <Card.Body>
        <Card.Title>Melissa Red Border Frock</Card.Title>
        <h5>LKR 3490.00</h5>
        <h5>ODEL - K-Zone Moratuwa</h5>
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
        <Card.Img variant="top" src="/images/ladies3.jpg" />
        <Card.Body>
        <Card.Title>Flow Linen Trouser</Card.Title>
        <h5>LKR 1560.00</h5>
        <h5>Fashion Hub - Piliyandala</h5>
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
        <Card.Img variant="top" src="/images/ladies1.jpg" />
        <Card.Body>
        <Card.Title>Sleeveless Casual Frock</Card.Title>
        <h5>LKR 1500.00</h5>
        <h5>Fashion Bug - Moratuwa</h5>
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
        <Card.Img variant="top" src="/images/ladies4.jpg" />
        <Card.Body>
        <Card.Title>Green Cotton Saree</Card.Title>
        <h5>LKR 2450.00</h5>
        <h5>ODEL - K-Zone Moratuwa</h5>
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
    
    
         <h1>Gents</h1>
         <br/>
        <Table striped bordered hover><center>
      <tbody>
      <tr>
        <td> 
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/gents1.jpg" />
        <Card.Body>
        <Card.Title>cotton casual shirt</Card.Title>
        <h5>LKR 2450.00</h5>
        <h5>ODEL - K-Zone Moratuwa</h5>
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
        <Card.Img variant="top" src="/images/gents3.jpg" />
        <Card.Body>
        <Card.Title>Casual Black Shirt</Card.Title>
        <h5>LKR 1750.00</h5>
        <h5>Fashion Hub - Piliyandala</h5>
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
        <Card.Img variant="top" src="/images/gents2.jpg" />
        <Card.Body>
        <Card.Title>Denim Long Trouser</Card.Title>
        <h5>LKR 3590.00</h5>
        <h5>Fashion Bug - Moratuwa</h5>
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
        <Card.Img variant="top" src="/images/gents4.jpg" />
        <Card.Body>
        <Card.Title>Striped Casual Shirt</Card.Title>
        <h5>LKR 2300.00</h5>
        <h5>Velona - Moratuwa</h5>
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
export default Fashion;