function Hero() {

    return (
      <>
       <div>
       <div className="kitchen__container">
        <img src="../src/assets/hero.jpg" alt="hero" className="kitchen__image" />
        <div className="kitchen__overlay">
          <p className="kitchen__text">DECENTRALIZED TERMINAL</p>
        </div>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'2rem'}}>
        <div className="about__us">
            <p style={{fontSize:'32px',fontWeight:'500'}}>Introducing our private financial ecosystem, tailored to modernize traditional finance with blockchain advantages while preserving data privacy.</p>
        </div>
        </div>

        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap',gap:'120px',marginTop:'3rem'}}>
            <div style={{width:'350px',height:'350px',border:'3px solid #454FFA',textAlign:'center',display:'flex',flexDirection:'column', gap:'32px',justifyContent:'center',alignItems:'center',borderRadius:'16px',cursor:'pointer'}} className="hover">
                <h1 style={{color:'white',fontSize:'26px',fontWeight:'500'}}> Accelerated Trading</h1>
                <p style={{color:'white'}}>Tokenization of assets enables rapid trading, reducing settlement times from days to minutes</p>
            </div>
            <div style={{width:'350px',height:'350px',border:'3px solid #454FFA',textAlign:'center',display:'flex',flexDirection:'column', gap:'32px',justifyContent:'center',alignItems:'center',borderRadius:'16px',cursor:'pointer'}} className="hover">
                <h1 style={{color:'white',fontSize:'26px',fontWeight:'500'}}>Enhanced Privacy</h1>
                <p style={{color:'white'}}>Institutions maintain privacy by operating on private blockchains inaccessible to external parties, safeguarding financial histories</p>
            </div>
            <div style={{width:'350px',height:'350px',border:'3px solid #454FFA',textAlign:'center',display:'flex',flexDirection:'column', gap:'32px',justifyContent:'center',alignItems:'center',borderRadius:'16px',cursor:'pointer'}} className="hover">
                <h1 style={{color:'white',fontSize:'26px',fontWeight:'500'}}>Interoperability</h1>
                <p style={{color:'white'}}>Leveraging ZK circuits, our infrastructure facilitates seamless asset exchange among distinct private chains</p>
            </div>
            <div style={{width:'350px',height:'350px',border:'3px solid #454FFA',textAlign:'center',display:'flex',flexDirection:'column', gap:'32px',justifyContent:'center',alignItems:'center',borderRadius:'16px',cursor:'pointer'}} className="hover">
                <h1 style={{color:'white',fontSize:'26px',fontWeight:'500'}}>Custom App-Chains</h1>
                <p style={{color:'white'}}>Utilizing frameworks like Stackr and innovative DA solutions like Avail, we develop tailored app-chains for clients, enhancing operational efficiency</p>
            </div>
            <div style={{width:'350px',height:'350px',border:'3px solid #454FFA',textAlign:'center',display:'flex',flexDirection:'column', gap:'32px',justifyContent:'center',alignItems:'center',borderRadius:'16px',cursor:'pointer'}} className="hover">
                <h1 style={{color:'white',fontSize:'26px',fontWeight:'500'}}>Streamlined Asset Exchange</h1>
                <p style={{color:'white'}}>Through interoperable private chains, asset trading processes are streamlined, fostering greater liquidity and market efficiency</p>
            </div>
            <div style={{width:'350px',height:'350px',border:'3px solid #454FFA',textAlign:'center',display:'flex',flexDirection:'column', gap:'32px',justifyContent:'center',alignItems:'center',borderRadius:'16px',cursor:'pointer'}} className="hover">
                <h1 style={{color:'white',fontSize:'26px',fontWeight:'500'}}>Secure and Confidential Transactions</h1>
                <p style={{color:'white'}}>By employing private blockchain networks, transactions are conducted securely and confidentially, mitigating the risk of unauthorized access or data breaches</p>
            </div>
        </div>
       </div>
      </>
    )
  }
  
  export default Hero