import { useState ,useEffect } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { Link } from "react-router-dom";
function Nav() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const storedVisibility = localStorage.getItem("visibility");
    if (storedVisibility) {
      setVisible(JSON.parse(storedVisibility));
    }
  }, []);

  function signOutVisible() {
    setVisible(false);
    localStorage.setItem("visibility", JSON.stringify(false));
    setTimeout(() => {
      setVisible(true); // Set visible to true after 3 seconds
    },0);
  }

  function handleSignIn() {
    localStorage.setItem("visibility", JSON.stringify(false));
    // Navigate programmatically to the signing page
    window.location.href = '/signin';
  }

  function handleRegister() {
    localStorage.setItem("visibility", JSON.stringify(false));
    // Navigate programmatically to the register page
    window.location.href = '/signup';
  }


    return (
      <>
       <Navbar className="navbar">
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="start">
        <NavbarItem>
          <Link style={{color:'#E5E7EB' ,fontWeight:'500'}} to='/trade'>
        {!visible ? "TRADE" : null}
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link to='/portfolio' style={{color:'#E5E7EB'}}>
          {!visible ? 'PORTFOLIO' : null}
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link to='/asset' style={{color:'#E5E7EB'}}>
          {!visible ? 'HISTORY': null}
          </Link>
        </NavbarItem>    
      </NavbarContent>
      <div style={{display:'flex',flexDirection:'row',gap:'32px'}}>
          {!visible ? <Button className="settings__button" size="sm" onClick={signOutVisible} style={{backgroundColor:'#06E7ED',fontWeight:'500'}}>
              Sign Out
            </Button> : null}
          {visible ? <Button className="settings__button" size="sm" onClick={handleSignIn} style={{backgroundColor:'#06E7ED',fontWeight:'500'}}>
              Sign In
            </Button> : null}
          {visible ? <Button className="settings__button" size="sm" onClick={handleRegister} style={{backgroundColor:'#06E7ED',fontWeight:'500'}}>
              Register
            </Button> : null}
        </div>
      
    </Navbar>
      </>
    )
  }
  
  export default Nav