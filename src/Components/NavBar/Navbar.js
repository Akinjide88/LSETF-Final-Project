import {React, useState} from 'react';
import {Nav, NavContainer, Logohold, MobileIcon, LinksHolder, NavLinks, Logo} from "./NavbarElement.js";
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";
import lsetf from "./Images/LSETF-USADF.png";

function Navbar() {

  const [click, setClick] = useState(false);

  const handClick = () => {
    setClick(!click)
  }

  return (
    <Nav>
      <NavContainer>
        <Logohold>
          <Logo src={lsetf} alt="img"/>
        </Logohold>

        <MobileIcon onClick={handClick}>
          {click ?<FaTimes />:<FaBars />}
        </MobileIcon>
        
        <LinksHolder onClick={handClick} click={click}>
          <Link to="/" style={{color:"white", textDecoration:"none"}}><NavLinks>Home</NavLinks></Link>
          <Link to="/participant" style={{color:"yellow", textDecoration:"none" }}><NavLinks>Participants</NavLinks></Link>
        </LinksHolder>
      </NavContainer>
    </Nav>
  )
}

export default Navbar