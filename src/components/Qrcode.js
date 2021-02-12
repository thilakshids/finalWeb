import React,{ useRef} from "react";
 import QRCode from "react-qr-code";

export default function App(){

  return(
    <div className={'Signature'}><center>
      <h2>Scan your QR code when you recieve the order</h2>
      
<QRCode
  value="shop"
  size={250}
  level={"H"}
  includeMargin={true}
  />
 
     </center> </div>
  )
}

