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
import { NavLink, Link } from "react-router-dom";
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
const drawerWidth = 275;
let acc;
function ResponsiveDrawer(props) {
    const { window } = props;
    const [show, setShow] = useState(false);
    const [showone, setshowone] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [modalShow, setModalShow] = useState(false);


    const [iscolorChange, setIsColorChange] = useState(false);
    const [iscolorChangeOne, setIsColorChangeOne] = useState(false)
    const [iscolorChangeTwo, setIsColorChangeTwo] = useState(false)
    const [iscolorChangeThree, setIsColorChangeThree] = useState(false)
    const [iscolorChangeFour, setIsColorChangeFour] = useState(false)
    const [iscolorChangeFive, setIsColorChangeFive] = useState(false)
    const [iscolorChangeSix, setIsColorChangeSix] = useState(false)
    const [iscolorChangeSeven, setIsColorChangeSeven] = useState(false)
    const [iscolorChangeEhight, setIsColorChangeEhight] = useState(false)
    const [iscolorChangeNine, setIsColorChangeNine] = useState(false)
    const [iscolorChangeTen, setIsColorChangeTen] = useState(false)
    const [iscolorChangeEleven, setIsColorChangeEleven] = useState(false)
    const [iscolorChange12, setIsColorChangeEleven12] = useState(false)
    const [iscolorChange13, setIsColorChangeEleven13] = useState(false)

    const [isConn, setIsConn] = useState()
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

                {/* {showAdd} */}


            </div>
            <List>
                {/* <Link to="/" className="linkid"> */}
                {/* <Link to="" style={{ textDecoration: "none" }} > */}


                <ListItem button href="#deshborad" key="Dashboard"
                    onClick={() => {
                        setIsColorChangeNine(false)
                        setIsColorChangeEleven(false)
                        setIsColorChangeTen(!iscolorChangeTen)
                        setIsColorChangeEhight(false)
                        setIsColorChangeSeven(false)
                        setIsColorChangeSix(false)
                        setIsColorChangeFive(false)
                        setIsColorChangeFour(false)
                        setIsColorChangeThree(false);
                        setIsColorChangeTwo(false)
                        setIsColorChange(false)
                        setIsColorChangeOne(false)
                        setIsColorChangeEleven12(false)
                        setIsColorChangeEleven13(false)
                    }}
                    className={iscolorChangeTen ? ' staking-btn_active' : 'staking-btn'}>
                    <ListItemIcon >
                        <img src={sidebarHomePage} />
                    </ListItemIcon>
                    <ListItemText primary="Home Page" />
                </ListItem>

                {/* </Link> */}
                {/* </Link> */}

                {/* <Link to="/StakeNMS" className="linkid"> */}
                <ListItem button key="Stake Fusion"
                    onClick={() => {
                        setIsColorChange(!iscolorChange)
                        setIsColorChangeEleven(false)
                        setIsColorChangeNine(false)
                        setIsColorChangeTen(false)
                        setIsColorChangeEhight(false)
                        setIsColorChangeSeven(false)
                        setIsColorChangeSix(false)
                        setIsColorChangeFive(false)
                        setIsColorChangeFour(false)
                        setIsColorChangeThree(false);
                        setIsColorChangeTwo(false)
                        setIsColorChangeOne(false)
                        setIsColorChangeEleven12(false)
                        setIsColorChangeEleven13(false)

                    }}
                    className={iscolorChange ? ' staking-btn_active' : 'staking-btn text-white'}>

                    <ListItemIcon>
                        <img src={sidebarNFT} width="18px" />
                    </ListItemIcon>
                    <ListItemText primary="NFT Form" />
                </ListItem>
                {/* </Link> */}

                {/* <Link to="/BuyBond" className="linkid"> */}
                <ListItem button key="Buy Bond"
                    onClick={() => {
                        setIsColorChangeOne(!iscolorChangeOne)
                        setIsColorChange(false)
                        setIsColorChangeEleven(false)
                        setIsColorChangeNine(false)
                        setIsColorChangeTen(false)
                        setIsColorChangeEhight(false)
                        setIsColorChangeSeven(false)
                        setIsColorChangeSix(false)
                        setIsColorChangeFive(false)
                        setIsColorChangeFour(false)
                        setIsColorChangeThree(false);
                        setIsColorChangeTwo(false)
                        setIsColorChangeEleven12(false)
                        setIsColorChangeEleven13(false)

                    }}
                    className={iscolorChangeOne ? ' staking-btn_active' : 'staking-btn text-white'}
                >
                    <ListItemIcon>
                        <img src={SideBarView} />
                    </ListItemIcon>
                    <ListItemText primary="View Miner" />
                </ListItem>
                <div className="" style={{ borderTop: '2px solid #B3B3B3', marginLeft: "10px", marginRight: '20px', marginTop: '20px', marginBottom: '20px' }}></div>
                {/* </Link> */}


                <ListItem button key="Buy Fusion"
                    onClick={() => {
                        setIsColorChangeTwo(!iscolorChangeTwo)
                        setIsColorChange(false)
                        setIsColorChangeEleven(false)
                        setIsColorChangeNine(false)
                        setIsColorChangeTen(false)
                        setIsColorChangeEhight(false)
                        setIsColorChangeSeven(false)
                        setIsColorChangeSix(false)
                        setIsColorChangeFive(false)
                        setIsColorChangeFour(false)
                        setIsColorChangeThree(false);
                        setIsColorChangeOne(false)
                        setIsColorChangeEleven12(false)
                        setIsColorChangeEleven13(false)
                    }}
                    className={iscolorChangeTwo ? ' staking-btn_active' : 'staking-btn text-white'}
                >
                    <ListItemIcon>
                        <img src={sidebarNFTMint} />
                    </ListItemIcon>
                    <ListItemText primary="NFTs Mint" />
                </ListItem>


                <ListItem button key="Buy Fusion"
                    onClick={() => {
                        setIsColorChangeThree(!iscolorChangeThree);
                        setIsColorChange(false)
                        setIsColorChangeEleven(false)
                        setIsColorChangeNine(false)
                        setIsColorChangeTen(false)
                        setIsColorChangeEhight(false)
                        setIsColorChangeSeven(false)
                        setIsColorChangeSix(false)
                        setIsColorChangeFive(false)
                        setIsColorChangeFour(false)
                        setIsColorChangeEleven12(false)
                        setIsColorChangeEleven13(false)
                        setIsColorChangeTwo(false)
                        setIsColorChangeOne(false)
                    }}
                    className={iscolorChangeThree ? ' staking-btn_active' : 'staking-btn text-white'}
                >
                    <ListItemIcon>
                        <img src={SideBarPreSale} />
                    </ListItemIcon>
                    <ListItemText primary="Pre-Sale" />
                </ListItem>

                <ListItem button key="Buy Fusion"
                    onClick={() => {
                        setIsColorChangeFour(!iscolorChangeFour)
                        setIsColorChange(false)
                        setIsColorChangeEleven(false)
                        setIsColorChangeNine(false)
                        setIsColorChangeTen(false)
                        setIsColorChangeEhight(false)
                        setIsColorChangeSeven(false)
                        setIsColorChangeSix(false)
                        setIsColorChangeFive(false)
                        setIsColorChangeThree(false);
                        setIsColorChangeTwo(false)
                        setIsColorChangeOne(false)
                        setIsColorChangeEleven12(false)
                        setIsColorChangeEleven13(false)
                    }}
                    className={iscolorChangeFour ? ' staking-btn_active' : 'staking-btn text-white'}
                >
                    <ListItemIcon>
                        <img src={sideBarmarketPalce} />
                    </ListItemIcon>
                    <ListItemText primary="Marketplace" />
                </ListItem>

                <ListItem button key="Buy Fusion"
                    onClick={() => {
                        setIsColorChangeFive(!iscolorChangeFive)
                        setIsColorChange(false)
                        setIsColorChangeEleven(false)
                        setIsColorChangeNine(false)
                        setIsColorChangeTen(false)
                        setIsColorChangeEhight(false)
                        setIsColorChangeSeven(false)
                        setIsColorChangeSix(false)
                        setIsColorChangeFour(false)
                        setIsColorChangeThree(false);
                        setIsColorChangeTwo(false)
                        setIsColorChangeOne(false)
                        setIsColorChangeEleven12(false)
                        setIsColorChangeEleven13(false)
                    }}
                    className={iscolorChangeFive ? ' staking-btn_active' : 'staking-btn text-white'}
                >
                    <ListItemIcon>
                        <img src={sidebarMyinventory} />
                    </ListItemIcon>
                    <ListItemText primary="My Inventoryt" />
                </ListItem>

                <div className="" style={{ borderTop: '2px solid #B3B3B3', marginLeft: "10px", marginRight: '20px', marginTop: '20px', marginBottom: '20px' }}></div>


                <ListItem button key="Buy Fusion"
                    onClick={() => {
                        setIsColorChangeSix(!iscolorChangeSix)
                        setIsColorChange(false)
                        setIsColorChangeEleven(false)
                        setIsColorChangeNine(false)
                        setIsColorChangeTen(false)
                        setIsColorChangeEhight(false)
                        setIsColorChangeSeven(false)
                        setIsColorChangeFive(false)
                        setIsColorChangeFour(false)
                        setIsColorChangeThree(false);
                        setIsColorChangeTwo(false)
                        setIsColorChangeOne(false)
                        setIsColorChangeEleven12(false)
                        setIsColorChangeEleven13(false)
                    }}
                    className={iscolorChangeSix ? ' staking-btn_active' : 'staking-btn text-white'}
                >
                    <ListItemIcon>
                        <img src={sidebarmining} />
                    </ListItemIcon>
                    <ListItemText primary="Mining dashboard" />
                </ListItem>

                <ListItem button key="Buy Fusion"
                    onClick={() => {
                        setIsColorChangeSeven(!iscolorChangeSeven)
                        setIsColorChange(false)
                        setIsColorChangeEleven(false)
                        setIsColorChangeNine(false)
                        setIsColorChangeTen(false)
                        setIsColorChangeEhight(false)
                        setIsColorChangeSix(false)
                        setIsColorChangeFive(false)
                        setIsColorChangeFour(false)
                        setIsColorChangeThree(false);
                        setIsColorChangeTwo(false)
                        setIsColorChangeOne(false)
                        setIsColorChangeEleven12(false)
                        setIsColorChangeEleven13(false)
                    }}
                    className={iscolorChangeSeven ? ' staking-btn_active' : 'staking-btn text-white'}
                >
                    <ListItemIcon>
                        <img src={sidebarminingForm} />
                    </ListItemIcon>
                    <ListItemText primary="Mining Farm" />
                </ListItem>

                <ListItem button key="Buy Fusion"
                    onClick={() => {
                        setIsColorChangeEhight(!iscolorChangeEhight)
                        setIsColorChange(false)
                        setIsColorChangeEleven(false)
                        setIsColorChangeNine(false)
                        setIsColorChangeTen(false)
                        setIsColorChangeSeven(false)
                        setIsColorChangeSix(false)
                        setIsColorChangeFive(false)
                        setIsColorChangeFour(false)
                        setIsColorChangeThree(false);
                        setIsColorChangeTwo(false)
                        setIsColorChangeOne(false)
                        setIsColorChangeEleven12(false)
                        setIsColorChangeEleven13(false)
                    }}

                    className={iscolorChangeEhight ? ' staking-btn_active' : 'staking-btn text-white'}
                >
                    <ListItemIcon>
                        <img src={SideBarStaking} />
                    </ListItemIcon>
                    <ListItemText primary="Staking" />
                </ListItem>

                <ListItem button key="Buy Fusion"
                    onClick={() => {
                        setIsColorChangeNine(!iscolorChangeNine)
                        setIsColorChange(false)
                        setIsColorChangeEleven(false)
                        setIsColorChangeTen(false)
                        setIsColorChangeEhight(false)
                        setIsColorChangeSeven(false)
                        setIsColorChangeSix(false)
                        setIsColorChangeFive(false)
                        setIsColorChangeFour(false)
                        setIsColorChangeThree(false);
                        setIsColorChangeTwo(false)
                        setIsColorChangeOne(false)
                        setIsColorChangeEleven12(false)
                        setIsColorChangeEleven13(false)
                    }}
                    className={iscolorChangeNine ? ' staking-btn_active' : 'staking-btn text-white'}
                >
                    <ListItemIcon>
                        <img src={sidebarSweepstakes} />
                    </ListItemIcon>
                    <ListItemText primary="Sweepstakes" />
                </ListItem>

                <ListItem button key="Buy Fusion"
                    onClick={() => {
                        setIsColorChangeNine(false)
                        setIsColorChange(false)
                        setIsColorChangeEleven(!iscolorChangeEleven)
                        setIsColorChangeTen(false)
                        setIsColorChangeEhight(false)
                        setIsColorChangeSeven(false)
                        setIsColorChangeSix(false)
                        setIsColorChangeFive(false)
                        setIsColorChangeFour(false)
                        setIsColorChangeThree(false);
                        setIsColorChangeTwo(false)
                        setIsColorChangeOne(false)
                        setIsColorChangeEleven12(false)
                        setIsColorChangeEleven13(false)
                    }}
                    className={iscolorChangeEleven ? ' staking-btn_active' : 'staking-btn text-white'}
                >
                    <ListItemIcon>
                        <img src={SideBarDao} />
                    </ListItemIcon>
                    <ListItemText primary="DAO Voting" />
                </ListItem>


                <div className="" style={{ borderTop: '2px solid #B3B3B3', marginLeft: "10px", marginRight: '20px', marginTop: '20px', marginBottom: '20px' }}></div>


                <ListItem button key="Buy Fusion"
                    onClick={() => {
                        setIsColorChangeNine(false)
                        setIsColorChange(false)
                        setIsColorChangeEleven(false)
                        setIsColorChangeTen(false)
                        setIsColorChangeEhight(false)
                        setIsColorChangeSeven(false)
                        setIsColorChangeSix(false)
                        setIsColorChangeFive(false)
                        setIsColorChangeFour(false)
                        setIsColorChangeThree(false);
                        setIsColorChangeTwo(false)
                        setIsColorChangeOne(false)
                        setIsColorChangeEleven12(!iscolorChange12)
                        setIsColorChangeEleven13(false)
                    }}
                    className={iscolorChange12 ? ' staking-btn_active' : 'staking-btn text-white'}
                >
                    <ListItemIcon>
                        <img src={sidebarSupport} />
                    </ListItemIcon>
                    <ListItemText primary="Support" />
                </ListItem>

                <ListItem button key="Buy Fusion"
                    onClick={() => {
                        setIsColorChangeNine(false)
                        setIsColorChange(false)
                        setIsColorChangeEleven(false)
                        setIsColorChangeTen(false)
                        setIsColorChangeEhight(false)
                        setIsColorChangeSeven(false)
                        setIsColorChangeSix(false)
                        setIsColorChangeFive(false)
                        setIsColorChangeFour(false)
                        setIsColorChangeThree(false);
                        setIsColorChangeTwo(false)
                        setIsColorChangeOne(false)
                        setIsColorChangeEleven12(false)
                        setIsColorChangeEleven13(!iscolorChange13)
                    }}
                    className={iscolorChange13 ? ' staking-btn_active ' : 'staking-btn text-white'}
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
                <Toolbar style={{ backgroundColor: "#000000", height: "110px", width: '100%' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <img src={Dashboardicon}/>
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography style={{ color: "white", display: "flex",width: '100%' }}>
                    <div style={{width: '100%'}}>
<Navbars/>
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
                <HomePage />
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
