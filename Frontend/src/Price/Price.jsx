import { useState } from "react";
import { Button } from "@nextui-org/react"

import {Modal, ModalContent,ModalBody, ModalFooter,useDisclosure,Spinner,Input} from "@nextui-org/react";

function Price() {
  let [visible, setVisible] = useState(false)
  let [showSuccess, setShowSuccess] = useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const handleConfirm = () => {
    setVisible(true);

    // Simulate a delay of 1 second before showing the success message
    setTimeout(() => {
      setShowSuccess(true);
    }, 1000);
  };
    return (
      <>
       <div style={{backgroundColor:'#000921',}}>
        <div style={{display:'flex', flexDirection:'row',textAlign:'center',justifyContent:'start'}}>
            <div style={{width:'120px', height:'30px',color:'white',backgroundColor:'#092879'}}>BUY</div>
            <div style={{width:'120px' , height:'30px' , border:'0.5px solid white',color:'white'}}>SELL</div>
        </div>
        <div className="limit">
            <p style={{color:'#5181FF'}}>LIMIT</p>
            <p>MARKET</p>
        </div>
        <div style={{margin:'8px'}}>
            <input type="number" placeholder="Quantity" className="price__input "/>
            <input type="number" placeholder="Price = 184.32USD" className="price__input"/>
        </div>
        <p style={{color:'white' , textAlign:"right"}}>Price: 1 Stock = 184.32 USD</p>
        <input type="number" placeholder="TOTAL(USD)" className="price__input "/>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'16px'}}>
        <Button onPress={onOpen} className="buy__button">Buy</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="md" >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody style={{backgroundColor:'#000920',paddingTop:'4rem' , paddingBottom:'4rem'}}>
            { !visible ? <div>
              <h1 style={{color:'white'}}>TRANSACTION DETAILS</h1>
              <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:'1.5rem auto'}}>
                <p style={{color:'white' , fontSize:'14px'}}>Chain Id:</p>
                <p style={{color:'white', fontSize:'14px'}}>1</p>
              </div>
              <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:'1.5rem auto'}}>
                <p style={{color:'white',fontSize:'14px'}}>Company Name</p>
                <p style={{color:'white',fontSize:'14px'}}>Apple</p>
              </div>
              <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:'1.5rem auto'}}>
                <p style={{color:'white',fontSize:'14px'}}>No of Stocks</p>
                <p style={{color:'white', fontSize:'14px'}}>5000</p>
              </div>
              <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:'1.5rem auto'}}>
                <p style={{color:'white' , fontSize:'14px'}}>Public Key</p>
                <p style={{color:'white',fontSize:'12px'}}>0x1fcCb449abb05a137427c4C2D93528bE739Df329</p>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:'1.5rem auto'}}>
                <p style={{color:'white' , fontSize:'14px'}}>Total</p>
                <p style={{color:'white',fontSize:'12px'}}>921600</p>
                </div>
                <ModalFooter>
                <Button  style={{backgroundColor:'#06e7ed',color:'black', fontWeight:'600'}} onClick={handleConfirm}>
                  Confirm
                </Button>
              </ModalFooter>
            </div> : null
              
            }
                {visible && !showSuccess ?  <div>
                  <div style={{textAlign:'center'}}>
                <Spinner/>
                  <p style={{color:'white',fontSize:'20px'}}>Waiting for Confirmation</p>
                  <p style={{color:'white'}}>Confirm this Transaction in your wallet</p>
                  </div>
                  </div>     
                  : null}
                {
                  showSuccess ? <div style={{textAlign:'center'}}>
                  <p style={{color:'white',fontSize:'16px'}}>✔</p>
                  <p style={{color:'white',fontSize:'20px'}}>Successful</p>
                  </div> : null
                }
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
        </div>
        <div className="market__container">
          <p style={{color:'#5181FF',fontWeight:'500'}}>MARKET TRADES</p>
          <p style={{color:'white'}}>MARKET INFO</p>
        </div>
        <div>
        <thead>
    <tr >
      <th scope="col" >Company</th>
      <th scope="col" style={{paddingRight:'50px'}}>Price</th>
      <th scope="col" style={{paddingRight:'50px'}}>%Change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th style={{display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/microsoft.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Microsoft Inc </th>       <td>404.3</td>
      <td>0.61</td>
    </tr>
    <tr>
    <th style={{display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/amazon.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Amazon INC</th>       <td>169.51</td>
      <td>0.17</td>
    </tr><tr>
    <th style={{display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/apple.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Apple Inc </th>       <td>184.32</td>
      <td>1.55</td>
    </tr><tr>
    <th style={{display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/meta.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Meta </th>       <td>473.32</td>
      <td>0.33</td>
    </tr>
    <tr>
    <th style={{display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/nvidia.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Nvidia Corp</th>       <td>726.13</td>
      <td>0.43</td>
    </tr>
    <tr>
    <th style={{display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/asus.png" alt="" style={{height:'16px' , width:'16px'}}/>
      ASUSTEK Inc</th>       <td>479.50</td>
      <td>3.34</td>
    </tr>
    <tr>
    <th style={{display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/intel.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Intel Corp</th>       <td>43.51</td>
      <td>0.54</td>
    </tr>
    <tr>
    <th style={{display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/amd.png" alt="" style={{height:'16px' , width:'16px'}}/>
      AMD</th>       <td>173.87</td>
      <td>1.63</td>
    </tr>
  </tbody>
        </div>
       </div>
      </>
    )
  }
  
export default Price