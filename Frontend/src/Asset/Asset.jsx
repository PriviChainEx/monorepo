function Asset() {

    return (
      <>
      <div style={{marginTop:'2rem',marginRight:'4rem',marginLeft:'16rem'}}>
       <table>
       <thead>
    <tr style={{backgroundColor:'#000F37',}}>
    <th scope="col" style={{paddingRight:'50px',paddingLeft:'50px',}}>Company</th>
      <th scope="col" style={{paddingRight:'50px',paddingLeft:'50px'}}>Quantity</th>
      <th scope="col" style={{paddingRight:'50px'}}>Value</th>
      <th scope="col" style={{paddingRight:'50px'}}>Side</th>
      <th scope="col" style={{paddingRight:'50px'}}>Unrealised P&L</th>
      <th scope="col" style={{paddingRight:'50px'}}>Realised P&L</th>
      <th scope="col" style={{paddingRight:'50px'}}>Close Order</th>

    </tr>
  </thead>
  <tbody>
  <tr>
    <th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/apple.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Apple Inc</th>      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>5000</th>
      <td>184.32</td>
      <td>Short</td>
      <td>14.352</td>
      <td>11.857</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
      <th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/amazon.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Amazon INC </th>
      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>7100</th>
      <td>169.51</td>
      <td>Short</td>
      <td>10.9825</td>
      <td>16.985</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
    <th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/apple.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Apple Inc </th>      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>8000</th>
      <td>184.32</td>
      <td>Short</td>
      <td>14.352</td>
      <td>11.857</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
    <th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/meta.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Meta</th>      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>10000</th>
      <td>473.32</td>
      <td>Long</td>
      <td>32.569</td>
      <td>25.632</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
    <th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/amd.png" alt="" style={{height:'16px' , width:'16px'}}/>
      AMD </th>      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>7000</th>
      <td>173.87</td>
      <td>Long</td>
      <td>12.598</td>
      <td>10.587</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
<th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/intel.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Intel Corp </th>      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>9000</th>
      <td>43.51</td>
      <td>Short</td>
      <td>3.589</td>
      <td>3.989</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
    <th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/microsoft.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Microsoft Inc </th>      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>5000</th>
      <td>404.3</td>
      <td>Long</td>
      <td>40.45</td>
      <td>20.02</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
      <th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/amazon.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Amazon INC </th>
      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>7100</th>
      <td>169.51</td>
      <td>Short</td>
      <td>10.9825</td>
      <td>16.985</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
    <th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/apple.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Apple Inc </th>      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>8000</th>
      <td>184.32</td>
      <td>Short</td>
      <td>14.352</td>
      <td>11.857</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
    <th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/meta.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Meta</th>      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>10000</th>
      <td>473.32</td>
      <td>Long</td>
      <td>32.569</td>
      <td>25.632</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
    <th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/amd.png" alt="" style={{height:'16px' , width:'16px'}}/>
      AMD </th>      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>7000</th>
      <td>173.87</td>
      <td>Long</td>
      <td>12.598</td>
      <td>10.587</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
<th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/intel.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Intel Corp </th>      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>9000</th>
      <td>43.51</td>
      <td>Short</td>
      <td>3.589</td>
      <td>3.989</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
    <th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/microsoft.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Microsoft Inc </th>      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>5000</th>
      <td>404.3</td>
      <td>Long</td>
      <td>40.45</td>
      <td>20.02</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
      <th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/amazon.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Amazon INC </th>
      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>7100</th>
      <td>169.51</td>
      <td>Short</td>
      <td>10.9825</td>
      <td>16.985</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
    <th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/apple.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Apple Inc </th>      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>8000</th>
      <td>184.32</td>
      <td>Short</td>
      <td>14.352</td>
      <td>11.857</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
    <th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/meta.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Meta</th>      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>10000</th>
      <td>473.32</td>
      <td>Long</td>
      <td>32.569</td>
      <td>25.632</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
    <th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/amd.png" alt="" style={{height:'16px' , width:'16px'}}/>
      AMD </th>      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>7000</th>
      <td>173.87</td>
      <td>Long</td>
      <td>12.598</td>
      <td>10.587</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
<th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/intel.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Intel Corp </th>      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>9000</th>
      <td>43.51</td>
      <td>Short</td>
      <td>3.589</td>
      <td>3.989</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
    <th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/microsoft.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Microsoft Inc </th>      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>5000</th>
      <td>404.3</td>
      <td>Long</td>
      <td>40.45</td>
      <td>20.02</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
      <th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/amazon.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Amazon INC </th>
      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>7100</th>
      <td>169.51</td>
      <td>Short</td>
      <td>10.9825</td>
      <td>16.985</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
    <th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/apple.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Apple Inc </th>      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>8000</th>
      <td>184.32</td>
      <td>Short</td>
      <td>14.352</td>
      <td>11.857</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
    <th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/meta.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Meta</th>      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>10000</th>
      <td>473.32</td>
      <td>Long</td>
      <td>32.569</td>
      <td>25.632</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
    <th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/amd.png" alt="" style={{height:'16px' , width:'16px'}}/>
      AMD </th>      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>7000</th>
      <td>173.87</td>
      <td>Long</td>
      <td>12.598</td>
      <td>10.587</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
<th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/intel.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Intel Corp </th>      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>9000</th>
      <td>43.51</td>
      <td>Short</td>
      <td>3.589</td>
      <td>3.989</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
    <th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/meta.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Meta</th>      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>10000</th>
      <td>473.32</td>
      <td>Long</td>
      <td>32.569</td>
      <td>25.632</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
    <th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/amd.png" alt="" style={{height:'16px' , width:'16px'}}/>
      AMD </th>      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>7000</th>
      <td>173.87</td>
      <td>Long</td>
      <td>12.598</td>
      <td>10.587</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
    <tr>
<th style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/intel.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Intel Corp </th>      <th scope="row" style={{color:'#28C59F',paddingLeft:'8px'}}>9000</th>
      <td>43.51</td>
      <td>Short</td>
      <td>3.589</td>
      <td>3.989</td>
      <td style={{cursor:'pointer'}}>close</td>
    </tr>
  </tbody>
       </table>
      </div>
      </>
    )
  }
  
  export default Asset