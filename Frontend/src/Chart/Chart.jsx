import {Chart as ChartJS} from 'chart.js/auto'
import {Line} from 'react-chartjs-2'

function Chart() {

    return (
      <>
      <div className='chart-container'>
        <Line
            data={{
               labels:[13,14,15,16,17,18,19,20],
            datasets:[{
                label:'Price',
                data:[200,30,400,550,660,790,800,950],
            }]
            }}
        />

      </div>
      
      </>
    )
  }
  
  export default Chart