import {Modal, ModalContent, ModalHeader, ModalBody,  Button, useDisclosure} from "@nextui-org/react";
import {Line} from 'react-chartjs-2'

function Box() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
      <>
      <div style={{display:'flex',flexDirection:'row'}}>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='3xl'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1" style={{backgroundColor:'#092879',color:'white'}}>MARKET INFO</ModalHeader>
              <ModalBody style={{backgroundColor:'#000921',color:'white'}}>
                <div style={{display:'flex', flexDirection:'row', gap:'32px'}}>
                    <p>CRYPTO</p>
                    <p>STOCKS</p>
                    <p>COMMODITIES</p>
                    <p>FOREX</p>
                    <p>INDICES</p>
                    <input type="text" className="modal__input"/>
                </div>
                <div>
                    <table>
                    <thead>
    <tr >
      <th scope="col" >Company</th>
      <th scope="col" style={{paddingRight:'50px'}}>24 Hour</th>
      <th scope="col" style={{paddingRight:'50px'}}>Price</th>
      <th scope="col" style={{paddingRight:'50px'}}>7 Days</th>
      <th scope="col" style={{paddingRight:'50px'}}>This Month</th>

    </tr>
  </thead>
  <tbody>
    <tr style={{cursor:'pointer'}} onClick={onClose}>
    <th style={{display:'flex',flexDirection:'row', width:'100px',gap:'4px',color:'white',marginTop:'2.1rem'}}>
      <img src="./src/assets/apple.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Apple Inc</th>      <td>1.51</td>
      <td>184.32</td>
      <td><Line
    width={100}
    height={50}
    options={{
        plugins: {
            legend: false, // Hide legend
            tooltip: false // Hide tooltip
        },
        scales: {
            x: {
                display: false // Hide x-axis
            },
            y: {
                display: false // Hide y-axis
            }
        }
    }}
    data={{
        labels: [13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [{
            label: 'Revenue',
            data: [500, 320, 40, 70, 680, 990, 800, 950],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }}
/>
</td>
<td><Line
    width={100}
    height={50}
    options={{
        plugins: {
            legend: false, // Hide legend
            tooltip: false // Hide tooltip
        },
        scales: {
            x: {
                display: false // Hide x-axis
            },
            y: {
                display: false // Hide y-axis
            }
        }
    }}
    data={{
        labels: [13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [{
            label: 'Revenue',
            data: [200, 30, 400, 550, 660, 790, 800, 950],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }}
/>
</td>
        
    </tr>
    <tr style={{cursor:'pointer'}} onClick={onClose}>
    <th style={{display:'flex',flexDirection:'row', width:'100px',gap:'4px',color:'white',marginTop:'2.3rem'}}>
      <img src="./src/assets/microsoft.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Microsoft</th>       <td>0.61</td>
      <td>404.3</td>
      <td><Line
    width={100}
    height={50}
    options={{
        plugins: {
            legend: false, // Hide legend
            tooltip: false // Hide tooltip
        },
        scales: {
            x: {
                display: false // Hide x-axis
            },
            y: {
                display: false // Hide y-axis
            }
        }
    }}
    data={{
        labels: [13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [{
            label: 'Revenue',
            data: [10, 30, 100, 550, 200, 620, 880, 950],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }}
/>
</td>
<td><Line
    width={100}
    height={50}
    options={{
        plugins: {
            legend: false, // Hide legend
            tooltip: false // Hide tooltip
        },
        scales: {
            x: {
                display: false // Hide x-axis
            },
            y: {
                display: false // Hide y-axis
            }
        }
    }}
    data={{
        labels: [13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [{
            label: 'Revenue',
            data: [900, 820, 400, 590, 500, 790, 850, 1000],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }}
/>
</td>
        
    </tr>
    <tr onClick={onClose}>
    <th style={{display:'flex',flexDirection:'row', width:'120px',gap:'4px',color:'white',marginTop:'2.3rem'}}>
      <img src="./src/assets/amazon.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Amazon INC</th>       <td>0.17</td>
      <td>169.51</td>
      <td><Line
    width={100}
    height={50}
    options={{
        plugins: {
            legend: false, // Hide legend
            tooltip: false // Hide tooltip
        },
        scales: {
            x: {
                display: false // Hide x-axis
            },
            y: {
                display: false // Hide y-axis
            }
        }
    }}
    data={{
        labels: [13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [{
            label: 'Revenue',
            data: [990, 800, 400, 550, 660, 790, 456, 650],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }}
/>
</td>
<td><Line
    width={100}
    height={50}
    options={{
        plugins: {
            legend: false, // Hide legend
            tooltip: false // Hide tooltip
        },
        scales: {
            x: {
                display: false // Hide x-axis
            },
            y: {
                display: false // Hide y-axis
            }
        }
    }}
    data={{
        labels: [13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [{
            label: 'Revenue',
            data: [500, 500, 400, 550, 660, 790, 400, 600],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }}
/>
</td>
        
    </tr>
    <tr onClick={onClose}>
    <th style={{display:'flex',flexDirection:'row', width:'100px',gap:'4px',color:'white',marginTop:'2.3rem'}}>
      <img src="./src/assets/meta.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Meta</th>       <td>0.33</td>
      <td>473.32</td>
      <td><Line
    width={100}
    height={50}
    options={{
        plugins: {
            legend: false, // Hide legend
            tooltip: false // Hide tooltip
        },
        scales: {
            x: {
                display: false // Hide x-axis
            },
            y: {
                display: false // Hide y-axis
            }
        }
    }}
    data={{
        labels: [13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [{
            label: 'Revenue',
            data: [650, 330, 400, 950, 266, 652, 992, 156],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }}
/>
</td>
<td><Line
    width={100}
    height={50}
    options={{
        plugins: {
            legend: false, // Hide legend
            tooltip: false // Hide tooltip
        },
        scales: {
            x: {
                display: false // Hide x-axis
            },
            y: {
                display: false // Hide y-axis
            }
        }
    }}
    data={{
        labels: [13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [{
            label: 'Revenue',
            data: [700, 306, 451, 988, 660, 844, 896, 645],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }}
/>
</td>
        
    </tr>
    <tr onClick={onClose} style={{cursor:'pointer'}}>
    <th style={{display:'flex',flexDirection:'row', width:'100px',gap:'4px',color:'white',marginTop:'2.3rem'}}>
      <img src="./src/assets/intel.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Intel Corp</th>       <td>0.54</td>
      <td>43.51</td>
      <td><Line
    width={100}
    height={50}
    options={{
        plugins: {
            legend: false, // Hide legend
            tooltip: false // Hide tooltip
        },
        scales: {
            x: {
                display: false // Hide x-axis
            },
            y: {
                display: false // Hide y-axis
            }
        }
    }}
    data={{
        labels: [13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [{
            label: 'Revenue',
            data: [30, 30, 400, 550, 660, 983, 894, 641],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }}
/>
</td>
<td><Line
    width={100}
    height={50}
    options={{
        plugins: {
            legend: false, // Hide legend
            tooltip: false // Hide tooltip
        },
        scales: {
            x: {
                display: false // Hide x-axis
            },
            y: {
                display: false // Hide y-axis
            }
        }
    }}
    data={{
        labels: [13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [{
            label: 'Revenue',
            data: [800, 660, 930, 653, 665, 918, 165, 615],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }}
/>
</td>        
    </tr>   
  </tbody>
</table>
                </div>
            
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
        <div className="selector">
        <div style={{backgroundColor:'#092879',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <img src="./src/assets/apple.png" alt=""  style={{backgroundColor:'#092879'}}/>
        </div>
        <Button onPress={onOpen} style={{color:'white', height:'100%',backgroundColor:'#092879'}} radius='none'>Apple Inc</Button>
        </div>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',width:'130px',height:'60px',alignItems:'center'}}>
            <p style={{color:'#28C59F'}}>182.31</p>
            <p style={{color:'white',fontSize:'14px'}}>Last market price</p>
        </div>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',width:'130px',height:'60px',alignItems:'center'}}>
            <p style={{color:'#28C59F'}}>1.55%</p>
            <p style={{color:'white'}}>24h change</p>
        </div>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',width:'130px',height:'60px',alignItems:'center'}}>
            <p style={{color:'#28C59F'}}>184.85</p>
            <p style={{color:'white'}}>24h high</p>
        </div>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',width:'130px',height:'60px',alignItems:'center'}}>
            <p style={{color:'#28C59F'}}>181.66</p>
            <p style={{color:'white'}}>24h low</p>
        </div>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',width:'130px',height:'60px',alignItems:'center'}}>
            <p style={{color:'#28C59F'}}>49,752,465</p>
            <p style={{color:'white'}}>Market Volume</p>
        </div>
      </div>
      </>
    )
  }
  
  export default Box