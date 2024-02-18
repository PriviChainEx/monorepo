import {Chart as ChartJS} from 'chart.js/auto'
import {Bar} from 'react-chartjs-2'

function Portfolio() {
    const data = {
        labels: ['BTC','BSV','ETH','BNB','SOL','DOGE',],
        datasets: [
          {
            label: 'Profit',
            data: [200, 30, 400, 550, 660, 790, 800, 950],
            backgroundColor:'#22CCC4',
            barThickness:'flex',
            
          },
          {
            label: 'Loss',
            data: [-20, -3, -40, -55, -66, -330, -160, -350],
            barThickness:'flex',
            backgroundColor:'#BE3C5B'
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false, // Ensure ticks start from the lowest value
              },
            },
          ],
        },
      };
    

    return (
      <>
      <div style={{margin:"3rem",display:'flex',flexDirection:'column',justifyContent:'space-around',gap:'40px'}}>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
          <div style={{width:'280px', height:'340px',border:'0.5px solid white',}}>
            <div style={{width:'240',height:'160px',borderBottom:'1px solid white',backgroundColor:'#092879',padding:'1rem'}}>
                <p style={{color:'white'}}>Current Value</p>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'start',gap:'32px'}}>
                <p style={{color:'white',fontSize:'24px'}}>$30,65,234.54</p>
                <p style={{color:'#55C793',marginTop:'0.5rem'}}>+4.66%</p>
            </div>
            <p style={{color:'white',}}>$345234.95  <sub>(Last Week)</sub></p>
            </div>
            <div style={{width:'100%',height:'50%'}}></div>
          </div>
          <div style={{height:'320px'}}>
          <Bar data={data} options={options} style={{width:'800px',height:'150px',backgroundColor:'#000921'}}/>
          </div>
      </div>
      <div style={{width:'100%',height:'260px',border:'0.5px solid white'}}>
      <div style={{display:'flex',flexDirection:'column',gap:'40px'}}>

         <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',gap:'16px'}}>
         
         <div style={{width:'300px', height:'56px', backgroundColor:'#000F37',display:'flex',flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',gap:'2px',alignItems:'center',margin:'1rem',paddingBottom:'8px'}}>
            <p style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/microsoft.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Microsoft Inc </p>             </div>
            <div>
                <p style={{color:'white'}}>$3,06,432.00</p>
            </div>
         </div>
         <div style={{width:'300px', height:'56px', backgroundColor:'#000F37',display:'flex',flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',gap:'2px',alignItems:'center',margin:'1rem',paddingBottom:'8px'}}>
            <p style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/amazon.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Amazon INC </p>             </div>
            <div>
                <p style={{color:'white'}}>$8,40,915.00</p>
            </div>
         </div>
         <div style={{width:'300px', height:'56px', backgroundColor:'#000F37',display:'flex',flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
         <div style={{display:'flex',flexDirection:'column',justifyContent:'center',gap:'2px',alignItems:'center',margin:'1rem',paddingBottom:'8px'}}>
            <p style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/apple.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Apple Inc </p>             </div>
            <div>
                <p style={{color:'white'}}>$6,87,643.00</p>
            </div>
         </div>
         
         </div>
         <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',gap:'16px'}}>
         
         <div style={{width:'300px', height:'56px', backgroundColor:'#000F37',display:'flex',flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
         <div style={{display:'flex',flexDirection:'column',justifyContent:'center',gap:'2px',alignItems:'center',margin:'1rem',paddingBottom:'8px'}}>
            <p style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/meta.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Meta </p>             </div>
            <div>
                <p style={{color:'white'}}>$1,56,984</p>
            </div>
         </div>
         <div style={{width:'300px', height:'56px', backgroundColor:'#000F37',display:'flex',flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
           <div style={{display:'flex',flexDirection:'column',justifyContent:'center',gap:'2px',alignItems:'center',margin:'1rem',paddingBottom:'8px'}}>
            <p style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/amd.png" alt="" style={{height:'16px' , width:'16px'}}/>
      AMD </p>             </div>
            <div>
                <p style={{color:'white'}}>$456,847</p>
            </div>
         </div>
         <div style={{width:'300px', height:'56px', backgroundColor:'#000F37',display:'flex',flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
         <div style={{display:'flex',flexDirection:'column',justifyContent:'center',gap:'2px',alignItems:'center',margin:'1rem',paddingBottom:'8px'}}>
            <p style={{color:'white',display:'flex',flexDirection:'row', width:'140px',gap:'4px'}}>
      <img src="./src/assets/intel.png" alt="" style={{height:'16px' , width:'16px'}}/>
      Intel Corp</p>             </div>
            <div>
                <p style={{color:'white'}}>$6,74,492</p>
            </div>
         </div>
         
         </div>
      </div>
      </div>
      </div>
      </>
    )
  }
  
  export default Portfolio