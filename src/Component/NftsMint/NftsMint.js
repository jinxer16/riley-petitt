import React, { useState } from 'react'
import nftspic from "../../Assets/000 1.png"
import "./NftsMint.css"
import Frame31 from "../../Assets/Frame 31.png"
import Frame32 from "../../Assets/Frame 32.png"
import card1 from "../../Assets/03.png"
import Card from 'react-bootstrap/Card';
import heart from "../../Assets/heart.png"
import Modal from 'react-bootstrap/Modal';
import { IoMdClose } from "react-icons/io";
import Group1 from "../../Assets/Group 48095516.png"
import Group2 from "../../Assets/Group 48095517.png"
import Group3 from "../../Assets/Group 48095518.png"
import Group4 from "../../Assets/Group 48095519.png"
import Group5 from "../../Assets/Group 48095516 (1).png"
import Group6 from "../../Assets/Group 48095517 (1).png"
import Group7 from "../../Assets/Group 48095518 (1).png"
function NftsMint() {

    const [modalShow, setModalShow] = useState(false);
    const [modalShowOne, setModalShowOne] = useState(false)
    return (
        <div className=' container-fluid' style={{ paddingTop: "50px" }}>
            <div className='row'>
                <div className='col-lg-12'>
                    <h2 className='homepageh2'>NFT MINT</h2>
                </div>
            </div>

            <div className='row d-flex justify-content-center  '>
                <div className='col-lg-12 NftsMintImage ' >
                    <div className='row d-flex justify-content-around align-items-center flex-lg-row flex-column-reverse pt-5 pb-4'>
                        <div className='col-4 ' id="screen-Dispaly" style={{ position: 'relative' }}>
                            <img src={nftspic} className=" image-design " />
                        </div>
                        <div className='col-lg-4' id='media-display'>
                            <img src={nftspic} className="img-fluid imge-fixed" />
                        </div>
                        <div className='col-lg-6 text-start '>
                            <div className='row'>
                                <div className='col-lg-12 text-start '>
                                    <h3 className='FullSpend'>Real Mining, Real Rewards</h3>
                                    <p className='FullSpend-p'>Each NFT is a contract to buy 800 GH/s worth of Kadena mining power. Your miner will be hosted in a completely renewable facility, allowing you to mine without the hassle of doing it at home.</p>
                                </div>
                                <div className='col-lg-12 text-start '>
                                    <h4 className='FullSpendh4'>Mint with KDA, ETH, or Credit Card</h4>
                                    <p className='FullSpend-p'>To fulfill our mission of mining for all, we are accepting a variety of payment methods including KDA, ETH, kwUSDC, and Credit Cards. For assistance minting, please join our Discord and we will support you.</p>
                                </div>
                            </div>

                            <div className='border-Nfts'>
                                <p className='FullSpend-p mt-3'>X-Wallet by Kaddex is our preferred way to mint with Kadena. Get it here.</p>
                                <div>
                                    <button className='btn-nftsMint' onClick={() => setModalShow(true)}>Click here to Mint</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='row mt-2 d-flex  align-items-center justify-content-between'>
                <div className='col-lg-6 text-start mt-2'>
                    <span className='Featured-span'>Featured NFTs</span>
                </div>
                <div className='col-lg-6 d-flex justify-content-md-end mt-2' >
                    <div class="select-dropdown border-gradient border-gradient-purple">
                        <select>
                            <option value="Option 1">Popular</option>
                            <option value="Option 2">Popular</option>
                            <option value="Option 3">Popular</option>
                        </select>
                    </div>
                    <div>
                        <img src={Frame31} className="me-2 ms-2" />
                        <img src={Frame32} />
                    </div>
                </div>

            </div>

            <div className='row mt-4  flex-row justify-content-md-between justify-content-center '>

                <Card style={{ width: "16rem" }} className="card-Box border mt-2">
                    <div style={{ border: '2px solid #01DE8E', borderRadius: '7px' }}>
                        <Card.Img src={card1} className="img-fluid " />
                        <Card.Body style={{ backgroundColor: "#000000" }}>
                            <div className=' d-flex justify-content-between'>
                                <span className='Dragon-span'>Dragon’s Den</span>
                                <img src={heart} />
                            </div>
                            <div className=' d-flex justify-content-start mt-3'>
                                <span className='Miner-span'>
                                    Miner #4290
                                </span>
                            </div>
                            <div className=' d-flex justify-content-between mt-3'>
                                <span className='Price-span'>Price</span>
                                <span className='Price-span'>165 KDA</span>
                            </div>
                            <div className='col-12 mt-3'>
                                <div className="d-grid gap-2">
                                    <button className='btn-bid' size="lg">
                                        Place a Bid
                                    </button>
                                </div>
                            </div>
                        </Card.Body>
                    </div>
                </Card>

                <Card style={{ width: "16rem", }} className="card-Box mt-2">
                    <div style={{ border: '2px solid #01DE8E', borderRadius: '7px' }}>
                        <Card.Img src={card1} className="img-fluid " />
                        <Card.Body style={{ backgroundColor: "#000000" }}>
                            <div className=' d-flex justify-content-between'>
                                <span className='Dragon-span'>Dragon’s Den</span>
                                <img src={heart} />
                            </div>
                            <div className=' d-flex justify-content-start mt-3'>
                                <span className='Miner-span'>
                                    Miner #4290
                                </span>
                            </div>
                            <div className=' d-flex justify-content-between mt-3'>
                                <span className='Price-span'>Price</span>
                                <span className='Price-span'>165 KDA</span>
                            </div>
                            <div className='col-12 mt-3'>
                                <div className="d-grid gap-2">
                                    <button className='btn-bid' size="lg">
                                        Place a Bid
                                    </button>
                                </div>
                            </div>
                        </Card.Body>
                    </div>
                </Card>

                <Card style={{ width: "16rem", }} className="card-Box mt-2">
                    <div style={{ border: '2px solid #01DE8E', borderRadius: '7px' }}>
                        <Card.Img src={card1} className="img-fluid " />
                        <Card.Body style={{ backgroundColor: "#000000" }}>
                            <div className=' d-flex justify-content-between'>
                                <span className='Dragon-span'>Dragon’s Den</span>
                                <img src={heart} />
                            </div>
                            <div className=' d-flex justify-content-start mt-3'>
                                <span className='Miner-span'>
                                    Miner #4290
                                </span>
                            </div>
                            <div className=' d-flex justify-content-between mt-3'>
                                <span className='Price-span'>Price</span>
                                <span className='Price-span'>165 KDA</span>
                            </div>
                            <div className='col-12 mt-3'>
                                <div className="d-grid gap-2">
                                    <button className='btn-bid' size="lg">
                                        Place a Bid
                                    </button>
                                </div>
                            </div>
                        </Card.Body>
                    </div>
                </Card>

                <Card style={{ width: "16rem", }} className="card-Box mt-2">
                    <div style={{ border: '2px solid #01DE8E', borderRadius: '7px' }}>
                        <Card.Img src={card1} className="img-fluid " />
                        <Card.Body style={{ backgroundColor: "#000000" }}>
                            <div className=' d-flex justify-content-between'>
                                <span className='Dragon-span'>Dragon’s Den</span>
                                <img src={heart} />
                            </div>
                            <div className=' d-flex justify-content-start mt-3'>
                                <span className='Miner-span'>
                                    Miner #4290
                                </span>
                            </div>
                            <div className=' d-flex justify-content-between mt-3'>
                                <span className='Price-span'>Price</span>
                                <span className='Price-span'>165 KDA</span>
                            </div>
                            <div className='col-12 mt-3'>
                                <div className="d-grid gap-2">
                                    <button className='btn-bid' size="lg">
                                        Place a Bid
                                    </button>
                                </div>
                            </div>
                        </Card.Body>
                    </div>
                </Card>


            </div>


            {modalShow ? (
                <Modal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className='settingcontanier'
                >

                    <div className='row modal-style'>
                       
                            <div className='col-12 d-flex align-items-center justify-content-between mt-3'>
                                <span className='modal-style-span'>Mint by Using</span>
                                <IoMdClose
                                    onClick={() => setModalShow(false)}
                                    size={22}
                                    style={{ color: "#01DE8E", cursor: "pointer", }}
                                />
                            </div>

                            <div className='col-8 d-flex align-items-center justify-content-between mt-3' style={{borderBottom: '1px solid #01DE8E', cursor: 'pointer'}} onClick={()=>setModalShowOne(true)}>
                                <span className='modal-style-span-text'>Kadena</span>
                                <img src={Group1}/>
                            </div>

                            <div className='col-8 d-flex align-items-center justify-content-between mt-3' style={{borderBottom: '1px solid #01DE8E'}}>
                                <span className='modal-style-span-text'>Ethereum</span>
                                <img src={Group2}/>
                            </div>

                            <div className='col-8 d-flex align-items-center justify-content-between mt-3' style={{borderBottom: '1px solid #01DE8E'}}>
                                <span className='modal-style-span-text'>Credit Card</span>
                                <img src={Group3}/>
                            </div>

                            <div className='col-8 d-flex align-items-center justify-content-between mt-3 mb-4'>
                                <span className='modal-style-span-text'>kwUSDC</span>
                                <img src={Group4}/>
                            </div>
                           
                    </div>

                </Modal>
            ) :
                (
                    <>
                    </>
                )}

                {modalShowOne? (   <Modal
                    show={modalShowOne}
                    onHide={() => setModalShowOne(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className='settingcontanier'
                >

                    <div className='row modal-style'>
                       
                            <div className='col-12 d-flex align-items-center justify-content-between mt-3'>
                                <span className='modal-style-span'>Connect Wallet</span>
                                <IoMdClose
                                    onClick={() => setModalShowOne(false)}
                                    size={22}
                                    style={{ color: "#01DE8E", cursor: "pointer", }}
                                />
                            </div>

                            <div className='col-8 d-flex align-items-center justify-content-between mt-3' style={{borderBottom: '1px solid #01DE8E'}}>
                                <span className='modal-style-span-text'>X-wallet</span>
                                <img src={Group5}/>
                            </div>

                            <div className='col-8 d-flex align-items-center justify-content-between mt-3' style={{borderBottom: '1px solid #01DE8E'}}>
                                <span className='modal-style-span-text'>Zelcore</span>
                                <img src={Group6}/>
                            </div>
                    </div>

                </Modal>

                ) : (<>
                </>)   
            }
        </div>
    )
}

export default NftsMint