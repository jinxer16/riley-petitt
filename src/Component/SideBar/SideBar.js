import React, { useState, useEffect } from "react";
import Skeleton from '@mui/material/Skeleton';
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../Assets/logo.png";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import TuneIcon from "@mui/icons-material/Tune";
import "./SideBar.css";
import { BiSearch } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"
import sidebarHomePage from "../../Assets/sidebarHomePage.png"
import sidebarNFT from "../../Assets/sidebarNFT.png"
import SideBarView from "../../Assets/SideBarView.png"
import sidebarNFTMint from "../../Assets/sidebarNFTMint.png";
import SideBarPreSale from "../../Assets/SideBarPreSale.png"
import sideBarmarketPalce from "../../Assets/sideBarmarketPalce.png";
import sidebarMyinventory from "../../Assets/sidebarMyinventory.png";
import sidebarmining from "../../Assets/sidebarmining.png";
import sidebarminingForm from "../../Assets/sidebarminingForm.png"
import SideBarStaking from "../../Assets/SideBarStaking.png";
import sidebarSweepstakes from "../../Assets/sidebarSweepstakes.png";
import SideBarDao from "../../Assets/SideBarDao.png";
import sidebarSupport from "../../Assets/sidebarSupport.png";
import sidebarlightMode from "../../Assets/sidebarlightMode.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Icons2 from "../../Assets/Icons-2.png";
import btc from "../../Assets/btc.png";
import Frame28 from "../../Assets/Frame 28.png";
import ExtraIcons from "../../Assets/ExtraIcons.png"
import HomePage from "../HomePage/HomePage";
import Dashboardicon from "../../Assets/Dashboardicon.png"
import Navbars from "../Navbar/Navbars";
import NftsMint from "../NftsMint/NftsMint";
import {
    Link,
    NavLink,
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import Presale from "../Pre-Sale/Presale";
const drawerWidth = 275;
let acc;
function ResponsiveDrawer(props) {
    const { window } = props;
    const { pathname } = useLocation();
    const changeRoute = () => {
        if (pathname) {
            console.log("pathname", pathname);
            if (pathname == "/") {
                setIsColor("NFTs Mint")
            } else if (pathname == "/presale") {
                setIsColor("Pre-Sale")
            }
        }
    }
    useEffect(() => {
        changeRoute()
    }, [])

    const [mobileOpen, setMobileOpen] = useState(false);
    const [isColor, setIsColor] = useState("home")
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className="stakenmsColor1" style={{ color: "white" }}>
            <Toolbar style={{ marginTop: "30px", marginLeft: "0px" }} >
                <img src={logo} width="170px" />
            </Toolbar>
            <br />
            <div className="" style={{ marginLeft: "30px" }} >
            </div>
            <List>
                <ListItem button href="#deshborad" key="Dashboard"
                    onClick={() => {
                        setIsColor("home")
                    }}
                    className={isColor == "home" ? ' staking-btn_active' : 'staking-btn'}>
                    <ListItemIcon >
                        <img src={sidebarHomePage} />
                    </ListItemIcon>
                    <ListItemText primary="Home Page" />
                </ListItem>
                <ListItem button key="Stake Fusion"
                    onClick={() => {
                        setIsColor("NFT Form")
                    }}
                    className={isColor == "NFT Form" ? ' staking-btn_active' : 'staking-btn text-white'}>

                    <ListItemIcon>
                        <img src={sidebarNFT} width="18px" />
                    </ListItemIcon>
                    <ListItemText primary="NFT Form" />
                </ListItem>
                <ListItem button key="Buy Bond"
                    onClick={() => {
                        setIsColor("View Miner")
                    }}
                    className={isColor == "View Miner" ? ' staking-btn_active' : 'staking-btn text-white'}
                >
                    <ListItemIcon>
                        <img src={SideBarView} />
                    </ListItemIcon>
                    <ListItemText primary="View Miner" />
                </ListItem>
                <div className="" style={{ borderTop: '2px solid #B3B3B3', marginLeft: "10px", marginRight: '20px', marginTop: '20px', marginBottom: '20px' }}></div>
                {/* </Link> */}

                <NavLink to="/" style={{ textDecoration: "none" }} >
                    <ListItem button key="NFTs Mint"
                        onClick={() => {
                            setIsColor("NFTs Mint")
                        }}
                        className={isColor == "NFTs Mint" ? ' staking-btn_active' : 'staking-btn text-white'}
                    >
                        <ListItemIcon>
                            <img src={sidebarNFTMint} />
                        </ListItemIcon>
                        <ListItemText primary="NFTs Mint" />
                    </ListItem>
                </NavLink>
                <Link to="/presale" style={{ textDecoration: "none" }}>
                    <ListItem button key="Pre-Sale"
                        onClick={() => {
                            setIsColor("Pre-Sale")
                        }}
                        className={isColor == "Pre-Sale" ? ' staking-btn_active' : 'staking-btn text-white'}
                    >
                        <ListItemIcon>
                            <img src={SideBarPreSale} />
                        </ListItemIcon>
                        <ListItemText primary="Pre-Sale" />
                    </ListItem>
                </Link>
                <ListItem button key="Marketplace"
                    onClick={() => {
                        setIsColor("Marketplace")
                    }}
                    className={isColor == "Marketplace" ? ' staking-btn_active' : 'staking-btn text-white'}
                >
                    <ListItemIcon>
                        <img src={sideBarmarketPalce} />
                    </ListItemIcon>
                    <ListItemText primary="Marketplace" />
                </ListItem>

                <ListItem button key="My Inventoryt"
                    onClick={() => {
                        setIsColor("My Inventoryt")
                    }}
                    className={isColor == "My Inventoryt" ? ' staking-btn_active' : 'staking-btn text-white'}
                >
                    <ListItemIcon>
                        <img src={sidebarMyinventory} />
                    </ListItemIcon>
                    <ListItemText primary="My Inventoryt" />
                </ListItem>

                <div className="" style={{ borderTop: '2px solid #B3B3B3', marginLeft: "10px", marginRight: '20px', marginTop: '20px', marginBottom: '20px' }}></div>


                <ListItem button key="Mining dashboard"
                    onClick={() => {
                        setIsColor("Mining dashboard")
                    }}
                    className={isColor == "Mining dashboard" ? ' staking-btn_active' : 'staking-btn text-white'}
                >
                    <ListItemIcon>
                        <img src={sidebarmining} />
                    </ListItemIcon>
                    <ListItemText primary="Mining dashboard" />
                </ListItem>

                <ListItem button key="Mining Farm"
                    onClick={() => {
                        setIsColor("Mining Farm")
                    }}
                    className={isColor == "Mining Farm" ? ' staking-btn_active' : 'staking-btn text-white'}
                >
                    <ListItemIcon>
                        <img src={sidebarminingForm} />
                    </ListItemIcon>
                    <ListItemText primary="Mining Farm" />
                </ListItem>

                <ListItem button key="Buy Fusion"
                    onClick={() => {
                        setIsColor("Staking")
                    }}

                    className={isColor == "Staking" ? ' staking-btn_active' : 'staking-btn text-white'}
                >
                    <ListItemIcon>
                        <img src={SideBarStaking} />
                    </ListItemIcon>
                    <ListItemText primary="Staking" />
                </ListItem>

                <ListItem button key="Buy Fusion"
                    onClick={() => {
                        setIsColor("Sweepstakes")
                    }}
                    className={isColor == "Sweepstakes" ? ' staking-btn_active' : 'staking-btn text-white'}
                >
                    <ListItemIcon>
                        <img src={sidebarSweepstakes} />
                    </ListItemIcon>
                    <ListItemText primary="Sweepstakes" />
                </ListItem>

                <ListItem button key="DAO Voting"
                    onClick={() => {
                        setIsColor("DAO Voting")
                    }}
                    className={isColor == "DAO Voting" ? ' staking-btn_active' : 'staking-btn text-white'}
                >
                    <ListItemIcon>
                        <img src={SideBarDao} />
                    </ListItemIcon>
                    <ListItemText primary="DAO Voting" />
                </ListItem>


                <div className="" style={{ borderTop: '2px solid #B3B3B3', marginLeft: "10px", marginRight: '20px', marginTop: '20px', marginBottom: '20px' }}></div>


                <ListItem button key="Support"
                    onClick={() => {
                        setIsColor("Support")
                    }}
                    className={isColor == "Support" ? ' staking-btn_active' : 'staking-btn text-white'}
                >
                    <ListItemIcon>
                        <img src={sidebarSupport} />
                    </ListItemIcon>
                    <ListItemText primary="Support" />
                </ListItem>

                <ListItem button key="Light Mode"
                    onClick={() => {
                        setIsColor("Light Mode")
                    }}
                    className={isColor == "Light Mode" ? ' staking-btn_active ' : 'staking-btn text-white'}
                >
                    <ListItemIcon>
                        <img src={sidebarlightMode} />
                    </ListItemIcon>
                    <ListItemText primary="Light Mode" />
                </ListItem>
            </List>

        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar style={{ backgroundColor: "#000000", width: '100%' }}>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <img src={Dashboardicon} style={{zIndex: "3000"}}/>

                    </IconButton>
                    <Typography style={{ color: "white", display: "flex", width: '100%' }} >
                        <div style={{ width: '100%' }} >
                            <Navbar collapseOnSelect  expand="lg" sticky="top" variant="dark" style={{ width: "100%", backgroundColor: '#000' }} >
                                <Navbar.Brand href="#home" className="displayshow"><img src={logo} width="170px" /></Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className=" nav" style={{ width: '100%' }}>

                                        <div className="d-flex flex-md-row flex-column-reverse align-items-md-center justify-content-md-between " style={{ width: '100%' }}>
                                            <div className="row mt-3" >
                                                <div className="col-md-12 d-flex align-items-center justify-content-center " >
                                                    <div className="input-group mb-3  mt-2" style={{ border: '2px solid #8B41AB' }}>
                                                        <input type="text" className="form-control" placeholder="search" aria-label="Username" aria-describedby="basic-addon1" />
                                                        <span className="input-group-text " style={{ backgroundColor: 'transparent', border: '2px solid transparent' }}><BiSearch size={20} color="white" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="" >
                                                <button className="btn-Connect mt-2"><AiOutlinePlus size={20} />&nbsp; Connect Discord</button>
                                            </div>
                                            <div className="" >
                                                <button className="btn-Connect mt-2"><AiOutlinePlus size={20} />&nbsp; Connect Wallet</button>
                                            </div>
                                            <div className="col-lg-3 d-flex align-items-center justify-content-evenly mt-2" >
                                                <img src={Icons2} />
                                                <img src={ExtraIcons} />
                                                <img src={Frame28} />
                                            </div>
                                            <div className="" >

                                            </div>
                                            <div className="" >

                                            </div>
                                        </div>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </Typography>
                    {/* */}

                </Toolbar>
            </AppBar>

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
                style={{ backgroundColor: "rgb(23,25,27)" }}
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>

                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />
                {/* <Navbars/> */}
                <Routes>
                    {/* <Route exact path="/" element={<HomePage/>}/> */}
                    <Route exact path="/" element={<NftsMint />} />
                    <Route exact path="/presale" element={<Presale />} />
                </Routes>
                {/* <HomePage /> */}
                {/* <NftsMint/> */}
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
