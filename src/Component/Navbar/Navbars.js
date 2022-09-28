import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Icons2 from "../../Assets/Icons-2.png";
import btc from "../../Assets/btc.png";
import Frame28 from "../../Assets/Frame 28.png";
import ExtraIcons from "../../Assets/ExtraIcons.png"
import { AiOutlinePlus } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import logo from "../../Assets/logo.png";
function Navbars() {
  return (
    <div> <Navbar  expand="lg"  variant="dark" style={{ width: "100%", color: '#000' }} >
                       
    <Navbar.Brand href="#home" className="displayshow"><img src={logo} width="170px" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className=" nav" style={{ width: '100%' }}>
        
        <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between" style={{ width: '100%' }}>
            <div className="row mt-3" >
                <div className="col-md-12 d-flex align-items-center justify-content-center" >
                    <div className="input-group mb-3  " style={{ border: '2px solid #8B41AB' }}>
                        <input type="text" className="form-control" placeholder="search" aria-label="Username" aria-describedby="basic-addon1" style={{ color: '#868484', backgroundColor: 'transparent', width: '270px', paddingTop: '5px', paddingBottom: "5px", border: '2px solid transparent' }} />
                        <span className="input-group-text " style={{ backgroundColor: 'transparent', border: '2px solid transparent' }}><BiSearch size={20} color="white" /></span>
                    </div>
                </div>
            </div>
            <div className="" >
                <button className="btn-Connect "><AiOutlinePlus size={20} />&nbsp; Connect Discord</button>
            </div>
            <div className="" >
                <button className="btn-Connect "><AiOutlinePlus size={20} />&nbsp; Connect Wallet</button>
            </div>
            <div className="" >
                <img src={Icons2} />
            </div>
            <div className="" >
                <img src={ExtraIcons} />
            </div>
            <div className="" >
                <img src={Frame28} />
            </div>
        </div>
        </Nav>
    </Navbar.Collapse>
</Navbar></div>
  )
}

export default Navbars