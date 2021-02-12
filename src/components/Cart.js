
import React, { Fragment } from 'react';
import './Cart.css';
// import Header from './Header';
import { Button } from 'reactstrap';
import * as ReactBootStrap from "react-bootstrap";
import { render } from '@testing-library/react';
import { useHistory } from 'react-router-dom';

 
const Cart = () => {
  const orders=[
    {itemno:"P001",itemname:"Burger",unitprice:"400",qty:"2",unittotal:"800"},
    {itemno:"P011",itemname:"Atlas Book",unitprice:"100",qty:"10",unittotal:"1000"},
    {itemno:"P0189",itemname:"MI Handfree",unitprice:"950",qty:"1",unittotal:"950"},
    {itemno:"P0012",itemname:"Kibula Banis",unitprice:"25",qty:"10",unittotal:"250"},
  ]
  const history = useHistory();
   
  const renderOreder = (order,index) =>{
   return(
    <tr key={index}>
      <td>{order.itemno}</td>
      <td>{order.itemname}</td>
      <td>{order.unitprice}</td>
      <td>{order.qty}</td>
      <td>{order.unittotal}</td>

    </tr>

   );

  }
  return(
    <div>
      <card className="hove">
        <div className="tab">
    <ReactBootStrap.Table striped bordered hover >
  <thead className="th">
    <tr>
      <th>Item No</th>
      <th>Item Name</th>
      <th>Unit Price</th>
      <th>Unit Qty</th>
      <th>Unit Total</th>
    </tr>
  </thead>
  <tbody className="tb">
        {orders.map( renderOreder)}
  </tbody>
</ReactBootStrap.Table> </div>
<Button color="danger" onClick={() => history.push('online')}>Online</Button>
<br/>
<Button color="danger" onClick={() => history.push('qrcode')}>Cash</Button>
</card>
   </div>
  );
  
  }
  export default Cart;
  
  