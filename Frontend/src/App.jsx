
import './App.css'
import Nav from './Nav/Nav.jsx'
import Trade  from './Trade/Trade.jsx'
import Chart from './Chart/Chart.jsx'
import Box from './Box/Box.jsx'
import Position from './Position/Position.jsx'
import Price from './Price/Price.jsx'
function App() {

  return (
    <>
    <Nav />
    <div style={{display:'flex'}}>
    <Trade />
    <div>
      <Box />
      <Chart />
      <Position />
    </div>
    <Price />
    </div>
    </>
  )
}

export default App
